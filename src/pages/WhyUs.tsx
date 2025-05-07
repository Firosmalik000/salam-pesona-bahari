import { useLanguage } from '../hooks/UseLanguage';
import { motion } from 'framer-motion';

const WhyUs = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'WHY YOU SHOULD PARTNER WITH US',
      points: [
        'Has years of experience',
        'Reliable and easy to contact',
        'Works hard to find crews who are willing to endure hardships',
        'Never takes advantage of our crew',
        'Always strives to find the best solution if problems arise with crew onboard',
      ],
    },
    id: {
      title: 'MENGAPA ANDA HARUS BERMITRA DENGAN KAMI',
      points: [
        'Memiliki pengalaman bertahun-tahun',
        'Dapat diandalkan dan mudah dihubungi',
        'Berusaha keras untuk menemukan kru yang bersedia menerima kesulitan',
        'Jangan pernah mengambil keuntungan dari kru kami',
        'Selalu berusaha mencari solusi terbaik jika terjadi masalah dengan kru di kapal',
      ],
    },
    zh: {
      title: '为什么您应该与我们合作',
      points: ['拥有多年的经验', '可靠且容易联系', '努力寻找愿意吃苦耐劳的船员', '从不占船员的便宜', '如船上船员出现问题，总是尽力寻找最佳解决方案'],
    },
  };

  return (
    <section id="whyus" className="w-full py-16 px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 font-playfair">{content[language].title}</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {content[language].points.map((point, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: index * 0.2, duration: 0.5, ease: 'easeOut' }}
              key={index}
              className="flex gap-4 items-start"
            >
              <div className="bg-orange-500 text-white rounded-full px-4 py-2 flex items-center justify-center text-xl font-bold">{index + 1}</div>
              <p className="text-lg text-gray-700">{point}</p>
            </motion.div>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhyUs;
