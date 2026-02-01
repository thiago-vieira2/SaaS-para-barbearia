import './index.css'
import type { ReactNode } from "react";
interface CardMainProps {
    texto: String,
    logo: ReactNode

}

export function CardMain({ texto, logo }: CardMainProps) {
    return (
        <div className="flex justify-center items-center bg-[#16191E] border border-zinc-800 w-40 h-24 rounded-xl">
            <div className="flex flex-col items-center gap-2">
                <div className="bg-[#35332B] w-8 h-8 rounded-xl flex items-center justify-center text-amber-300 [&_svg]:w-4 [&_svg]:h-4 [&_svg]:block">
                    {logo}
                </div>
                <p className="text-sm text-center">{texto}</p>
            </div>
        </div>
    );
}
