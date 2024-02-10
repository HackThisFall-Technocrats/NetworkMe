import { team } from '../assets';
// import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="flex h-screen justify-center items-center sm:gap-10 flex-col-reverse sm:flex-row">
      <div className="left sm:mr-3">
        <h3 className='text-center text-4xl mb-3 text-black'>Networking Made Easy with</h3>
        <h1 className='text-center text-4xl mb-3 text-[#3C3AB1] font-semibold'>Network Me</h1>
        <div className="flex justify-center">
  <p className='text-2xl mb-10 text-center text-black '>
    <span>Connect</span > with <span>like-minded</span> professionals and <br />
    expand your <span>network</span>
  </p>
</div>

        <div className="btn-row flex gap-10 justify-center">
          {/* <Link to="/register"> */}
            <button className='bg-[#3C3AB1] hover:bg-black text-white font-bold py-3 px-5 rounded-full w-[110px]'>
              Host
            </button>
          {/* </Link> */}
          <button className='bg-[#3C3AB1] hover:bg-black text-white font-bold py-3 px-5 rounded-full w-[120px]'>
            Attendee
          </button>
        </div>
      </div>
      <div className="sm:ml-5 right">
        <img src={team} alt="Team" className='h-[275px] sm:h-[350px]' />
      </div>
    </div>
  );
}

export default Hero;
