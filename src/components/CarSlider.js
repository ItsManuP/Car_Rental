import { veicoli } from '../components/CarDatas'



function CarSlider(){
    return (
      <div className="car-slider-container mr-4 ">
        
        {Object.keys(veicoli).map((Nome, index) => (
        <div key={index} className="">
          {veicoli[Nome].map((veicolo, veicoloIndex) => (
            
            <div key={veicoloIndex} class="flex-container flex-row">
                <div className="">
                <img src={veicolo.Img} width={350} height={250} alt={veicolo.id} /> </div>
               <div className="flex"> 
               <div className='text-lg'>
                <div>Modello: {veicolo.Nome}</div>
                <div>Prezzo: {veicolo.Prezzo}</div>
                <div>Porte: {veicolo.Porte}</div>
                <div>Produttore: {veicolo.Produttore}</div>
                <div>Trasmissione: {veicolo.Trasmissione}</div>
                <div>Affitto Giornaliero: {veicolo.AffittoGiornaliero}</div>
                <br/>
               </div>
              
              </div>
            </div>
          ))}
        </div>
      ))}
      </div>
    );}
  
  export default CarSlider;
  