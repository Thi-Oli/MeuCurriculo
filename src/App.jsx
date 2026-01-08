import "./index.css";
import React from "react";
import Foto from "./assets/minha-foto.png";
import Spotify from "./assets/spotify-logo.svg";
import Devops from "./assets/devops-logo.png";
import MySQL from "./assets/mysql.png";
import Python from "./assets/python.png";
import site from "./assets/react.png";

function App() {
  return (
    <main>
      <div>
        <header className="container-header">
          <a href="#sobremim" className="navegador">
            Sobre Mim
          </a>
          <a href="#linguagens" className="navegador">
            Linguagens
          </a>
          <a href="#projetos" className="navegador">
            Projetos
          </a>
        </header>
      </div>

      <div className="container-sobremim">
        <div className="container-sobremim--titulo">
          <h1>Olá, eu sou o Thiago!</h1>
          <div className="container-sobremim--informacoes">
            <p>X anos</p>
            <p>Ciências da Computação - 6º semestre</p>
            <p>geovanithiago08@gmail.com</p>
            <p>(11)96342-8287 - Whatsapp</p>
          </div>
        </div>
        <img src={Foto} alt="Imagem do Thiago." className="img--Thiago" />
      </div>

      <h2 id="sobremim">Sobremim</h2>
      <div className="texto-sobremim">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          magnam eos adipisci nesciunt, voluptatum dolor non molestiae fugiat
          cupiditate nihil excepturi fuga? Debitis rem, officia consectetur
          voluptates harum culpa minus?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          facilis porro, molestiae totam adipisci qui, officiis quisquam nemo
          non sit in, harum optio quaerat ex? Blanditiis obcaecati nesciunt
          natus itaque.
        </p>
      </div>

      <h2 id="projetos">Projetos</h2>
      <div className="painel_tecnologias">
        <a href="https://front-end-spotify-lemon.vercel.app/">
          <img src={Spotify} alt="Projeto Spotify" />
        </a>
        <a href="https://github.com/Thi-Oli/Api_Docker">
          <img src={Devops} alt="Projeto Devops" />
        </a>
      </div>

      <h2 id="linguagens">Linguagens</h2>
      <div className="container-linguagens">
        <img src={site} alt="" />
        <img src={Python} alt="" />
        <img src={MySQL} alt="" />
      </div>
    </main>
  );
}

export default App;
