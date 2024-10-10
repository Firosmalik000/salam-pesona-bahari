import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { About, Contact, Hero, Mision, Service, Vision } from './pages';
import { FaWhatsapp } from 'react-icons/fa';
import WhyUs from './pages/WhyUs';
import HowWeWork from './pages/HowWeWork';

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
      <Contact />
      <Footer />
      <a href="https://wa.me/+6281293598873" className="fixed bottom-5 w-[50px] h-[50px]  right-5 rounded-full bg-green-500 flex items-center justify-center z-[500]">
        <FaWhatsapp className="w-10 h-10 text-white" />
      </a>
    </div>
  );
}

export default App;
