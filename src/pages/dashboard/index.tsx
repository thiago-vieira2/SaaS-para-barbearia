import { Card } from "../../components/cards";
import { Grafico } from "../../components/grafico";


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

                <div className="flex">
                    <Grafico/>
                </div>

                

            
        </div>
    );
}