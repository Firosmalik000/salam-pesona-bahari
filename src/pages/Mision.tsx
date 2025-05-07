import { useLanguage } from '../hooks/UseLanguage';
import ClientImage from '../img/client.jpg';
import { motion } from 'framer-motion';

const Mision = () => {
  const { language } = useLanguage();

  const classMission = 'relative flex flex-col justify-center items-center text-center text-lg md:text-xl w-full max-w-[350px] md:max-w-[500px] p-6 z-10 bg-white rounded-lg shadow-md mx-auto';

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
    zh: {
      title: '我们的使命',
      descriptions: [
        '实施质量管理体系，并为每一位受雇的印尼海员作出积极贡献。',
        '专注于满足我们海员的核心能力要求。',
        '发展和保护利益，同时为客户提供最佳服务。',
        '实现预期的利润目标。',
        '为员工维持一个安全、舒适和令人满意的工作环境。',
        '为所有印尼海员提供平等的就业机会。',
      ],
    },
  };

  return (
    <section id="mision" className="w-full py-16 md:px-[100px] px-4 bg-gray-100">
      <div className="flex flex-col items-center">
        <img src={ClientImage} alt="Client" className="w-full h-[650px] object-cover rounded-lg shadow-lg" />
        <h1 className="text-center text-3xl md:text-4xl font-bold font-playfair mb-8 text-gray-800 mt-5">{content[language].title}</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {content[language].descriptions.map((desc, index) => (
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ delay: index * 0.2, duration: 0.5, ease: 'easeOut' }} key={index} className={classMission}>
              <p className="text-4xl md:text-5xl font-bold absolute top-0 left-0 text-gray-700">{String(index + 1).padStart(2, '0')}</p>
              <p className="relative z-10 ml-2 mt-5">{desc}</p>
              <div className="w-1/2 md:w-3/4 h-24 md:h-32 bg-blue-300 absolute right-0 top-5 rounded-lg shadow-lg z-[-1]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mision;
