import InputComponent from '@/components/input_component'
import ButtonComponent from '@/components/button_component'
import LinkComponent from '@/components/link_component'
import { useForm } from 'react-hook-form';


export default function CreateAccount() {


  const handleCreateAccount = (): void => {
    console.log('Criando conta...');
  }
  return (
    <>
      <div className='flex place-content-center w-screen h-screen'>

        <div >
          <h1>Ajude pessoas a encontrar o que elas mais amam</h1>

          <form>
            <InputComponent label='Email' placeholder='carlos@gmail.com' />
            <InputComponent label='Número de celular' placeholder='(00) 0000-0000' />
            <InputComponent label='Nome' placeholder='Carlos' />
            <InputComponent label='Senha' placeholder='Nada de 123' />
            <ButtonComponent title='Criar conta' onClick={handleCreateAccount} />
            <LinkComponent href="/login" title='Já tem uma conta? Entre nela agora' />
          </form>
        </div>
      </div>
    </>
  )
}