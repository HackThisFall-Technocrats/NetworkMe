import { useForm } from "react-hook-form";

const UserForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Here you can handle the form submission, e.g. send the data to a server
  };

  return (
    <section className="bg-customPurple-light mx-auto w-full">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-3 text-2xl tracking-tight font-bold text-center text-black">
          Register yourself
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-black"
            >
              Your Name
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              id="name"
              className="shadow-sm bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-100 focus:border-black block w-full p-2.5 "
              placeholder="Your Name"
            />
            {errors.name && <p>This field is required</p>}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-black"
            >
              Your Email
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              id="email"
              className="shadow-sm bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-100 focus:border-black block w-full p-2.5 "
              placeholder="name@gmail.com"
            />
            {errors.email && <p>This field is required</p>}
          </div>
          <div>
            <label
              htmlFor="organizerSocialMediaLink"
              className="block mb-2 text-sm font-medium text-black"
            >
              Social Media Link
            </label>
            <input
              {...register("organizer.socialMediaLink")}
              type="url"
              id="organizerSocialMediaLink"
              className="shadow-sm bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-100 focus:border-black block w-full p-2.5 "
            />
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-customPurple sm:w-fit hover:bg-customPurple-dark focus:ring-4 focus:outline-none focus:ring-customPurple-light"
          >
            Register
          </button>
        </form>
      </div>
    </section>
  );
};

export default UserForm;
