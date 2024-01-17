
function Contato() {
  return(
    <div id="contato">
        <h1 className="text-3xl text-center font-bold p-3">CONTATO</h1>
      <div className="flex items-start justify-between w-full h-full p-10 max-sm:flex-col">
        <div className="w-full text-center">
          <p className="text-2xl font-bold">Informações de contato:</p>
          <p className="text-xl">Telefone: (97) 99999-9999</p>
          <p className="text-xl">E-mail: leomoto@email.com</p>
        </div>
        <div className="w-1/2 max-sm:w-full flex items-center justify-center">
          <img src="/contato.svg" alt="Contato" />
        </div>
      </div>
      <div className="w-full h-5/6">
      <img className="w-full" src="/wave.svg" alt="Imagem de onda" />
      </div>
    </div>
  )
}

export default Contato