import Image from 'next/image';
import Link from 'next/link';

import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: '400'
});

export const AboutMe = () => {
  return (
    <main
      className="
      flex flex-wrap-reverse justify-center items-center gap-10 md:gap-32 py-8 text-lg text-center xl:text-left xl:flex-nowrap xl:justify-between

    "
    >
      <div className="text-white flex flex-col items-center xl:items-start gap-4 w-full xl:w-120">
        <h1 className="text-3xl sm:text-4xl xl:leading-[5rem]">
          Prazer, sou&nbsp;
          <span className="font-bold">Daniel</span>
        </h1>
        <div className="mb-12">
          <h2 className={`${roboto} mb-12`}>
            Estudo tecnologias front-end e estou em busca de me tornar um
            desenvolvedor web.
          </h2>
          <Link
            href={'./contatos'}
            className="p-3 bg-d-gray-500 w-fit text-xl rounded-lg transition-all hover:bg-opacity-80"
          >
            Converse comigo
          </Link>
        </div>
        <ul className="flex flex-wrap justify-center xl:grid xl:grid-cols-2 xl:w-fit gap-3 text-xl">
          <li className="bg-blue-500 w-fit p-2 rounded-md">TypeScript</li>
          <li className="bg-yellow-500 text-black w-fit p-2 rounded-md">
            JavaScript
          </li>
          <li className="bg-black text-white w-fit p-2 rounded-md">Next</li>
          <li className="bg-cyan-500 w-fit p-2 rounded-md">Tailwind</li>
        </ul>
      </div>
      <div>
        <Image
          src="https://avatars.githubusercontent.com/u/77151927?v=4"
          alt="Foto do perfil de Daniel"
          unoptimized
          width={300}
          height={300}
          className='rounded-full'
        />
        <p>
          <span>3+</span>
          <br />
          meses de experiencia
        </p>
      </div>
    </main>
  );
};
