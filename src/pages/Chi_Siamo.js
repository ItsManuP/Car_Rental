
import background from '../img/dealership_due.jpg' 
import Pippo from '../img/Pippo.webp'
import Paolo from '../img/Paolo.jpg'
import Rino from '../img/Rino.jpg'
import {Link } from 'react-router-dom'
import morty from '../img/morty.jpg'
import peter from '../img/peter.jpg'
import berlusconi from '../img/berlusconi.webp'


function Chi_Siamo(){
    const team = [
        {img: Pippo, nome:"Pippo franco", ruolo:"CEO"},
        {img: Paolo, nome:"Rino Gaetano", ruolo:"Manager"},
        {img: Rino, nome:"Paolo Rossi  ", ruolo:"FullStack Dev"},
    
]


    return(
        <div>
        <div className='bg-gradient-to-br from-indigo-300 to-pink-300 dark:from-indigo-900 dark:to-pink-900 '>
            <div className='flex flex-col md:flex-row items-center border-b border-red-500'>
            <img src={background} width={800} height={650} className='rounded opacity-100'/>
            
            <div className='flex-1 pl-4 pl-4 pt-15'>
            <div className="text-lg font-serif ">
                Siamo la Pincopallino srl, azienda nata in Italia per la vendita e affitto a breve/lungo termine di autovetture
                sul territorio italiano. Ad oggi ci troviamo su tutto il territorio italiano, con un fatturato annuo di €3.4mln ci posizioniamo come Leader nel settore.
            </div>
            </div>
        </div>


    <div className="text-center pt-4 border-b border-red-500">
        <span className='text-3xl font-serif pt-2'>Staff</span>
            <div className="flex flex-col items-center pt-8 mr-20 ml-24 lg:mr-10 lg:ml-10">
            <div className="flex flex-wrap">
                {team.map((member, index) => (
                <div key={index} className="pl-4 pr-4 p-10 bg-gray-200  m-4 rounded-lg shadow-lg border-b border-red-500 transition ease-in-out delay-50  hover:-translate-y-1 border-red-500">
                <img src={member.img} alt={member.nome}  className="mx-auto mb-4 mx-auto rounded-full h-20 w-20"/>
                <div className="text-2xl font-medium">{member.nome}</div>
                <div className="text-xl text-center md:text-left font-ligth">{member.ruolo}</div>
                </div>
                ))}
            </div>
        </div>
    </div>


        
        <div class="flex flex-wrap mt-2" >
            <div class="w-full md:w-1/3 px-4 mb-8 ">
            <div class="border border-black rounded-lg p-4 hover:bg-gray-300">
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
            <div class="border border-black rounded-lg p-4 hover:bg-gray-300">
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
            <div class="border border-black rounded-lg p-4 hover:bg-gray-300">
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
        <Link to='/Contattaci'> <button type="button" class="text-white hover:text-white border border-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">Aggiungi una recensione!</button></Link>
        </div>


     </div> 
     </div>  
    );
}


export default Chi_Siamo