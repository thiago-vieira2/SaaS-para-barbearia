
import { Grafico } from "../../components/grafico";
import { TopServices } from "../../components/top-services";
import { Card } from "../../components/UI/cards";


const Cards = [
    {Titulo: "RECEITA DE HOJE", Subtitulo: "RS890,00", Descricao:'+12% vs ontem', img: ''  },
    {Titulo: "CLIENTES DE HOJE", Subtitulo: "12", Descricao:'3 Agendados', img: ''  },
    {Titulo: "TICKET MEDIO", Subtitulo: "RS74,00", Descricao:'+5% este mês', img: ''  },
    {Titulo: "TEMPO MÉDIO", Subtitulo: "35 Min", Descricao:'Por atendimento', img: ''  }
]

export function DashBoard() { 

    

    return (
        <div className="pt-50 w-screen h-screen flex flex-col items-center justify-center gap-10">
                <div className="flex gap-10">
                    {Cards.map((Ativo, index ) =>(
                        <Card key={index} {...Ativo}/>
                    ))}    
                </div>

                <div className="flex gap-20 " >
                    <Grafico/>
                    <TopServices/>
                </div>

                <div className="">
                    
                </div>

                

            
        </div>
    );
}