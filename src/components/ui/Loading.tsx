import PokeIcon from '../../assets/poke-icon.svg';

export const Loading = () => {
    return <div className='h-screen flex flex-col justify-center items-center'>
        <img src={PokeIcon} className='w-16 h-16'/>
        <p className='text-poke-blue'>...Loading</p>
    </div>
}