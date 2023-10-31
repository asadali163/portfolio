import About from "./components/About";
import Contact from "./components/ContactUs/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "./components/General/Modal";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const App = () => {
  const { isOpen } = useSelector((state) => state.modal);

  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [isOpen]);

  return (
    <>
      <main>
        {isOpen && <Modal />}
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
      <ToastContainer position="top-center" autoClose={2000} />
    </>
  );
};
export default App;
