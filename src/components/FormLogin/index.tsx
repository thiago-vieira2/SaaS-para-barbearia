import './index.css'

export default function FormLogin() {
    return (
        <div className='min-h-max flex items-center justify-center p-4 flex-col'>
            <form action="" className='flex-col'>
                <div className="space-y-2">
                    <label className="block text-zinc-500 text-sm ">
                        Email
                    </label>
                    <input
                        type="email"
                        placeholder="Digite seu email"
                        className="w-100 px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500"
                    />
                </div>
                <div className="space-y-2">
                    <label className='block text-zinc-500 text-sm' >
                        Senha:
                    </label>
                    <input
                        type="text"
                        placeholder='Digite sua Senha'
                        className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500"
                    />
                </div>

                <button className='h-10 w-30 bg-amber-400 font-bold rounded-xl '>entrar</button>
            </form>

        </div>

    );
}