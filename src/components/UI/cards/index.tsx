import './index.css'


interface CardProps {
    Titulo: string,
    Subtitulo: string,
    Descricao: string,
    img: string
}


export function Card({ Titulo, Subtitulo, Descricao, img }: CardProps) {
  return (
    <div
      className="
        w-73
        h-35
        rounded-xl
        bg-linear-to-t from-zinc-900 to-zinc-800
        border border-zinc-800
        p-4
        transition-all duration-300
        hover:shadow-[0_0_12px_4px_rgba(251,191,36,0.6)]
      "
    >
      <div className="flex items-center gap-4 justify-center h-25">
        
        {/* Conteúdo */}
        <div className="flex flex-1 flex-col gap-2">
          <p className="text-xs text-zinc-500">{Titulo}</p>
          <p className="text-xl font-semibold leading-tight">
            {Subtitulo}
          </p>
          <p className="text-sm text-green-700">
            {Descricao}
          </p>
        </div>

        {/* Ícone */}
        <div
          className="
            w-10 h-10
            rounded-xl
            bg-amber-300
            flex items-center justify-center
            shrink-0
            transition-all duration-300
            hover:scale-105
            hover:shadow-[0_0_12px_4px_rgba(251,191,36,0.6)]
          "
        >
          {img}
        </div>

      </div>
    </div>
  )
}
