import { useLanguage } from '../hooks/UseLanguage';
import kapal1 from '../img/KAPAL_CANTRANG.png';
import kapal2 from '../img/KEPITING.jpg';
import kapal3 from '../img/slide5.jpg';
import kapal4 from '../img/KAPAL_PURSE_SEINE.png';
import kapal5 from '../img/KAPAL_TRAWL.png';
import kapal6 from '../img/slide3.jpg';
import kargo from '../img/kargo.jpg';
import lepasPantai from '../img/lepas.jpg';
import tanker from '../img/tanker.jpeg';
import kontainer from '../img/kontainer.jpg';
import { motion } from 'framer-motion';

const Devisi = () => {
  const { language } = useLanguage();

  const content = {
    id: {
      title: 'Divisi Kapal Penangkapan Ikan',
      kapalList: [
        { name: 'KAPAL LONG LINE', img: kapal3 },
        { name: 'KAPAL CUMI', img: kapal6 },
        { name: 'KAPAL KEPITING', img: kapal2 },
        { name: 'KAPAL PURSE SEINE', img: kapal4 },
        { name: 'KAPAL CANTRANG', img: kapal1 },
        { name: 'KAPAL TRAWL', img: kapal5 },
      ],
    },
    en: {
      title: 'Fishing Vessel Division',
      kapalList: [
        { name: 'LONG LINE SHIP', img: kapal3 },
        { name: 'SQUID SHIP', img: kapal6 },
        { name: 'CRAB SHIP', img: kapal2 },
        { name: 'PURSE SEINE SHIP', img: kapal4 },
        { name: 'CANTRANG SHIP', img: kapal1 },
        { name: 'TRAWL SHIP', img: kapal5 },
      ],
    },
    zh: {
      title: '船只类型',
      kapalList: [
        { name: '延绳钓船', img: kapal3 },
        { name: '鱿鱼船', img: kapal6 },
        { name: '螃蟹船', img: kapal2 },
        { name: '围网船', img: kapal4 },
        { name: 'Cantrang 船', img: kapal1 },
        { name: '拖网船', img: kapal5 },
      ],
    },
  };

  const content2 = {
    id: {
      title: 'Devisi Kapal Niaga',
      kapalList: [
        { name: 'KAPAL TANKER', img: tanker },
        { name: 'KAPAL KARGO', img: kargo },
        { name: 'KAPAL KONTAINER', img: kontainer },
        { name: 'KAPAL LEPAS PANTAI', img: lepasPantai },
      ],
    },
    en: {
      title: 'Merchant Ship Division',
      kapalList: [
        { name: 'TANKER', img: tanker },
        { name: 'CARGO SHIP', img: kargo },
        { name: 'CONTAINER SHIP', img: kontainer },
        { name: 'OFFSHORE SHIP', img: lepasPantai },
      ],
    },
    zh: {
      title: '商船',
      kapalList: [
        { name: '油轮', img: tanker },
        { name: '货船', img: kargo },
        { name: '集装箱船', img: kontainer },
        { name: '海上船只', img: lepasPantai },
      ],
    },
  };

  return (
    <section id="devisi" className="w-full max-w-screen-lg px-8 py-16 mx-auto flex flex-col space-y-24">
      <div>
        <h2 className="text-3xl font-bold text-center mb-12">{content[language].title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {content[language].kapalList.map((item, index) => (
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ delay: index * 0.2, duration: 0.5, ease: 'easeOut' }} key={index} className="text-center">
              <img src={item.img} alt={item.name} className="w-[400px] h-[250px] object-cover mb-4 rounded-lg transition-transform duration-300 hover:scale-105" />
              <h3 className="text-xl font-semibold">{item.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-center mb-12">{content2[language].title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {content2[language].kapalList.map((item, index) => (
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ delay: index * 0.2, duration: 0.5, ease: 'easeOut' }} key={index} className="text-center">
              <img src={item.img} alt={item.name} className="w-[400px] h-[250px] object-cover mb-4 rounded-lg transition-transform duration-300 hover:scale-105" />
              <h3 className="text-xl font-semibold">{item.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Devisi;
