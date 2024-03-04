import Head from "next/head";
import Link from "next/link";

function Home() {
  return (
    <div>
      <Head>
        <title>Meu Site</title>
      </Head>

      <header>
        <nav>
          <ul>
            <li>
              <Link href="/">Página Inicial</Link>
            </li>
            <li>
              <Link href="/sobre">Sobre</Link>
            </li>
            {/* Adicione mais links para outras páginas, se necessário */}
          </ul>
        </nav>
      </header>

      <main>
        <h1>Bem-vindo ao Meu Site</h1>
        <img src="/leuso.jpg" alt="Imagem do Autor" />
        <p>Nome do autor</p>
        <p>Descrição do autor</p>
        <p>
          Este é um exemplo de uma página inicial simples criada com Next.js.
        </p>
      </main>
    </div>
  );
}
export default Home;
