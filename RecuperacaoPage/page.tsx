import Link from "next/link";

export default function RecuperacaoPage(){
    return(
        <main>
            <h1>Recuperacao Page</h1>

            <input type='text' name="User" placeholder="Nome Usuario"/>
            <input type='text' name="Nova Senha" placeholder="Nova Senha"/>
            <input type='password' name="Senha" placeholder="Confirmar Senha"/>

            <button>Atualizar</button>

            <Link href='./LoginPage'>Ir para Login</Link>
            <Link href='./'>Voltar</Link>

        </main>
    )
}