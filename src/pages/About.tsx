import { useLanguage } from '../hooks/UseLanguage';
import AboutImage from '../img/profile.jpeg';

const About = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'About Us',
      description: `PT. Salam Pesona Bahari is an Indonesian Migrant Worker Placement Company. Currently, PT Salam Pesona Bahari is located in Jakarta and has a branch in the Cirebon area. For decades, PT Salam Pesona Bahari has sent thousands of workers abroad through a fast, safe, and reliable process. We are committed to creating professional workers in compliance with applicable laws and regulations.
`,
    },
    id: {
      title: '关于我们',
      description: `凯文航运公司（KS）是印度尼西亚领先的驳船和拖船租赁服务提供商。我们提供广泛的海洋运输服务，以满足客户的多样化需求。我们致力于安全、可靠和客户满意，使我们成为各行业企业的可信赖伙伴。我们致力于为您的海洋运输需求提供高效且具有成本效益的解决方案。`,
    },
  };

  return (
    <section id="about" className="w-full  bg-[#1e4172] py-16 md:px-[200px] px-[60px] ">
      <div className="flex flex-col md:flex-row lg:flex-row items-center justify-center gap-x-3">
        <div className="w-[450px] border-white p-8">
          <h1 className="text-white text-4xl font-bold mb-6 text-center font-playfair">{content[language].title}</h1>
          <p className="text-white mb-4 indent-8 text-xl text-justify">{content[language].description}</p>
        </div>
        <img src={AboutImage} alt="About PT Kevin Shipping" className="md:w-[550px] w-[500px] md:h-[550px] h-auto object-cover rounded-xl shadow-lg" />
      </div>
    </section>
  );
};

export default About;
