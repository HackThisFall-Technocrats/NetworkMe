import React from 'react'
import { images } from "../assets";

const TestimonialSection = () => {
  return (
    <div className="main-testi h-[80vh] bg-black">
      <h1 className="font-bold text-3xl text-center mb-3">Testimonials</h1>
      <div className="flex">
        <div className="flex flex-col w-[280px] h-[300px] justify-center items-center userCard gap-3 p-2 rounded-lg m-auto mt-5">
          <img
            srcSet={images}
            alt=""
            className="profile-img w-[120px] h-[120px]"
          />
          <p className="text-center">
            Network Me is a game changer! Thanks to the platform, I&apos;ve
            connected with like-minded people
          </p>
          <strong className="text-xl">Alok Singh</strong>
          <p className="text-lg">Web Developer</p>
        </div>
        <div className="flex flex-col w-[280px] h-[300px] justify-center items-center userCard gap-3 p-2 rounded-lg m-auto mt-5">
          <img
            srcSet={images}
            alt=""
            className="profile-img w-[120px] h-[120px]"
          />
          <p className="text-center">
            {" "}
            With Network Me, I can easily connect with professionals in my
            industry,
          </p>
          <strong className="text-xl">Alok Singh</strong>
          <p className="text-lg">Web Developer</p>
        </div>
        <div className="flex flex-col w-[280px] h-[300px] justify-center items-center userCard gap-3 p-2 rounded-lg m-auto mt-5">
          <img
            srcSet={images}
            alt=""
            className="profile-img w-[120px] h-[120px]"
          />
          <p className="text-center">
            Thanks to Network Me, I&apos;ve expanded my professional network and
            found new opportunities
          </p>
          <strong className="text-xl">Alok Singh</strong>
          <p className="text-lg">Web Developer</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialSection
