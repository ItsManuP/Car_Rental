
import background from '../img/dealership_due.jpg' 
import Pippo from '../img/Pippo.webp'
import Paolo from '../img/Paolo.jpg'
import Rino from '../img/Rino.jpg'

function Chi_Siamo(){
    const team = [
        {img: Pippo, nome:"Pippo franco", ruolo:"CEO"},
        {img: Paolo, nome:"Rino Gaetano", ruolo:"Manager"},
        {img: Rino, nome:"Paolo Rossi  ", ruolo:"FullStack Dev"},
    
]


    return(
        <div className='bg-gradient-to-br from-indigo-300 to-pink-300 dark:from-indigo-900 dark:to-pink-900 '>
            <div className='flex flex-col md:flex-row items-center border-b border-red-500'>
            <img src={background} width={800} height={650} className=' opacity-100'/>
            
            <div className='flex-1 pl-4 pl-4 pt-15'>
            <div className="text-lg font-serif border-b border-black">
                Siamo la Pincopallino srl, azienda nata in Italia per la vendita e affitto a breve/lungo termine di autovetture
                sul territorio italiano. Ad oggi ci troviamo su tutto il territorio italiano, con un fatturato annuo di €3.4mln ci posizioniamo come Leader nel settore.
            </div>
            </div>
        </div>


    <div className=' text-center pt-4 border-b border-red '>
        <span className='text-3xl font-serif pt-2'>Staff</span>
            <div className="flex flex-col items-center pt-8 mr-20 ml-24 lg:mr-10 lg:ml-10">
            <div className="flex flex-wrap">
                {team.map((member, index) => (
                <div key={index} className="pl-4 pr-4 p-10 bg-white  m-4 rounded-lg shadow-lg border-b border-r transition ease-in-out delay-50  hover:-translate-y-1 border-red-500">
                <img src={member.img} alt={member.nome}  className="mx-auto mb-4 mx-auto rounded-full h-20 w-20"/>
                <div className="text-2xl font-medium">{member.nome}</div>
                <div className="text-xl text-left font-ligth">{member.ruolo}</div>
                </div>
                ))}
            </div>
        </div>
    </div>



        </div>
    )
}

export default Chi_Siamo