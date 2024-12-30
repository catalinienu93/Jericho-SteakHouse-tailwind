import {
  Hero,
  Footer,
  SignatureDishes,
  About,
  Experience,
  Review,
  Reservation,
} from './sections';
import { Nav } from './components/Nav';

const App = () => {
  return (
    <main className='max-w-[1920px] bg-white overflow-hidden relative'>
      <Nav />
      <div className='xl:bg-grid xl:bg-repeat-y fixed top-0 bottom-0 left-0 right-0 z-10'></div>
      <section className='hero h-[640px] xl:h-[840px] bg-hero bg-center lg:bg-cover bg-no-repeat bg-fixed xl:rounded-bl-[290px] relative z-20'>
        <Hero />
      </section>

      <section className='about mt-[80px] xl:mt-[200px] relative z-20'>
        <About />
      </section>
      <section className='signature-dishes-section mt-[80px] xl:mt-[200px] relative z-20'>
        <SignatureDishes />
      </section>
      <section className='experience mt-[80px] xl:mt-[200px] relative z-20'>
        <Experience />
      </section>
      <section>
        <Reservation />
      </section>
      <section className='review'>
        <Review />
      </section>
      <section className='bg-primary py-12'>
        <Footer />
      </section>
    </main>
  );
};

export default App;
