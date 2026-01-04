import './index.css'
import Chart from 'chart.js/auto';
import {Bar,Line} from "react-chartjs-2"



export function Grafico () {
    return (
        <div className="">
            <div className=''>
                <p className=""></p>
                <p className=""></p>
            </div>

            <div className="">
                <Bar 
                    data={{
                        labels: ["A","B","C"], //Eixo X
                        datasets: [
                            {
                                label: "Revenue", 
                                data: [200,300,100] // Eixo Y
                            },
                        ],
                    }}
                />    
            </div>
        </div>
    );

}