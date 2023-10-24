import Head from 'next/head';

const Contatos = () => {
  return (
    <>
      <Head>
        <title>Contatos | Daniel</title>
      </Head>
      <div>
        <h1>Contatos</h1>
        <ul>
          <li>
            <span>Email</span>
            <div>
              <a href="mailto:moscardinibdaniel@gmail.com">
                moscardinibdaniel@gmail.com
              </a>
            </div>
          </li>
          <li>
            <span>LinkedIn</span>
            <div>
              <a href="https://www.linkedin.com/in/daniel-moscardini/">
                https://www.linkedin.com/in/daniel-moscardini/
              </a>
            </div>
          </li>
          <li>
            <span>GitHub</span>
            <div>
              <a href="https://github.com/DanielMoscardini">
                https://github.com/DanielMoscardini
              </a>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Contatos;
