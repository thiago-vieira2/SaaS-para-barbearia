import { Cards_Transacao } from '../UI/cards-transacoes';
import './index.css'

export function Transacoes() {
    return (
        <div className='flex gap-6 flex-col bg-linear-to-t from-zinc-900 to-zinc-800 transition-all transform  duration-300 hover:shadow-[0_0_12px_4px_rgba(251,191,36,0.6)] w-[66vw] h-[55vh] rounded-xl'>
            <div className='pl-10 pt-5'>
                <p className="font-bold">Transações Recentes</p>
                <p className="text-zinc-500">Serviços realizados hoje</p>
            </div>
            <div className='flex justify-center items-center'>

                <Cards_Transacao/>
            </div>

        </div>
    );

}