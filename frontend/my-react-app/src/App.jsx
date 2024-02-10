// import { useState } from 'react'
import UserCard from './components/UserCard';
import EventRegisterForm from './components/event-register-form'
import UserForm from './components/user-form';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <>
    <div className="flex justify-center flex-col items-center w-[100vw]">
      <h1 className='text-3xl font-bold underline mb-4'>Alok is testing tailwind</h1>
      {/* <UserForm /> */}
      {/* <UserCard /> */}
      <Testimonials />
      </div>
    </>
  );
}

export default App;
