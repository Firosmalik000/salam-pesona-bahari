import { useLanguage } from '../hooks/UseLanguage';
import ClientImage from '../img/client.jpg';

const Mision = () => {
  const { language } = useLanguage();

  const classMission = 'relative flex flex-col justify-center items-center text-center text-lg md:text-xl w-full max-w-[350px] md:max-w-[500px] p-6 z-10 bg-white rounded-lg shadow-md md:mx-0 mx-auto';

  const content = {
    en: {
      title: 'Our Mission',
      descriptions: [
        'Implementing a quality management system and positively contributing to every Indonesian seafarer employed.',
        'Focusing on meeting the core competencies of our seafarers to fulfill requirements.',
        'Developing and protecting interests while providing the best service for our clients.',
        'Achieving the expected profit targets.',
        'Maintaining a safe, comfortable, and satisfying work environment for our employees.',
        'Providing equal job opportunities for all Indonesian seafarers.',
      ],
    },
    id: {
      title: 'Misi Kami',
      descriptions: [
        'Menjalankan sistem manajemen yang berkualitas dan turut berkontribusi positif kepada setiap pelaut Indonesia yang dipekerjakan.',
        'Berfokus pada pemenuhan kompetensi utama pelaut kami guna memenuhi persyaratan.',
        'Mengembangkan dan melindungi kepentingan serta memberikan pelayanan terbaik bagi klien kami.',
        'Mencapai target keuntungan yang diharapkan.',
        'Menjaga lingkungan kerja yang aman, nyaman, dan memuaskan bagi karyawan kami.',
        'Memberikan kesempatan kerja yang sama bagi semua pelaut Indonesia.',
      ],
    },
  };

  return (
    <section id="mision" className="w-full py-16 px-[100px] bg-gray-100">
      <div className="flex-col   items-center justify-center">
        <div className="flex gap-4 w-full ">
          <img src={ClientImage} alt="Client" className="w-full h-[650px] object-cover rounded-lg shadow-lg" />
        </div>{' '}
        <h1 className="text-center text-3xl md:text-4xl font-bold font-playfair mb-8 text-gray-800">{content[language].title}</h1>
        <div className="grid grid-cols-1 md:grid-cols-3  gap-8 w-full ">
          <div className={classMission}>
            <p className="text-4xl md:text-5xl font-bold absolute top-0 left-0 text-gray-700">01</p>
            <p className="relative z-10 ml-2 mt-5">{content[language].descriptions[0]}</p>
            <div className="w-1/2 md:w-3/4 h-24 md:h-32 bg-orange-300 absolute right-0 top-5 rounded-lg shadow-lg z-[-1]" />
          </div>
          <div className={classMission}>
            <p className="text-4xl md:text-5xl font-bold absolute top-0 left-0 text-gray-700">02</p>
            <p className="relative z-10 ml-2 mt-5">{content[language].descriptions[1]}</p>
            <div className="w-1/2 md:w-3/4 h-24 md:h-32 bg-blue-300 absolute right-0 top-5 rounded-lg shadow-lg z-[-1]" />
          </div>
          <div className={classMission}>
            <p className="text-4xl md:text-5xl font-bold absolute top-0 left-0 text-gray-700">03</p>
            <p className="relative z-10 ml-2 mt-5">{content[language].descriptions[2]}</p>
            <div className="w-1/2 md:w-3/4 h-24 md:h-32 bg-blue-300 absolute right-0 top-5 rounded-lg shadow-lg z-[-1]" />
          </div>
          <div className={classMission}>
            <p className="text-4xl md:text-5xl font-bold absolute top-0 left-0 text-gray-700">04</p>
            <p className="relative z-10 ml-2 mt-5">{content[language].descriptions[3]}</p>
            <div className="w-1/2 md:w-3/4 h-24 md:h-32 bg-blue-300 absolute right-0 top-5 rounded-lg shadow-lg z-[-1]" />
          </div>
          <div className={classMission}>
            <p className="text-4xl md:text-5xl font-bold absolute top-0 left-0 text-gray-700">05</p>
            <p className="relative z-10 ml-2 mt-5">{content[language].descriptions[4]}</p>
            <div className="w-1/2 md:w-3/4 h-24 md:h-32 bg-blue-300 absolute right-0 top-5 rounded-lg shadow-lg z-[-1]" />
          </div>
          <div className={classMission}>
            <p className="text-4xl md:text-5xl font-bold absolute top-0 left-0 text-gray-700">06</p>
            <p className="relative z-10 ml-2 mt-5">{content[language].descriptions[5]}</p>
            <div className="w-1/2 md:w-3/4 h-24 md:h-32 bg-blue-300 absolute right-0 top-5 rounded-lg shadow-lg z-[-1]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mision;
