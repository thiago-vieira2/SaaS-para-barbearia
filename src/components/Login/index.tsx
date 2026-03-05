import { useState } from 'react';
import './index.css'
import { RiScissorsFill } from "react-icons/ri";
import FormLogin from '../FormLogin';
import FormCadastro from '../FormCadastrp';

type Modo = "login" | "cadastro"

export default function Login() {

    const [modo, setModo] = useState<Modo>('login')

    return (
        <div className='w-120 h-160 bg-[#16191E] border border-zinc-800  rounded-xl'>
            <div className='flex items-center pt-8 flex-col '>
                <div className="bg-amber-300 w-14 h-14 rounded-xl flex justify-center items-center text-2xl text-zinc-800 transition-transform hover:scale-110">
                    <RiScissorsFill />
                </div>

                <h1 className='text-xl'>Bem-vindo ao <span className='text-amber-300'>BarberPro</span></h1>
                <p className=' text-sm text-zinc-500'>Acesse sua conta ou crie uma nova</p>
            </div>

            <div className="bg-zinc-800 w-60 h-15 flex justify-evenly items-center rounded-xl">
                <button onClick={() => setModo('login')}>Entrar</button>
                <button onClick={() => setModo('cadastro')} >Cadastrar</button>
            </div>

            <div className="">
                {modo === 'login' ? <FormLogin/> : <FormCadastro/>}
            </div>

            <div className=''>
                <button></button>
                <p></p>
                <div>
                    <button></button>
                    <button></button>
                </div>
            </div>

        </div>
    );

}