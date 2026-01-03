import './index.css'
import { MdNotifications } from "react-icons/md";
import { FaCalendarDay } from "react-icons/fa";
import { RiScissorsFill } from "react-icons/ri";

export function HeaderDashboard() {
    return (
        <header className="fixed top-0 left-0 w-full  px-6 py-4 z-50">
            <div className="flex items-center justify-around gap-100    ">


                <div className="flex gap-2">
                    <div className="bg-amber-300 w-15 h-15 rounded-xl flex justify-center items-center text-3xl text-zinc-800 transition-all duration-300 transform hover:scale-110     "><RiScissorsFill/></div>

                    <div className="flex flex-col">
                       <h1 className="font-bold text-white">
                            Barbearia <span className="text-amber-300 ">Genérica</span>
                       </h1>
                        <h3 className="text-sm text-zinc-400">
                            onde seu estilo vira luxo
                        </h3>

                    </div>


                </div>

                <div className="flex justify-end gap-5">
                    <div className="flex justify-center items-center bg-zinc-700 w-14 h-14 text-3xl rounded-xl text-zinc-500 transition-all duration-300 transform hover:scale-110 "><FaCalendarDay/></div>
                    <div className="flex justify-center items-center bg-zinc-700 w-14 h-14 text-3xl rounded-xl text-zinc-500 transition-all duration-300 transform hover:scale-110 "><MdNotifications/></div>
                    <div className="flex justify-center items-center bg-amber-300 w-14 h-14 text-[24px] font-bold rounded-full text-zinc-800 transition-all duration-300 transform hover:scale-110 hover:shadow-[0_0_12px_4px_rgba(251,191,36,0.6)]">TH</div>
                </div>

            </div>
        </header>
    );
}
