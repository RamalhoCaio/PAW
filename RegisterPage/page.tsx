import Link from "next/link";

export default function RegisterPage(){
    return(
        <main>
            <h1>Register Page</h1>
            <input type='text' name="User" placeholder="Nome de Usuario"/>
            <input type='text' name="Senha" placeholder="Senha"/>
            <input type='password' name="Senha" placeholder="Confirmar Senha"/>
            
            <Link href='./PainelPage'>Criar conta</Link>
            <Link href='./'>Voltar</Link>
            
        </main>
    )
}