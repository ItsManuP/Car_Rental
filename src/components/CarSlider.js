import { veicoli } from '../components/CarDatas'



function CarSlider(){
    return (
      <div className="mr-4 ml-4">
        
        {Object.keys(veicoli).map((Nome, index) => (
        <div key={index} className="">
          {veicoli[Nome].map((veicolo, veicoloIndex) => (
            
            <div key={veicoloIndex} class="">
                <img src={veicolo.Img} width={350} height={250} alt={veicolo.id} />
  
               <div className='text-lg'>
                <div className="bg-gray-200 rounded-lg pl-2">
                <div>Modello: {veicolo.Nome}</div>
                <div>Prezzo: {veicolo.Prezzo}</div>
                <div>Porte: {veicolo.Porte}</div>
                <div>Produttore: {veicolo.Produttore}</div>
                <div>Trasmissione: {veicolo.Trasmissione}</div>
                <div>Affitto Giornaliero: {veicolo.AffittoGiornaliero}</div>
                </div>
                <br/>
               </div>
              
              
            </div>
          ))}
        </div>
      ))}
      </div>
    );}
  
  export default CarSlider;
  