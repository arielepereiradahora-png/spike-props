import ProdutoCard from "./ProdutoCard";
import "./App.css";

function App() {
  return (
    <main className="loja">
      <header className="cabecalho">
        <p className="subtitulo">PAPELARIA LITERÁRIA</p>
        <h1>Entre páginas e histórias</h1>
        <p>Uma coleção especial para quem ama ler.</p>
      </header>

      <section className="produtos">
        <ProdutoCard
          nome="Harry Potter e a Pedra Filosofal"
          preco="R$ 65,00"
          categoria="Literatura"
          imagem={`${import.meta.env.BASE_URL}imagens/livro harry potter.jpg`}
        />

        <ProdutoCard
          nome="Caneca Harry Potter"
          preco="R$ 35,00"
          categoria="Acessórios"
          imagem={`${import.meta.env.BASE_URL}imagens/caneca harry potter.webp`}
        />

        <ProdutoCard
          nome="Kit Marcador de Página Harry Potter"
          preco="R$ 15,00"
          categoria="Literatura"
          imagem={`${import.meta.env.BASE_URL}imagens/marca pagina magnetico.jpg`}
        />
      </section>

      <footer>
        Projeto desenvolvido para a atividade de Props.
      </footer>
    </main>
  );
}

export default App;