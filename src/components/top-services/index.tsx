import ProgressBar from '../UI/progressBar';
import './index.css'
import React, { useState, useEffect } from 'react';

interface Service {
    id: number;
    name: string;
    targetProgress: number;
    speed?: number;
    valor?: number
}

interface TopServicesProps {
    services?: Service[];
}

export function TopServices ({ services }: TopServicesProps) {
    // Dados padrão se não for passado nada
    const defaultServices: Service[] = [
        { id: 1, name: 'Corte + Barba', targetProgress: 30, speed: 50, valor: 3.714 },
        { id: 2, name: 'Corte Degradê', targetProgress: 65, speed: 50, valor: 3.714  },
        { id: 3, name: 'Barba Completa', targetProgress: 45, speed: 50, valor: 3.714  },
        { id: 4, name: 'Hidratação', targetProgress: 80, speed: 50, valor: 3.714  },
    ];

    const servicesToUse = services || defaultServices;

    const [progressValues, setProgressValues] = useState<Record<number, number>>(
        Object.fromEntries(servicesToUse.map(service => [service.id, 0]))
    );

    useEffect(() => {
        const intervals: ReturnType<typeof setInterval>[] = [];

        servicesToUse.forEach(service => {
            const interval = setInterval(() => {
                setProgressValues(prev => {
                    const current = prev[service.id] || 0;
                    if (current >= service.targetProgress) {
                        clearInterval(interval);
                        return prev;
                    }
                    return {
                        ...prev,
                        [service.id]: current + 1
                    };
                });
            }, service.speed || 40);

            intervals.push(interval);
        });

        return () => {
            intervals.forEach(interval => clearInterval(interval));
        };
    }, [servicesToUse]);

    return (
        <div className=' w-[20vw] h-[50vh] rounded-xl bg-gradient-to-t from-zinc-900 to-zinc-800 border border-zinc-800 transition-all transform duration-300 hover:shadow-[0_0_12px_4px_rgba(251,191,36,0.6)]'>  
        
            <div className='flex flex-col pl-10 pt-5'>
                <p className="font-bold text-white">Top Serviços</p>
                <p className="text-xs text-zinc-500">Mais vendidos este mês</p>
            </div>

            <div className='pl-10 pt-6 space-y-6 pr-6 max-h-[calc(70vh-100px)] overflow-y-auto'>
                {servicesToUse.map(service => (
                    <div key={service.id}>
                        <div className="flex justify-between mb-1 text-sm font-medium text-white">
                            <span>{service.name}</span>
                            <span>{Math.round(progressValues[service.id] || 0)}%</span>
                            
                        </div>
                        <ProgressBar progress={progressValues[service.id] || 0} />

                        <span className='text-zinc-500'>R${service.valor}</span>

                    </div>
                ))}
            </div>
        </div>
    );
}