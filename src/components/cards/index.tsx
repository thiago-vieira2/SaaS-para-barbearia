import './index.css'

export function Card () {
    return (
        <div className='w-75 h-40 rounded-xl bg-zinc-900 border border-zinc-800 transition-all transform hover:scale-105 duration-300 hover:shadow-[0_0_12px_4px_rgba(251,191,36,0.6)] '>
            <div className="w-75 h-40 flex gap-20  items-center ">


            <div className="flex flex-col gap-3">
                <p>RECEITA DE HOJE</p>
                <p>R$890,50</p>
                <p>+12% vs ontem</p>    
            </div>

            <div className='bg-amber-300 w-15 h-15 rounded-xl'></div>

            </div>
        </div>
    );
}