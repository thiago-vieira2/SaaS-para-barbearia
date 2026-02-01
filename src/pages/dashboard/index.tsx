
import { Grafico } from "../../components/grafico";
import { TopServices } from "../../components/top-services";
import { Transacoes } from "../../components/Transacoes-recentes";
import { Card } from "../../components/UI/cards";
  import { HeaderDashboard } from '../header-dashboard/'
    
const Cards = [
    {Titulo: "RECEITA DE HOJE", Subtitulo: "RS890,00", Descricao:'+12% vs ontem', img: ''  },
    {Titulo: "CLIENTES DE HOJE", Subtitulo: "12", Descricao:'3 Agendados', img: ''  },
    {Titulo: "TICKET MEDIO", Subtitulo: "RS74,00", Descricao:'+5% este mês', img: ''  },
    {Titulo: "TEMPO MÉDIO", Subtitulo: "35 Min", Descricao:'Por atendimento', img: ''  }
]
export function DashBoard() {
    return (
        <main className="min-h-screen w-full px-4 sm:px-6 py-6">
            <HeaderDashboard/>
            

            <div className="max-w-7xl mx-auto space-y-6">

                {/* Cards */}
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {Cards.map((ativo, index) => (
                        <Card key={index} {...ativo} />
                    ))}
                </section>

                {/* Gráfico + Top Services */}
                <section className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    <div className="lg:col-span-2">
                        <Grafico />
                    </div>
                    <TopServices />
                </section>

                {/* Transações */}
                <section>
                    <Transacoes />
                </section>

            </div>
        </main>
    );
}
