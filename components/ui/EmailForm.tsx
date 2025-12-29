import React, { useState } from 'react';
import { ArrowRight, Check, AlertCircle } from 'lucide-react';

interface EmailFormProps {
  id: string;
  buttonText: string;
  fullWidth?: boolean;
}

// 🔴 ВАЖЛИВО: Замініть цей рядок на ваше посилання з Google Apps Script
// Якщо залишити порожнім, форма просто імітуватиме успішну відправку
const GOOGLE_SCRIPT_URL = ""; 

const EmailForm: React.FC<EmailFormProps> = ({ id, buttonText, fullWidth = false }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setStatus('error');
      return;
    }

    setStatus('loading');
    
    // Якщо URL не налаштовано, імітуємо успіх (для демо)
    if (!GOOGLE_SCRIPT_URL || GOOGLE_SCRIPT_URL === "") {
      console.log(`Simulating submission for: ${email} from source: ${id}`);
      setTimeout(() => {
        setStatus('success');
        setEmail('');
      }, 1500);
      return;
    }

    try {
      // Створюємо FormData для відправки
      const formData = new FormData();
      formData.append('email', email);
      formData.append('source', id);

      // Використовуємо mode: 'no-cors', щоб уникнути помилок браузера при запиті до Google
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
      });

      // При no-cors ми не можемо читати статус відповіді, тому вважаємо, 
      // що якщо запит пройшов без мережевої помилки - це успіх.
      setStatus('success');
      setEmail('');
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-lumica-green/30 text-emerald-800 px-6 py-4 rounded-2xl flex items-center gap-3 animate-in fade-in zoom-in">
        <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center shrink-0">
          <Check size={16} className="text-emerald-600" />
        </div>
        <div>
          <p className="font-semibold text-base">Дякуємо!</p>
          <p className="text-sm opacity-90">Ми повідомимо вас про запуск.</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col sm:flex-row gap-3 ${fullWidth ? 'w-full' : ''}`}>
      <div className="relative flex-grow">
        <input
          type="email"
          id={id}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if(status === 'error') setStatus('idle');
          }}
          placeholder="tviy@email.com"
          className={`w-full px-5 py-3.5 bg-gray-50 border ${status === 'error' ? 'border-red-300 focus:ring-red-200' : 'border-gray-200 focus:ring-lumica-green'} rounded-xl focus:outline-none focus:ring-4 transition-all text-lumica-dark placeholder-gray-400 text-base`}
        />
        {status === 'error' && (
           <div className="absolute -bottom-7 left-2 flex items-center gap-1 text-sm text-red-600 font-medium animate-in slide-in-from-top-1">
             <AlertCircle size={14} />
             <span>Перевірте, чи правильно вказано email</span>
           </div>
        )}
      </div>
      <button
        type="submit"
        disabled={status === 'loading'}
        className={`bg-lumica-dark text-white px-6 py-3.5 rounded-xl font-medium hover:bg-black transition-colors flex items-center justify-center gap-2 text-base ${status === 'loading' ? 'opacity-70 cursor-not-allowed' : ''}`}
      >
        {status === 'loading' ? 'Обробка...' : buttonText}
        {!status && <ArrowRight size={18} />}
      </button>
    </form>
  );
};

export default EmailForm;