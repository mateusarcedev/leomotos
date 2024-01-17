
function Local() {
  return (
    <div>
        <h1 className="text-3xl text-center font-bold">LOCALIZAÇÃO</h1>
      <div className="flex items-start justify-between w-full h-full p-10 max-sm:flex-col">
        <div>
          <p className="text-2xl font-bold">Endereço:</p>
          <p className="text-xl">Rua Monteiro de Souza, 262, Centro, Tefé, Amazonas, Brasil</p>
          <p className="text-2xl font-bold">Horário de funcionamento:</p>
          <p className="text-xl">Todos os dias, das 08h às 18h</p>
        </div>
        <div className="w-1/2 max-sm:w-full">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.0144811056325!2d-64.71328642422189!3d-3.346569341350651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x921a1f7ed60210b1%3A0x34870c2e611a4144!2sR.%20Monteiro%20de%20Souza%2C%20262%20-%20Centro%2C%20Tef%C3%A9%20-%20AM%2C%2069550-097!5e0!3m2!1spt-BR!2sbr!4v1705507287011!5m2!1spt-BR!2sbr" width="100%" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <div className="w-full h-5/6">
      <img className="w-full" src="/wave.svg" alt="Imagem de onda" />
      </div>
    </div>
  )
}

export default Local