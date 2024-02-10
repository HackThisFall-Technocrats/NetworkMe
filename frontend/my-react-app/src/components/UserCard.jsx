import images from "../assets/images.jpg";
import github from "../assets/github.png";

const UserCard = () => {
  return (
    <div className="flex flex-col w-[250px] h-[340px] justify-center shadow-lg items-center userCard gap-4 p-2 rounded-lg m-auto mt-5 bg-white">
      <img
        src={images}
        alt=""
        srcSet=""
        className="profile-img w-[120px] h-[120px]"
      />
      <strong className="text-2xl text-black">Alok Singh</strong>
      <p className="text-lg text-black">Web Developer</p>
      <div className="social-icons flex flex-row gap-2">
        <button>
          <img src={github} alt="" className="w-[25px] h-[25px]" />
        </button>
        <button>
          <img src={github} alt="" className="w-[25px] h-[25px]" />
        </button>
        <button>
          <img src={github} alt="" className="w-[25px] h-[25px]" />
        </button>
        <button>
          <img src={github} alt="" className="w-[25px] h-[25px]" />
        </button>
      </div>
    </div>
  );
};

export default UserCard;
