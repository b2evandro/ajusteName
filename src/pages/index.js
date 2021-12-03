import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [texto, setTexto] = useState("");
  const [espaco, setEspaco] = useState(false);

  const inverteToogle = " ease-in-out bg-white";
  const handleTexto = (e) => {
    if (espaco) {
      setTexto(
        e.target.value
          .normalize("NFD")
          .replace(/[^a-zA-Zs1-9\s]/g, "")
          .toLowerCase()
      );
      return;
    }
    setTexto(
      e.target.value
        .normalize("NFD")
        .replace(/[^a-zA-Zs1-9]/g, "")
        .toLowerCase()
    );
  };
  const handleEspaco = () => {
    setEspaco(!espaco);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Latin</title>
        <link rel="icon" href="https://rafaell-lycan.com/assets/images/posts/comecando-com-es6.jpg" />
      </Head>
      <div className="w-full md:w-5/12 ml-auto mr-auto py-5 px-4">
        <div className="md:pr-12">
          <h3 className="text-3xl font-semibold">
            Remoção de caracters específicos
          </h3>
          <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
            A partir do JavaScript ES6 (2015), existe um recurso chamado
            &apos;Normalize&apos; que permite substituir acentos por caracteres sem
            acentuação. Para Latino-americanos essa funcionalidade é importante
            para não quebrar a aplicação com nomes de variaveis/funções em
            linguagem com caracteres não pertencentes a todos os idiomas. Nesse
            exemplo só deixei letras e número. Os espaços são retirados, mas é
            facil deixalos usando na regex de subtituição.
            Exemplo: São Paulo =&gt; saopaulo
          </p>
        </div>
      </div>
      <label
        htmlFor="espaco"
        className="mt-3 inline-flex items-center cursor-pointer"
      >
        <span className="relative">
          <span className="block w-10 h-6 bg-gray-400 rounded-full shadow-inner"></span>
          <span
            className={
              "absolute block w-4 h-4 mt-1 ml-1 rounded-full shadow inset-y-0 left-0 focus-within:shadow-outline transition-transform duration-300" +
              (espaco
                ? " ease-in-out bg-purple-600 transform translate-x-full"
                : inverteToogle)
            }
          >
            <input
              id="espaco"
              type="checkbox"
              className="absolute opacity-0 w-0 h-0"
              onChange={handleEspaco}
            />
          </span>
        </span>
        <span className="ml-3 text-sm">Usar espaços</span>
      </label>

      <div className="flex py-4">
        <span className="text-sm border border-2 rounded-l px-4 py-2 w-28 bg-gray-300 whitespace-no-wrap text-center">
          Texto
        </span>
        <input
          name="texto"
          className="border border-2 rounded-r px-4 py-2 w-full"
          type="text"
          placeholder="Insira o texto..."
          onChange={handleTexto}
        />
      </div>
      <div className="flex py-4">
        <span className="text-sm border border-2 rounded-l px-4 py-2 w-28 bg-gray-300 whitespace-no-wrap text-center">
          Output
        </span>
        <input
          name="texto"
          className="border border-2 rounded-r px-4 py-2 w-full"
          type="text"
          placeholder="Saida.."
          value={texto}
        />
      </div>
    </div>
  );
}
