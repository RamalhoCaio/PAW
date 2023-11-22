import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Home Page</h1>
      <Link href='./LoginPage'>Fazer Login</Link>
      <Link href='./RegisterPage'>Criar Conta</Link>
      <Link href='./RecuperacaoPage'>Esqueci minha senha</Link>
    </main>
  )
}
