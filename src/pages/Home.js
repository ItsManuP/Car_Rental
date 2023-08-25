import Image from '../img/back_amg.jpg'
import car_logo_due from '../img/car_logo_due.svg'
import car_logo_tre from '../img/car_logo_tre.svg'
import car_logo_uno from '../img/car_logo_uno.svg'
import { veicoli } from '../components/CarDatas'
import  Carslider  from '../components/CarSlider'
import '../App.css'



function Home(){

    
    return(
       
        <div>


        <div class="flex relative">
        <img src={Image} className='opacity-30' alt="Logo"/>
            
        <h3 className="absolute ml-10 md:text-2l md:text-4xl lg:right-60 md:mt-80 font-serif rounded border-b border-spacing-4  border-red-500 border-spacing-x-80">Hai bisogno di una auto in affitto?<br/>
        Sei nel posto giusto
        <br/>Dai un'occhiata ai nostri modelli!
        <br/>
        <div className='flex flex-row p-3 space-x-8'>
        <span className='text-xs sm:text-xl'><img src={car_logo_due} alt="logodue" width={50} height={50} />50 modelli  </span>
        <span className='text-xs sm:text-xl'><img src={car_logo_uno} alt="logouno"width={50} height={50} /> 20 sedi </span>
        <span className='text-xs sm:text-xl'><img src={car_logo_tre} alt="logotre" width={50} height={50} /> 150 officine convenzionate</span>
        </div>
        </h3>
        </div>

        
        

        <div className='sm:ml-20'>
        <Carslider/>
        </div>
        
        
        
        
        </div>


    
       
    )
          
}



export default Home