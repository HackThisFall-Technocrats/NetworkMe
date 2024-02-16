import { github, random } from "../assets";

const OrganizerCard = ({ volunteer }) => {
  return (
    <>
      <div className="flex flex-col w-[250px] h-[340px] justify-center shadow-lg items-center userCard gap-4 p-2 rounded-lg m-auto mt-5 bg-slate-200 ">
        <img
          src={random}
          alt=""
          srcSet=""
          className="profile-img w-[120px] h-[120px]"
        />
        <strong className="text-2xl text-black">{volunteer.name}</strong>
        <p className="text-lg text-black">{volunteer.designation}</p>
        <div className="social-icons flex flex-row gap-2">
          <button className="bg-white">
            <img src={github} alt="" className="w-[25px] h-[25px]" />
          </button>
        </div>
      </div>
    </>
  );
};

export default OrganizerCard;
