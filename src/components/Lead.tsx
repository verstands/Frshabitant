
import { Link } from 'react-router-dom'

const Lead = () => {
    return (
        <>
            <div className='flex items-center justify-between p-5'>
                <h2 className='text-[25px] font-bold'>Leads</h2>
                <div className='flex items-center'>
                    <div>
                        <Link to="/" className='bg-[#293654] text-white text-[12px] mr-1 font-bold px-4 py-3 rounded-[10px] shadow'>Annuler</Link>
                    </div>
                    <div>
                        <Link to="/" className='bg-[#ff754c] text-white text-[12px] mr-1 font-bold px-4 py-3 rounded-[10px] shadow'>Valider</Link>
                    </div>
                </div>
            </div>
            <h2 className='text-[25px] p-6'>Lead insérés</h2>
            <div className='p-6'>
                <div className='gap-3 flex'>
                    <input type="radio" />Nouveau
                    <input type="radio" />Data
                </div>
                <h2 className='text-[20px] mt-4'>Sourceur</h2>
                <select name="" className='border border-[#e6e8f0] rounded-md px-60 py-3 ml-6 mt-4' id="">
                    <option value="">David MARTIN</option>
                </select>
                <h2 className='text-[20px] mt-4'>Colonne de la région (Garde que les deux dernier chiffres)</h2>
                <select name="" className='border border-[#e6e8f0] rounded-md px-60 py-3 ml-6 mt-4' id="">
                    <option value="">(Colonne C)9345</option>
                </select>
                <div className='mt-4 flex items-center'>
                    <h2>Resultats </h2>
                    <div className='border bg-[#f6f6fb] gap-10 border-[#f6f6fb] flex items-center justify-between rounded-md px-60 py-3 ml-6 mt-4' id="">
                        <p>69, 68, 72</p>
                        <button className=' bg-gray-500  border-gray-500 p-2 rounded text-white font-bold'>Modifier</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Lead