import NotFoundImg from '../assets/not-found.svg';


function NotFound() {
    return (
      <div className="flex justify-center items-center h-screen">
        <img src={NotFoundImg} alt='not-found' className='h-[60%]'/>
      </div>
    );
}

export default NotFound;
