'use client'
import { useLanguage } from '../context/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2 ml-4">
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 rounded-md ${language === 'en' ? 'bg-[#fff] text-[#283061] font-bold' : 'text-white'}`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('fr')}
        className={`px-3 py-1 rounded-md ${language === 'fr' ? 'bg-[#fff] text-[#283061] font-bold' : 'text-white'}`}
      >
        FR
      </button>
    </div>
  );
};

export default LanguageSwitcher;