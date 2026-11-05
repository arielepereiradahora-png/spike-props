function ProdutoCard({ nome, preco, categoria, imagem }) {
  return (
    <div className="produto-card">
      <img
        src={imagem}
        alt={nome}
        className="produto-imagem"
      />

      <span className="categoria">{categoria}</span>

      <h2>{nome}</h2>

      <p className="preco">{preco}</p>
    </div>
  );
}

export default ProdutoCard;