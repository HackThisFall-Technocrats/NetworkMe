import { useForm, Controller, useFieldArray } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EventRegisterForm = () => {
  const { register, handleSubmit, control, errors } = useForm({
    defaultValues: {
      sponsors: [{ name: "", logo: "", url: "" }],
      volunteers: [{ name: "", designation: "", socialMediaUrl: "" }],
    },
  });
  const {
    fields: sponsorFields,
    append: appendSponsor,
    remove: removeSponsor,
  } = useFieldArray({
    control,
    name: "sponsors",
  });
  const {
    fields: volunteerFields,
    append: appendVolunteer,
    remove: removeVolunteer,
  } = useFieldArray({
    control,
    name: "volunteers",
  });

  const onSubmit = (data) => {
    console.log(data);
    // Here you can handle the form submission, e.g. send the data to a server
  };

  return (
    <section className="bg-white dark:bg-gray-900 mx-auto">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Register your event
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name@gmail.com"
            />
            {/* {errors.email && <p>This field is required</p>} */}
          </div>
          
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Description
            </label>
            <textarea
              {...register("message", { required: true })}
              id="message"
              rows={6}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Enter details about the event.."
            />
            {/* {errors.message && <p>This field is required</p>} */}
          </div>
          <div>
            <label
              htmlFor="user_avatar"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Upload file
            </label>
            <input
              {...register("user_avatar")}
              type="file"
              id="user_avatar"
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              aria-describedby="user_avatar_help"
            />
            <div
              className="mt-1 text-sm text-gray-500 dark:text-gray-300"
              id="user_avatar_help"
            >
              A profile picture is useful to confirm your are logged into your
              account
            </div>
          </div>
          <div>
  <label
    htmlFor="startDateTime"
    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
  >
    Start Date and Time
  </label>
  <Controller
    control={control}
    name="startDateTime"
    render={({ field }) => (
      <DatePicker
        {...field}
        selected={field.value}
        onChange={(date) => field.onChange(date)}
        showTimeSelect
        dateFormat="Pp"
        className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
      />
    )}
  />
</div>
<div>
  <label
    htmlFor="endDateTime"
    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
  >
    End Date and Time
  </label>
  <Controller
    control={control}
    name="endDateTime"
    render={({ field }) => (
      <DatePicker
        {...field}
        selected={field.value}
        onChange={(date) => field.onChange(date)}
        showTimeSelect
        dateFormat="Pp"
        className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
      />
    )}
  />
</div>
<div>
  <label
    htmlFor="organizerName"
    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
  >
    Organizer Name
  </label>
  <input
    {...register("organizer.name")}
    type="text"
    id="organizerName"
    className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
  />
</div>
<div>
  <label
    htmlFor="organizerSocialMediaLink"
    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
  >
    Social Media Link
  </label>
  <input
    {...register("organizer.socialMediaLink")}
    type="url"
    id="organizerSocialMediaLink"
    className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
  />
</div>
<div>
  <label
    htmlFor="organizerPhoto"
    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
  >
    Organizer Photo
  </label>
  <input
    {...register("organizer.photo")}
    type="file"
    id="organizerPhoto"
    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
    aria-describedby="organizerPhoto_help"
  />
</div>
{sponsorFields.map((item, index) => (
  <div key={item.id} className="mb-4">
    <h3 className="mb-2 font-semibold text-gray-900 dark:text-gray-300">Sponsor {index + 1}</h3>
    <div>
      <label
        htmlFor={`sponsors[${index}].name`}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        Sponsor Name
      </label>
      <input
        {...register(`sponsors[${index}].name`)}
        type="text"
        id={`sponsors[${index}].name`}
        className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
      />
    </div>
    <div>
      <label
        htmlFor={`sponsors[${index}].logo`}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        Sponsor Logo
      </label>
      <input
        {...register(`sponsors[${index}].logo`)}
        type="file"
        id={`sponsors[${index}].logo`}
        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
      />
    </div>
    <div>
      <label
        htmlFor={`sponsors[${index}].url`}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        Sponsor URL
      </label>
      <input
        {...register(`sponsors[${index}].url`)}
        type="url"
        id={`sponsors[${index}].url`}
        className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
      />
    </div>
    <button 
      type="button" 
      onClick={() => removeSponsor(index)}
      className="mt-2 py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none"
    >
      Remove Sponsor
    </button>
  </div>
))}
<button
  type="button"
  onClick={() => appendSponsor({ name: "", logo: "", url: "" })}
  className="py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none"
>
  Add Sponsor
</button>

{volunteerFields.map((item, index) => (
  <div key={item.id} className="mb-4">
    <h3 className="mb-2 font-semibold text-gray-900 dark:text-gray-300">Volunteer {index + 1}</h3>
    <div>
      <label
        htmlFor={`volunteers[${index}].name`}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        Volunteer Name
      </label>
      <input
        {...register(`volunteers[${index}].name`)}
        type="text"
        className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
      />
    </div>
    <div>
      <label
        htmlFor={`volunteers[${index}].designation`}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        Volunteer Designation
      </label>
      <input
        {...register(`volunteers[${index}].designation`)}
        type="text"
        className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
      />
    </div>
    <div>
      <label
        htmlFor={`volunteers[${index}].socialMediaUrl`}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        Volunteer Social Media URL
      </label>
      <input
        {...register(`volunteers[${index}].socialMediaUrl`)}
        type="url"
        className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
      />
    </div>
    <button 
      type="button" 
      onClick={() => removeVolunteer(index)}
      className="mt-2 py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none "
    >
      Remove Volunteer
    </button>
  </div>
))}
<button
  type="button"
  onClick={() => appendVolunteer({ name: "", designation: "", socialMediaUrl: "" })}
  className="py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none"
>
  Add Volunteer
</button>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default EventRegisterForm;
