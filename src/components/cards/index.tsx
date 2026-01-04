import './index.css'


interface CardProps {
    Titulo: string,
    Subtitulo: string,
    Descricao: string,
    img: string
}


export function Card ({Titulo, Subtitulo, Descricao, img} : CardProps) {
    return (
        <div className='pl-3.5 w-75 h-40 rounded-xl bg-linear-to-t from-zinc-900 to-zinc-800 border border-zinc-800 transition-all transform hover:scale-105 duration-300 hover:shadow-[0_0_12px_4px_rgba(251,191,36,0.6)] '>
            <div className="w-75 h-40 flex gap-20  items-center ">


            <div className="flex flex-col gap-3">
                <p className='text-[12px] text-zinc-500'>{Titulo}</p>
                <p className='text-2xl'>{Subtitulo}</p>
                <p className='text-green-700'>{Descricao}</p>    
            </div>

            <div className='bg-amber-300 w-15 h-15 rounded-xl transition-all transform hover:sclale-105 hover:shadow-[0_0_12px_4px_rgba(251,191,36,0.6)] duration-300'>{img}</div>

            </div>
        </div>
    );
}