import { AboutMe } from '@/components/home/AboutMe';
import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>Sobre mim | Daniel</title>
        <meta
          name="description"
          content="Estudo tecnologias front-end e estou em busca do meu primeiro emprego como desenvolvedor"
        />
      </Head>
      <main
        className="px-6
         md:px-16 md:space-y-28" 
      >
        <AboutMe />
      </main>
    </>
  );
};

export default Home;
