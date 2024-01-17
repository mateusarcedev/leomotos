import Motoca from '/motoca.svg'

function Inicio() {
  return (
    <div id='home' className="w-full h-screen flex items-center justify-center bg-[#F30000]">
      <div className="bg-white w-2/3 h-3/4 flex items-center justify-center max-md:flex-wrap max-lg:flex-wrap rounded-md p-2">
          <div>
            <h1 className='text-4xl'>ALUGUEL DE MOTOS EM TEFÉ</h1>
            <p className='text-lg'>Seja bem-vindo à Leo Motos, sua locadora de confiança em Tefé.<br/> Oferecemos motos em perfeito estado para você curtir a cidade<br/> com liberdade e praticidade.</p>
          </div>
          <div className="flex items-center justify-center">
              <img src={Motoca} alt="Imagem de uma moto" />
          </div>
      </div>
    </div>
  )
}

export default Inicio