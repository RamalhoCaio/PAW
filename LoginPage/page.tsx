import Link from "next/link";

export default function LoginPage(){
    return(
        <main>
            <h1>Login Page</h1>
            
            <input type='text' name="User" placeholder="Nome de Usuario"/>
            <input type='password' name="Senha" placeholder="Senha"/>

            <Link href='./PainelPage'>Entrar</Link>
            <Link href='./'>Voltar</Link>
            
        </main>
    )
}