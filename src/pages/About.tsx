import { useLanguage } from '../hooks/UseLanguage';
import AboutImage from '../img/aboutreq.png';

const About = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'About Us',
      description: `PT. Salam Pesona Bahari is a labor placement agency for Fishing, Cargo, and Tanker vessels in various locations. We are committed to helping workers find jobs that match their abilities. PT. Salam Pesona Bahari is headquartered in North Jakarta City, but also has a branch in Cirebon. We have sent thousands of workers abroad for years through a fast, safe, and reliable process. We are committed to creating professional workers in accordance with applicable laws and regulations.`,
    },
    id: {
      title: 'Tentang Kami',
      description: `PT. Salam Pesona Bahari adalah agen penempatan tenaga kerja kapal Ikan, Kargo, dan Tanker di berbagai lokasi. Kami berkomitmen untuk membantu pekerja menemukan perkerjaan yang sesuai dengan kemampuan mereka. PT. Salam Pesona Bahari memiliki kantor pusat di Kota Jakarta Utara, tetapi juga memiliki cabang di Cirebon. Kami telah mengirimkan ribuan pekerja ke luar negeri selama bertahun tahun melalui proses yang cepat, aman, dan dapat diandalkan. Kami berkomitmen untuk menciptakan pekerja profesional sesuai dengan hukum dan peraturan yang berlaku.`,
    },
  };

  return (
		<section id="about" className="w-full bg-[#1e4172] py-16 px-6 md:px-20 lg:px-[200px]">
			<div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
				<div className="max-w-lg border-white p-6 md:p-8">
					<h1 className="text-white text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-center font-playfair">{content[language].title}</h1>
					<p className="text-white text-base md:text-lg indent-8 text-justify">{content[language].description}</p>
				</div>
				<img src={AboutImage} alt="About PT Salam Pesona Bahari" className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-cover rounded-xl shadow-lg" />
			</div>
		</section>
  );
};

export default About;
