import { CardMain } from '../../components/UI/cards-main';
import './index.css'
import { FaShield } from "react-icons/fa6";
import { GoStarFill } from "react-icons/go";
import { FaClock } from "react-icons/fa";
import { RiScissorsFill } from "react-icons/ri";

const MainCards = [
    {texto: "Segurança", logo: <FaShield />},
    {texto: "Cortes Premium", logo: <RiScissorsFill />},
    {texto: "5 estrelas", logo: <GoStarFill />},
    {texto: "Horario flexivel", logo: <FaClock />}
]

export function MainSection() {
    return (
        <div className="w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                {/* HERO */}
                <section className="min-h-screen flex items-center">
                    <div>
                        <h1 className="text-6xl">
                            Barber <span className="text-amber-300">Shop</span>
                        </h1>
                        <h2 className="text-zinc-500">
                            Onde seu estilo vira luxo
                        </h2>

                        <section className="flex gap-2.5 py-6">
                            {MainCards.map((ativo, index) => (
                                <CardMain key={index} texto={ativo.texto} logo={ativo.logo} />
                            ))}
                       
                        </section>
                    </div>
                </section>

                {/* CONTEÚDO */}


            </div>
        </div>
    );
}
