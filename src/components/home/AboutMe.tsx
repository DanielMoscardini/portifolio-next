import Image from 'next/image';
import Link from 'next/link';

export const AboutMe = () => {
  return (
    <main>
      <div>
        <h1>Prazer, sou &nbsp;</h1>
        <span>Daniel</span>
        <div>
          <h2>
            Estudo tecnologias front-end e estou em busca de me tornar um
            desenvolvedor web.
          </h2>
          <Link href={'./contatos'}>Converse comigo</Link>
        </div>
        <ul>
          <li className="bg-blue-500">TypeScript</li>
          <li className="bg-yellow-500 text-black">JavaScript</li>
          <li className="bg-black-500 text-white">Next</li>
          <li className="bg-cyan-500">Tailwind</li>
        </ul>
        <div>
          <Image
            src="https://avatars.githubusercontent.com/u/77151927?v=4"
            alt="Foto do perfil de Daniel"
            unoptimized
            width={500}
            height={500}
          />
        </div>
        <p>
          <span>3+</span>
          <br />
          anos de experiencia
        </p>
      </div>
    </main>
  );
};
