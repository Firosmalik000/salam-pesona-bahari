import { FaBriefcase, FaGavel, FaHandshake, FaUsers } from 'react-icons/fa';
import { useLanguage } from '../hooks/UseLanguage';

const Service = () => {
  const { language } = useLanguage();

  const companyHighlights = {
    en: [
      {
        title: 'Experienced',
        description: 'We have successfully deployed thousands of workers through our company.',
        icon: <FaBriefcase className="text-4xl text-blue-500 mb-4" />,
      },
      {
        title: 'Official Legal Status',
        description: 'Our company has a registered legal entity.',
        icon: <FaGavel className="text-4xl text-green-500 mb-4" />,
      },
      {
        title: 'Committed',
        description: 'Established in 2000, we are committed to helping Indonesian migrant workers achieve a better future.',
        icon: <FaHandshake className="text-4xl text-yellow-500 mb-4" />,
      },
      {
        title: 'Professional',
        description: 'We provide competent workers according to the standards set by our professional partners.',
        icon: <FaUsers className="text-4xl text-red-500 mb-4" />,
      },
    ],
    id: [
      {
        title: 'Berpengalaman',
        description: 'Kami telah memberangkatkan ribuan tenaga kerja yang sukses melalui perusahaan kami.',
        icon: <FaBriefcase className="text-4xl text-blue-500 mb-4" />,
      },
      {
        title: 'Legalitas Resmi',
        description: 'Perusahaan kami memiliki badan hukum yang sah dan terdaftar.',
        icon: <FaGavel className="text-4xl text-green-500 mb-4" />,
      },
      {
        title: 'Berkomitmen',
        description: 'Berdiri sejak tahun 2000, kami berkomitmen membantu Pekerja Migran Indonesia mewujudkan masa depan yang lebih baik.',
        icon: <FaHandshake className="text-4xl text-yellow-500 mb-4" />,
      },
      {
        title: 'Profesional',
        description: 'Kami mengirim tenaga kerja yang kompeten sesuai dengan standar yang ditetapkan oleh mitra profesional kami.',
        icon: <FaUsers className="text-4xl text-red-500 mb-4" />,
      },
    ],
  };

  return (
    <section id="service" className="w-full py-16 md:px-[100px] px-[60px] bg-[#FF6500]">
      {/* Language Selector */}

      <h1 className="text-center text-4xl text-white font-bold mb-8 font-playfair">{language === 'en' ? 'Why Choose PT. Salam Pesona Bahari' : 'Mengapa Memilih PT. Salam Pesona Bahari'}</h1>
      <p className="text-center text-xl text-white mb-12">{language === 'en' ? 'We offer the following key benefits:' : 'Kami menawarkan manfaat utama berikut:'}</p>

      {/* Service Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {companyHighlights[language].map((highlight, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center hover:scale-110 transition duration-300">
            <div className="flex justify-center mb-4">{highlight.icon}</div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2 font-playfair">{highlight.title}</h2>
            <p className="text-gray-600">{highlight.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
