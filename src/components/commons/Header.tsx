import Image from 'next/image';
import Link from 'next/link';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: '500'
});

export const Header = () => {
  return (
    <header
      className={`
    ${roboto.className}
    flex justify-between 
    bg-d-blue-900 text-sm py-3 px-5
    sticky top-0 z-20
    `}
    >
      <Link href={'./'}>
        <Image src="/favicon.png" alt="img" width={50} height={50} />
      </Link>
      <nav className='hidden md:flex items-center gap-10 text-md'>
        <Link href={'./'}>Sobre mim</Link>
        {/* <Link href={'./'}>Portfólio</Link> */}
        <Link href={'./'}>Entre em contato</Link>
      </nav>
    </header>
  );
};
