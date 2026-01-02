
export function HeaderDashboard() {
    return (
        <header className="fixed top-0 left-0 w-full bg-zinc-900 px-6 py-4 z-50">
            <div className="flex items-center justify-around gap-4">


                <div className="text-left flex ">
                    <div className="bg-amber-300 w-15 h-15 rounded-xl flex justify-center items-center"></div>

                    <div className="flex flex-col">
                        <h1 className="text-xl font-bold text-white">
                            Barbearia <span className="text-amber-300">Genérica</span>
                        </h1>
                        <h3 className="text-sm text-zinc-400">
                            onde seu estilo vira luxo
                        </h3>

                    </div>


                </div>

                <div className="flex justify-end gap-5">
                    <div className="bg-zinc-700 w-14 h-14 rounded-xl text-center">oi</div>
                    <div className="bg-zinc-700 w-14 h-14 rounded-xl text-center">oi</div>
                    <div className="bg-amber-300 w-14 h-14 rounded-full text-center">oi</div>
                </div>

            </div>
        </header>
    );
}
