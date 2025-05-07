import React, { createContext, useState, ReactNode, useEffect } from 'react';

interface LanguageContextType {
  language: 'en' | 'id' | 'zh';
  setLanguage: (language: 'en' | 'id' | 'zh') => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'en' | 'id' | 'zh'>(() => {
    const storedLanguage = localStorage.getItem('language');
    return (storedLanguage as 'en' | 'id' | 'zh') || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
};

export default LanguageContext;
