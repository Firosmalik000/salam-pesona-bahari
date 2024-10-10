import { FaClipboardCheck, FaUserCheck, FaPlaneDeparture } from 'react-icons/fa';
import { useLanguage } from '../hooks/UseLanguage';

const HowWeWork = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'How We Work',
      steps: [
        {
          title: 'Planning',
          description: 'Document verification process',
        },
        {
          title: 'Interview',
          description: 'Conducting interviews and explaining job descriptions based on experience',
        },
        {
          title: 'Deployment',
          description: 'Deploying the crew in accordance with the regulations',
        },
      ],
    },
    id: {
      title: 'Bagaimana Kami Bekerja',
      steps: [
        {
          title: 'Perencanaan',
          description: 'Melakukan pengecekan dokumen',
        },
        {
          title: 'Wawancara',
          description: 'Melakukan wawancara dan menjelaskan jobdesk sesuai dengan pengalaman',
        },
        {
          title: 'Pemberangkatan',
          description: 'Memberangkatkan kru yang sudah sesuai dengan ketentuan',
        },
      ],
    },
  };

  return (
    <section className="w-full py-16 px-4 md:px-8 bg-white">
      <div className="max-w-[80%] mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-800 mb-8">{content[language].title}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
          {content[language].steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              {index === 0 && <FaClipboardCheck className="text-6xl text-green-500 mb-2" />}
              {index === 1 && <FaUserCheck className="text-6xl text-yellow-500 mb-2" />}
              {index === 2 && <FaPlaneDeparture className="text-6xl text-blue-500 mb-2" />}
              <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
