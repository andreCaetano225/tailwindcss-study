import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <div className='flex  items-center justify-center bg-gray-light text-center h-80'>
        <button className='w-36 bg-orange text-gray-light rounded-lg'>Entrar</button>
        <button className='w-36 bg-orange text-gray-light ml-5 rounded-lg'>Sair</button>
      </div>
    </>
  )
}

export default Home
