import './index.css'
import Chart from 'chart.js/auto';
import {Bar,Line} from "react-chartjs-2"



export function Grafico () {
    return (
        <div className=" flex gap-6 flex-col bg-linear-to-t from-zinc-900 to-zinc-800 transition-all transform  duration-300 hover:shadow-[0_0_12px_4px_rgba(251,191,36,0.6)] w-[50vw] h-[55vh] rounded-xl" >
            <div className='pl-10 pt-5'>
                <p className="font-bold">Receita Semanal</p>
                <p className="text-xs text-zinc-500">Visão geral dos últimos 7 dias</p>
            </div>

            <div className="w-[50vw] h-[45vh]">
                <Line 
                    data={{
                        labels: ["Seg","Ter","Qua", "Qui", "Sex", "Sáb", "Dom"], //Eixo X
                        datasets: [
                            {
                                label: "Revenue", 
                                data: [450,620,380, 750, 890, 1200, 0], // Eixo Y
                                borderColor: '#DFA621',
                                tension: 0.3
                                
                            },
                        ],
                      

                        
                    }}
                    options={{
                        responsive: true,
                        maintainAspectRatio: false,
                    }}

                />    
            </div>
        </div>
    );

}