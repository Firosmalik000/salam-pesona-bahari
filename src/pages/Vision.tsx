import { useLanguage } from '../hooks/UseLanguage';
import VisionImg from '../img/KAPAL_POLE_AND_LINE.jpg';
import { motion } from 'framer-motion';

const Vision = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Our Vision',
      description: 'TO BECOME A QUALITY AND TRUSTED SEAFARER RECRUITMENT AND PLACEMENT SERVICE COMPANY',
    },
    id: {
      title: 'Visi Kami',
      description: 'MENJADI PERUSAHAAN JASA PEREKRUTAN DAN PENEMPATAN PELAUT YANG BERKUALITAS DAN TERPERCAYA',
    },
    zh: {
      title: '我们的愿景',
      description: '成为一家优质且值得信赖的船员招聘与安置服务公司',
    },
  };

  return (
    <section id="vision" className="w-full h-[550px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${VisionImg})` }}>
      <div className="w-full h-full py-16 px-8 bg-gradient-to-b md:bg-gradient-to-r from-black/100 via-black/50 to-transparent  flex items-center justify-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ delay: 0.2, duration: 0.5, ease: 'easeOut' }} className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8 font-playfair">{content[language].title}</h1>
          <p className="text-xl text-white max-w-3xl mx-auto">{content[language].description}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Vision;
