import './index.css'

export function Cards_Transacao () {
    return (
        <div className='bg-zinc-800 w-[62vw] h-[8vh] rounded-xl flex items-center justify-between '>
            <div className='flex items-center h-[8vh] pl-5.5 gap-3.5'>
                <div className='bg-[#35332B] w-8 h-8 rounded-xl'>
                    
                </div>

                <div>
                    <p className="font-bold">Carlos Silva</p>
                    <p className="text-zinc-500">Corte + barba</p>
                </div>
            </div>

            <div className='pr-5.5'>
                <p className="font-bold">R$75.00</p>
                <p className="text-zinc-500">14:30</p>
            </div>
        </div>
    );
}