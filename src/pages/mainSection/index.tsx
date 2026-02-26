import { CardMain } from '../../components/UI/cards-main';
import './index.css'
import { FaShield } from "react-icons/fa6";
import { GoStarFill } from "react-icons/go";
import { FaClock } from "react-icons/fa";
import { RiScissorsFill } from "react-icons/ri";
import Login from '../../components/Login';

const MainCards = [
    { texto: "Segurança", logo: <FaShield /> },
    { texto: "Cortes Premium", logo: <RiScissorsFill /> },
    { texto: "5 estrelas", logo: <GoStarFill /> },
    { texto: "Horario flexivel", logo: <FaClock /> }
]

export function MainSection() {
    return (
        <div className="w-full min-h-screen flex items-center bg-zinc-950">
            <div className="max-w-7xl mx-auto px-6 w-full">

                <div className="flex items-center justify-between gap-16">

                    {/* Lado esquerdo - Hero */}
                    <div>
                        <h1 className="text-6xl">
                            Barber <span className="text-amber-300">Shop</span>
                        </h1>
                        <h2 className="text-zinc-500 text-2xl mt-3">
                            Onde seu estilo vira luxo
                        </h2>

                        <section className="flex gap-6 py-10">
                            {MainCards.map((ativo, index) => (
                                <CardMain key={index} texto={ativo.texto} logo={ativo.logo} />
                            ))}
                        </section>
                    </div>

                    {/* Lado direito - Login */}
                    <div className="min-w-95 max-w-105">
                        <Login />
                    </div>

                </div>

            </div>
        </div>
    );
}