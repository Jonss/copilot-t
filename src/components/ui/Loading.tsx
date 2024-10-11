import PokeIcon from '../../../public/poke-icon.svg'

export const Loading = () => {
    return <div className='h-screen flex flex-col justify-center items-center'>
        <img src={PokeIcon} className='w-16 h-16'/>
        <p>...Loading</p>
    </div>
}