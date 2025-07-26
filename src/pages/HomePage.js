// src/pages/HomePage.js
import Hero from '../components/Hero';
import Services from '../components/Services';
import Project from '../components/Project';
import ClientLove from '../components/ClientLove';
import Logos from '../components/Logos';
import TalkToUs from '../components/TalkToUs';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Services />
      <Project />
      <ClientLove />
      <Logos />
      <TalkToUs />
    </>
  );
};

export default HomePage;