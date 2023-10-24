import Image from 'next/image';
import Link from 'next/link';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: '500'
});

export const Header = () => {
  return (
    <header className={roboto.className}>
      <Link href={'./'}>
        <Image src="/favicon.png" alt="img" width={50} height={50} />
      </Link>
      <nav>
        <Link href={'./'}>Sobre mim</Link>
        {/* <Link href={'./'}>Portfólio</Link> */}
        <Link href={'./'}>Entre em contato</Link>
      </nav>
    </header>
  );
};
