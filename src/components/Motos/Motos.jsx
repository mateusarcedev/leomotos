// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

function Motos() {
  return (
    <div id='motos' >
      <h1 className='text-3xl text-center p-4 font-bold'>NOSSAS MOTOS</h1>
      <div className="flex items-center max-sm:flex-wrap max-md:flex-wrap max-md:flex-col max-sm:flex-col w-full h-screen">
      <div className='w-1/2 flex items-start justify-center text-justify'>
        <p className='text-2xl p-3 max-sm:text-lg'>
          A LEO MOTO OFERECE OS SERVIÇOS DE 
          <br/>
          ALUGUEL DE MOTOS POR DIA, SEMANA OU  MÊS. 
        </p>
      </div>
      <div className='w-1/2 flex items-center justify-center'>
        <div className="bg-[#B00000] py-3 px-14 w-2/3 h-5/6 flex items-center justify-center rounded-md max-sm:w-96 max-sm:h-96">
          <Swiper
            modules={[Navigation, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide>
              <img src="/BrosBranca.svg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/TitanPreta.svg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/BizVermelha.svg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/BizPreta.svg" alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Motos