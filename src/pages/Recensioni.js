import morty from '../img/morty.jpg'
import peter from '../img/peter.jpg'
import berlusconi from '../img/berlusconi.webp'
import { Link } from "react-router-dom";


function Recensioni(){
    return(
        <div>

           
               
            <div class="flex flex-wrap mt-2">
        

            <div class="w-full md:w-1/3 px-4 mb-8">
            <div class="border rounded-lg p-4">
            <p class="text-gray-800">
            Ottimo prodotto, molto soddisfatto dell'acquisto!<br/>
            Vorrei far notare la serietà nel consigliarmi un modello adatto alle mie esigenze<br/>
            </p>
            <div class="mt-4 flex items-center">
            <div class="flex-shrink-0 mr-2">
            <img class="h-8 w-8 rounded-full" src={morty} alt="Morty Smith"/>
            </div>
            <div>
            <p class="text-sm font-medium text-gray-600">Ricky Smith</p>
            <p class="text-xs text-gray-500">2 ore fa</p>
            </div>
            </div>
            </div>
            </div>


            
            <div class="w-full md:w-1/3 px-4 mb-8">
            <div class="border rounded-lg p-4">
            <p class="text-gray-800">
            Azienda fantastica, tempistiche brevi.<br/>
            Consiglio!<br/>
            <br/>
            </p>
            <div class="mt-4 flex items-center">
            <div class="flex-shrink-0 mr-2">
            <img class="h-8 w-8 rounded-full" src={peter} alt="Morty Smith"/>
            </div>
            <div>
            <p class="text-sm font-medium text-gray-600">Peter Parker</p>
            <p class="text-xs text-gray-500">3 giorni fa</p>
            </div>
            </div>
            </div>
            </div>


            <div class="w-full md:w-1/3 px-4 mb-8">
            <div class="border rounded-lg p-4">
            <p class="text-gray-800">
            Vasta scelta per qualsiasi occasione<br/>
            Sia per feste private sia per andare a fare la spesa.<br/>
            <br/>
            </p>
            <div class="mt-4 flex items-center">
            <div class="flex-shrink-0 mr-2">
            <img class="h-8 w-8 rounded-full" src={berlusconi} alt="Morty Smith"/>
            </div>
            <div>
            <p class="text-sm font-medium text-gray-600">Berlusconi</p>
            <p class="text-xs text-gray-500">45 giorni fa</p>
            </div>
            </div>
            </div>
            </div>
   
  </div>
        <div className='flex justify-center' >
        <Link to='/Contattaci'> <button type="button" class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">Aggiungi una recensione!</button></Link>
        </div>
</div>



    )
}

export default Recensioni