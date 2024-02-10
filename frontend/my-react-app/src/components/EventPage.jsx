

import UserCard from './UserCard';
import OrganizerCard from './OrganizerCard';

const EventPageComponent = () => {
  return (  
    <>
      <div className="flex justify-center">
        <div className="bg-white rounded-lg shadow-lg p-6 w-[80vw]">
          <h2 className="text-4xl font-bold mb-4">HTF</h2>
          <p className="text-gray-600 mb-2 text-2xl">HTF</p>
          <p className="text-gray-800 leading-relaxed text-2xl mb-4">
          HRF
          </p>
        </div>
      </div>

      <h1 className="text-5xl text-center sponsor my-10">Sponsors</h1>
      <div className="flex flex-col justify-center items-center gap-5">
         {/* Mapping over sponsors would go here */}
      </div>

      <h1 className='text-center text-4xl my-10'>Organizer</h1>
      <div className='flex justify-center items-center flex-wrap basis-2/6 gap-3 w-[80vw] mx-auto'>
        <UserCard  />
        <UserCard  />
        <UserCard  />
        <UserCard  />
      </div>

      <h1 className='text-center text-4xl my-10'>Attendee</h1>
      <div className='flex justify-center items-center flex-wrap basis-2/6 gap-3 w-[80vw] mx-auto'>
        <OrganizerCard  />
        <OrganizerCard  />
        <OrganizerCard  />
        <OrganizerCard  />
        <OrganizerCard  />
        <OrganizerCard  />
        <OrganizerCard  />
        <OrganizerCard  />
      </div>
    </>
  );
};

export default EventPageComponent;
