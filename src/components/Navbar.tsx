import { useState, useEffect } from 'react';
import LogoImage from '../img/logonav.png';
import { useLanguage } from '../hooks/UseLanguage';
import { FaTimes } from 'react-icons/fa';
import { IoMenuSharp } from 'react-icons/io5';
type LanguageType = 'en' | 'id';
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for controlling menu visibility
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const texts = {
    en: {
      aboutUs: 'About Us',
      vision: 'Vision',
      mission: 'Mission',
      service: 'Service',
      whyus: 'Why Us',
      contactUs: 'Contact Us',
    },
    id: {
      aboutUs: 'Tentang Kami',
      vision: 'Visi',
      mission: 'Misi',
      service: 'Layanan',
      whyus: 'Mengapa Kami',
      contactUs: 'Hubungi Kami',
    },
  };

  const classOptionNav = 'cursor-pointer font-semibold';
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className={`fixed top-0 z-50 w-full transition-colors duration-300 ${isScrolled ? 'bg-white shadow-lg text-black' : 'bg-[#1E3E62] bg-opacity-70 text-white'}`}>
      <div className="container mx-auto flex items-center justify-between h-[90px] px-4 md:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <img src={LogoImage} className="w-12 md:w-16" alt="Logo" />
          <p className="text-2xl md:text-3xl font-bold font-sans">Salam Pesona Bahari</p>
        </div>

        <div className="hidden lg:flex items-center gap-x-4">
          <div className="items-center gap-x-4">
            <select value={language} onChange={(e) => setLanguage(e.target.value as LanguageType)} className="px-3 py-2 rounded-lg bg-gray-200 text-gray-800 cursor-pointer">
              <option value="en">English</option>
              <option value="id">Indonesia</option>
            </select>
          </div>
          <div onClick={() => handleScrollTo('about')} className={classOptionNav}>
            {texts[language].aboutUs}
          </div>
          <div onClick={() => handleScrollTo('vision')} className={classOptionNav}>
            {texts[language].vision}
          </div>
          <div onClick={() => handleScrollTo('mision')} className={classOptionNav}>
            {texts[language].mission}
          </div>
          <div onClick={() => handleScrollTo('service')} className={classOptionNav}>
            {texts[language].service}
          </div>
          <div onClick={() => handleScrollTo('whyus')} className={classOptionNav}>
            {texts[language].whyus}
          </div>
          <div onClick={() => handleScrollTo('contact')} className={classOptionNav}>
            {texts[language].contactUs}
          </div>
        </div>

        {/* <div className="hidden lg:flex items-center gap-x-4">
          <button className={`px-4 py-2 rounded-lg ${language === 'en' ? 'bg-blue-300 text-white' : 'bg-gray-200 text-gray-800'}`} onClick={() => setLanguage('en')}>
            English
          </button>
          <button className={`px-4 py-2 rounded-lg ${language === 'id' ? 'bg-blue-300 text-white' : 'bg-gray-200 text-gray-800'}`} onClick={() => setLanguage('id')}>
            Indonesia
          </button>
        </div> */}

        <button className="lg:hidden text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes /> : <IoMenuSharp size={30} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-blue-700 text-white flex flex-col items-center justify-center pt-16">
          <div className="absolute top-4 right-4 cursor-pointer" onClick={() => setIsMenuOpen(false)}>
            <FaTimes size={30} />
          </div>
          <div className="flex flex-col gap-y-4 text-xl">
            <div onClick={() => handleScrollTo('about')} className="cursor-pointer text-center">
              {texts[language].aboutUs}
            </div>
            <div onClick={() => handleScrollTo('vision')} className="cursor-pointer text-center">
              {texts[language].vision}
            </div>
            <div onClick={() => handleScrollTo('mision')} className="cursor-pointer text-center">
              {texts[language].mission}
            </div>
            <div onClick={() => handleScrollTo('service')} className="cursor-pointer text-center">
              {texts[language].service}
            </div>
            <div onClick={() => handleScrollTo('whyus')} className="cursor-pointer text-center">
              {texts[language].whyus}
            </div>
            <div onClick={() => handleScrollTo('contact')} className="cursor-pointer text-center">
              {texts[language].contactUs}
            </div>
          </div>
          <div className="flex gap-x-4 mt-4">
            <button className={`px-4 py-2 rounded-lg ${language === 'en' ? 'bg-blue-800 text-white' : 'bg-gray-200 text-gray-800'}`} onClick={() => setLanguage('en')}>
              English
            </button>
            <button className={`px-4 py-2 rounded-lg ${language === 'id' ? 'bg-blue-800 text-white' : 'bg-gray-200 text-gray-800'}`} onClick={() => setLanguage('id')}>
              Indonesia
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
