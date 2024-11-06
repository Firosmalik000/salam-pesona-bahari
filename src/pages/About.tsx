import { useLanguage } from '../hooks/UseLanguage';
import AboutImage from '../img/aboutreq.png';

const About = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'About Us',
      description: `PT. Salam Pesona Bahari is an Indonesian Migrant Worker Placement Company. Currently, PT Salam Pesona Bahari is located in Jakarta and has a branch in the Cirebon area. For decades, PT Salam Pesona Bahari has sent thousands of workers abroad through a fast, safe, and reliable process. We are committed to creating professional workers in compliance with applicable laws and regulations.`,
    },
    id: {
      title: 'Tentang Kami',
      description: `PT. Salam Pesona Bahari adalah Perusahaan Penempatan Pekerja Migran Indonesia. Saat ini, PT Salam Pesona Bahari berlokasi di Jakarta dan memiliki cabang di daerah Cirebon. Selama puluhan tahun, PT Salam Pesona Bahari telah mengirimkan ribuan pekerja ke luar negeri melalui proses yang cepat, aman, dan dapat diandalkan. Kami berkomitmen untuk menciptakan pekerja profesional sesuai dengan hukum dan peraturan yang berlaku.`,
    },
  };

  return (
    <section id="about" className="w-full bg-[#1e4172] py-16 md:px-[200px] px-[60px]">
      <div className="flex flex-col md:flex-row lg:flex-row items-center justify-center gap-x-3">
        <div className="w-[450px] border-white p-8">
          <h1 className="text-white text-4xl font-bold mb-6 text-center font-playfair">{content[language].title}</h1>
          <p className="text-white mb-4 indent-8 text-lg md:text-xl text-justify">{content[language].description}</p>
        </div>
        <img src={AboutImage} alt="About PT Salam Pesona Bahari" className="md:w-[400px] w-[500px] md:h-[550px] h-auto object-cover rounded-xl shadow-lg" />
      </div>
    </section>
  );
};

export default About;
