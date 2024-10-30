import { useLanguage } from '../hooks/UseLanguage';
import kapal1 from '../img/KAPAL_CANTRANG.png';
import kapal2 from '../img/KEPITING.jpg';
import kapal3 from '../img/slide5.jpg';
import kapal4 from '../img/KAPAL_PURSE_SEINE.png';
import kapal5 from '../img/KAPAL_TRAWL.png';
import kapal6 from '../img/slide3.jpg';

const Devisi = () => {
  const { language } = useLanguage();

  const content = {
    id: {
      title: 'Jenis Kapal',
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
      title: 'Ship Types',
      kapalList: [
        { name: 'LONG LINE SHIP', img: kapal3 },
        { name: 'SQUID SHIP', img: kapal6 },
        { name: 'CRAB SHIP', img: kapal2 },
        { name: 'PURSE SEINE SHIP', img: kapal4 },
        { name: 'CANTRANG SHIP', img: kapal1 },
        { name: 'TRAWL SHIP', img: kapal5 },
      ],
    },
  };

  return (
    <section id="devisi" className="w-full max-w-screen-lg px-8 py-16 bg-gray-50 mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">{content[language].title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {content[language].kapalList.map((item, index) => (
          <div key={index} className="text-center">
            <img src={item.img} alt={item.name} className="w-[400px] h-[250px] object-cover mb-4 rounded-lg transition-transform duration-300 hover:scale-105" />
            <h3 className="text-xl font-semibold">{item.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Devisi;
