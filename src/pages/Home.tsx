import SEO from '../components/SEO/SEO';
import Hero from '../components/home/Hero';
import FeaturedMenu from '../components/home/FeaturedMenu';
import WhyUs from '../components/home/WhyUs';
import Gallery from '../components/home/Gallery';
import ContactTeaser from '../components/home/ContactTeaser';

const Home = () => {
  return (
    <>
      <SEO 
        title="Big Bite Concession - Festival Fair Food & Street Bites"
        description="Big Bite Concession offers delicious festival-style fair food and street bites for events, fairs, festivals, and private catering in Myrtle Beach. Book us for your next event!"
      />
      <Hero />
      <FeaturedMenu />
      <WhyUs />
      <Gallery />
      <ContactTeaser />
    </>
  );
};

export default Home;
