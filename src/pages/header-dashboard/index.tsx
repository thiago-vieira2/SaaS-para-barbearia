import './index.css'
import { MdNotifications } from "react-icons/md";
import { FaCalendarDay } from "react-icons/fa";
import { RiScissorsFill } from "react-icons/ri";

export function HeaderDashboard() {
    return (
        <header className="w-full px-4 sm:px-6 py-3 ">
            <div className="max-w-7xl mx-auto flex items-center justify-between">

                {/* Logo / Brand */}
                <div className="flex items-center gap-3">
                    <div className="bg-amber-300 w-9 h-9 rounded-xl flex justify-center items-center text-2xl text-zinc-800 transition-transform hover:scale-110">
                        <RiScissorsFill />
                    </div>

                    <div className="leading-tight">
                        <h1 className="font-bold text-white text-sm sm:text-base">
                            Barbearia <span className="text-amber-300">Genérica</span>
                        </h1>
                        <h3 className="text-xs text-zinc-400 hidden sm:block">
                            onde seu estilo vira luxo
                        </h3>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 sm:gap-4">
                    <button className="flex justify-center items-center bg-zinc-700 w-9 h-9 text-xl rounded-xl text-zinc-400 hover:scale-110 transition">
                        <FaCalendarDay />
                    </button>

                    <button className="flex justify-center items-center bg-zinc-700 w-9 h-9 text-xl rounded-xl text-zinc-400 hover:scale-110 transition">
                        <MdNotifications />
                    </button>

                    <div className="flex justify-center items-center bg-amber-300 w-9 h-9 text-sm font-bold rounded-full text-zinc-800 hover:scale-110 hover:shadow-[0_0_12px_rgba(251,191,36,0.6)] transition">
                        TH
                    </div>
                </div>

            </div>
        </header>
    );
}
