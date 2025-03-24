import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { About, Contact, Hero, Mision, Service, Vision } from './pages';
import { FaWhatsapp } from 'react-icons/fa';
import WhyUs from './pages/WhyUs';
import HowWeWork from './pages/HowWeWork';
import Devisi from './pages/Devisi';
import { motion } from 'framer-motion';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Vision />
      <Mision />
      <Service />
      <WhyUs />
      <HowWeWork />
      <Devisi />
      <Contact />
      <Footer />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.5, ease: 'easeInOut' } }}>
        <a
          href="https://wa.me/+6281292614791"
          className="fixed bottom-5 right-5 w-[50px] h-[50px] rounded-full bg-green-500 flex items-center justify-center z-[500] hover:scale-110 transition-transform duration-300"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp className="w-8 h-8 text-white" />
        </a>
      </motion.div>
    </div>
  );
}

export default App;
