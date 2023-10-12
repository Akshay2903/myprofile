import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <About/>
      <Projects/>
      <Blog/>
      <Contact/>  
      <Footer />
      
    </>
  );
}

export default App;
