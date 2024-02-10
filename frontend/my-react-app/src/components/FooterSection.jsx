import { Logo } from '../assets';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-7">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={Logo} alt="My Company Logo" className="h-5 w-auto mr-4" />
          <p className='text-2xl'>Network-me</p>
        </div>
        <strong>Made by team Technocrats</strong>
        <div className="flex items-center">
          <a href="#" className="mx-4 hover:text-gray-400">
            Contact
          </a>
          <a href="#" className="mx-4 hover:text-gray-400">
            About
          </a>
          <a href="#" className="mx-4 hover:text-gray-400">
            FAQ
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
