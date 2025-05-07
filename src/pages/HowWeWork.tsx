import { FaClipboardCheck, FaUserCheck, FaPlaneDeparture, FaPlaneArrival } from 'react-icons/fa';
import { useLanguage } from '../hooks/UseLanguage';
import { motion } from 'framer-motion';

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
        {
          title: 'Homecoming',
          description: 'After the work contract is completed, we monitor the crew until they return to Indonesia.',
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
        {
          title: 'Kepulangan',
          description: 'Setelah selesai kontrak kerja, kami melakukan monitoring terhadap kru hingga mereka kembali ke Indonesia',
        },
      ],
    },
    zh: {
      title: '我们的工作流程',
      steps: [
        {
          title: '计划',
          description: '进行文件验证过程',
        },
        {
          title: '面试',
          description: '根据经验进行面试并解释工作职责',
        },
        {
          title: '出发',
          description: '按照规定安排船员出发',
        },
        {
          title: '归国',
          description: '工作合同完成后，我们会持续监控船员，直到他们返回印尼',
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: index * 0.2, duration: 0.5, ease: 'easeOut' }}
              key={index}
              className="flex flex-col items-center"
            >
              {index === 0 && <FaClipboardCheck className="text-6xl text-green-500 mb-2" />}
              {index === 1 && <FaUserCheck className="text-6xl text-yellow-500 mb-2" />}
              {index === 2 && <FaPlaneDeparture className="text-6xl text-blue-500 mb-2" />}
              {index === 3 && <FaPlaneArrival className="text-6xl text-red-500 mb-2" />}
              <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
