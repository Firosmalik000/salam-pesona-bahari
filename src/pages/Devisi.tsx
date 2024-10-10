import { useLanguage } from '../hooks/UseLanguage';
import div1 from '../img/div1.jpg';
import div2 from '../img/div2.jpg';

const Devisi = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Our Divisions',
      agriculture: 'Agriculture',
      agricultureDescription: 'Providing various land workers, from agriculture and livestock, according to their expertise.',
      factory: 'Factory',
      factoryDescription: 'Providing qualified factory workers.',
    },
    id: {
      title: 'Devisi Kami',
      agriculture: 'Pertanian',
      agricultureDescription: 'Menyediakan berbagai tenaga darat, mulai dari pertanian dan peternakan yang sesuai dengan keahlian.',
      factory: 'Pabrik',
      factoryDescription: 'Menyediakan tenaga kerja pabrik yang berkualitas.',
    },
  };

  return (
    <section id='devisi' className="w-full md:px-[100px] px-[60px] py-16 bg-gray-50">
      <div className="mb-6">
        <p className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-8  transition duration-300 hover:text-orange-500">{content[language].title}</p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Agriculture Section */}
        <div className="w-full max-w-sm min-h-[350px] bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300">
          <p className="text-center text-2xl font-semibold text-gray-700 mb-4">{content[language].agriculture}</p>
          <img src={div1} alt="Agriculture" className="w-full h-40 object-cover rounded-md mb-4 transition duration-300 hover:scale-105" />
          <p className="text-center text-gray-600">{content[language].agricultureDescription}</p>
        </div>

        {/* Factory Section */}
        <div className="w-full max-w-sm min-h-[350px] bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300">
          <p className="text-center text-2xl font-semibold text-gray-700 mb-4">{content[language].factory}</p>
          <img src={div2} alt="Factory" className="w-full h-40 object-cover rounded-md mb-4 transition duration-300 hover:scale-105" />
          <p className="text-center text-gray-600">{content[language].factoryDescription}</p>
        </div>
      </div>
    </section>
  );
};

export default Devisi;
