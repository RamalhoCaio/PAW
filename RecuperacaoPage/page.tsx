import Link from "next/link";

export default function RecuperacaoPage(){
    return(
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
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