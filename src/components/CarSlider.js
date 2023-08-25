import { veicoli } from '../components/CarDatas'



function CarSlider(){
    return (
      <div className=''>
        
        {Object.keys(veicoli).map((Nome, index) => (
        <div key={index} className='mr-3 ml-3 mt-4 mb-2 sm:grid sm:grid-cols-3 ' >
          {veicoli[Nome].map((veicolo, veicoloIndex) => (
                <div key={veicoloIndex} className='self-end'>
                <img src={veicolo.Img} width={350} height={250} alt={veicolo.id} />
                <div className="bg-gray-100 mr-4 font-serif pl-2 pt-2 rounded-2xl">
                <div>Modello: {veicolo.Nome}</div>
                <div>Prezzo: {veicolo.Prezzo}</div>
                <div>Porte: {veicolo.Porte}</div>
                <div>Produttore: {veicolo.Produttore}</div>
                <div>Trasmissione: {veicolo.Trasmissione}</div>
                <div>Affitto Giornaliero: {veicolo.AffittoGiornaliero}</div>
                
                
                <div  className="pt-2 pb-2 pl-1" >
        <div class="relative w-12 h-12  ">
        <div class="absolute inset-0 w-full h-full bg-gradient-to-br from-indigo-300 to-pink-300 dark:from-indigo-900 dark:to-pink-900 transform origin-top-left -rotate-12 rounded-md"></div>
        <div class="absolute inset-0 w-full h-full bg-gradient-to-br from-indigo-400 to-pink-400 dark:from-indigo-900 dark:to-pink-900 transform origin-top-right rotate-6 rounded-md"></div>
    
        </div>
        </div>


                </div>
              
              
            </div>
          ))}
        </div>
      ))}
      </div>
    );}
  
  export default CarSlider;
  