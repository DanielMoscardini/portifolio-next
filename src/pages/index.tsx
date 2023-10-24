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
      <h1>Home</h1>
      <main>
        <AboutMe />
      </main>
    </>
  );
};

export default Home;
