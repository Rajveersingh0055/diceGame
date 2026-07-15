import diceLogo from '../assets/dice/dices.png'
import Button from './useablecomponent/Button'
function Home() {
  return (
    <div className="flex flex-row items-center justify-center h-screen">
       <img src={diceLogo} alt="Dice Logo"  className='w-[650px] h-[522px]'/>
        <div className="flex flex-col items-end">
          <h1 className='text-9xl font-bold whitespace-nowrap'>Dice Game</h1>
          <Button  onClick={() => window.location.href = '/gamemode'}>
            Play Now
          </Button>
        </div>
    </div>
  )
}

export default Home

