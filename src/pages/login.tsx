import InputComponent from '@/components/input_component'
import ButtonComponent from '@/components/button_component'
import Link from 'next/link'
import LinkComponent from '@/components/link_component';

export default function Login() {

  const handleLogin = (): void => {
    console.log('Criando conta...');
  };

  const handleForgotPassword = (): void => {

  };

  return (
    <>
      <div className='flex place-content-center w-screen h-screen'>

        <div >
          <h1>Ajude pessoas a encontrar o que elas mais amam</h1>

          <form action="">
            <InputComponent label='Email' placeholder='Exemplo: carlos@gmail.com' />
            <InputComponent label='Senha'/>
            <ButtonComponent title='Authenticar' onClick={handleLogin} />
            <LinkComponent href="/create_account" title='Não tem conta? Crie uma agora'/>
            <LinkComponent href="/create_account" title='Esqueci minha senha' onClick={handleForgotPassword}/>
          </form>
        </div>
      </div>
    </>
  )
}