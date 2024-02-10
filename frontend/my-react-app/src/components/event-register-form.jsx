import React from 'react'

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

const onSubmit = async (data) => {
  console.log(data);
  console.log("event ki mkc");

  try {
    // Gather form data into an object
    const formData = {
          name: data.Name,  // Assuming "Name" is the correct field name
          description: data.message,
          Venue: data.venue,
        images: data.user_avatar[0], // File upload
        startDateTime: data.startDateTime,
        endDateTime: data.endDateTime,
        organizer: {
          name: data.organizerName,
          socialMediaLink: data.organizerSocialMediaLink,
          photo: data.organizer.photo[0], // File upload
        },
        sponsors: sponsorFields.map((sponsor) => ({
          name: sponsor.name,
          logo: sponsor.logo[0], // File upload
          url: sponsor.url,
        })),
        volunteers: volunteerFields.map((volunteer) => ({
          name: volunteer.name,
          designation: volunteer.designation,
          socialMediaUrl: volunteer.socialMediaUrl,
        })),
      };

           

    // Create FormData object to handle file uploads
    const formDataToSend = new FormData();

    // Append non-file fields to FormData
    Object.entries(formData).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        // Append array fields to FormData
        value.forEach((item, index) => {
          Object.entries(item).forEach(([itemKey, itemValue]) => {
        if (itemValue && typeof itemValue === 'object' && itemValue.type === 'file') {
  formDataToSend.append(`${key}[${index}].${itemKey}`, itemValue[0]);
} else {
  formDataToSend.append(`${key}[${index}].${itemKey}`, itemValue);
}

          });
        });
      } else {
        // Append other fields to FormData
        formDataToSend.append(key, value);
      }
    });

    // Send form data using fetch
    const response = await fetch('http://127.0.0.1:3000/api/v1/tours', {
      method: 'POST',
      body: formDataToSend, // Fixed: use formDataToSend instead of eventData
    });

    
    if (response.ok) {
      console.log('Data saved successfully');
    } else {
       const errorResponse = await response.json().catch(() => null);
    console.error('Error saving data:', errorResponse || 'Unknown error');
    }
  } catch (error) {
    console.error('Error in form submission:', error);
  }
};

  return (
    <section className="bg-customPurple-light mx-auto">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-3 text-2xl tracking-tight font-bold text-center text-black">
          Register your event
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div>
            

            <label
  htmlFor="Name"
  className="block mb-2 text-sm font-medium text-black"
>
  Name
</label>
<input
  {...register("Name", { required: true })}
  type="text"
  id="Name"
  className="shadow-sm bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-100 focus:border-black block w-full p-2.5 "
  placeholder="Hack this fall"
/>
<label
  htmlFor="venue"
  className="block mb-2 text-sm font-medium text-black"
>
  Venue
</label>
<input
  {...register("venue", { required: true })}
  type="text"
  id="venue"
  className="shadow-sm bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-100 focus:border-black block w-full p-2.5 "
  placeholder="Hack this fall"
/>

            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-black"
            >
              Your Description
            </label>
            <textarea
              {...register("message", { required: true })}
              id="message"
              rows={6}
              className="shadow-sm bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-100 focus:border-black block w-full p-2.5 "
              placeholder="Leave a comment..."
            />

            <label
              htmlFor="user_avatar"
              className="block mb-2 text-sm font-medium text-black"
            >
              Upload file
            </label>
            <input
              {...register("user_avatar")}
              type="file"
              id="user_avatar"
              className="shadow-sm bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-100 focus:border-black block w-full p-2.5 "
              aria-describedby="user_avatar_help"
            />
            <div
              className="mt-1 text-sm text-black"
              id="user_avatar_help"
            >
              A profile picture is useful to confirm you are logged into your account
            </div>
          </div>

          <div>
            <label
              htmlFor="startDateTime"
              className="block mb-2 text-sm font-medium text-black"
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
                  className="shadow-sm bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-100 focus:border-black block w-full p-2.5 "
                />
              )}
            />
          </div>

          <div>
            <label
              htmlFor="endDateTime"
              className="block mb-2 text-sm font-medium text-black"
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
                  className="shadow-sm bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-100 focus:border-black block w-full p-2.5 "
                />
              )}
            />
          </div>

          <div>
            <label
              htmlFor="organizerName"
              className="block mb-2 text-sm font-medium text-black"
            >
              Organizer Name
            </label>
            <input
              {...register("organizer.name")}
              type="text"
              id="organizerName"
              className="shadow-sm bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-100 focus:border-black block w-full p-2.5 "
            />
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

          <div>
            <label
              htmlFor="organizerPhoto"
              className="block mb-2 text-sm font-medium text-black"
            >
              Organizer Photo
            </label>
            <input
              {...register("organizer.photo")}
              type="file"
              id="organizerPhoto"
              className="shadow-sm bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-100 focus:border-black block w-full p-2.5 "
              aria-describedby="organizerPhoto_help"
            />
          </div>

          {sponsorFields.map((item, index) => (
            <div key={item.id} className="mb-4">
              <h3 className="mb-2 font-semibold text-black">Sponsor {index + 1}</h3>
              <div>
                <label
                  htmlFor={`sponsors[${index}].name`}
                  className="block mb-2 text-sm font-medium text-black"
                >
                  Sponsor Name
                </label>
                <input
                  {...register(`sponsors[${index}].name`)}
                  type="text"
                  id={`sponsors[${index}].name`}
                  className="shadow-sm bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-100 focus:border-black block w-full p-2.5 "
                />
              </div>
              <div>
                <label
                  htmlFor={`sponsors[${index}].logo`}
                  className="block mb-2 text-sm font-medium text-black"
                >
                  Sponsor Logo
                </label>
                <input
                  {...register(`sponsors[${index}].logo`)}
                  type="file"
                  id={`sponsors[${index}].logo`}
                  className="shadow-sm bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-100 focus:border-black block w-full p-2.5 "
                />
              </div>
              <div>
                <label
                  htmlFor={`sponsors[${index}].url`}
                  className="block mb-2 text-sm font-medium text-black"
                >
                  Sponsor URL
                </label>
                <input
                  {...register(`sponsors[${index}].url`)}
                  type="url"
                  id={`sponsors[${index}].url`}
                  className="shadow-sm bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-100 focus:border-black block w-full p-2.5 "
                />
              </div>
              <button 
                type="button" 
                onClick={() => removeSponsor(index)}
                className="mt-2 py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none "
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
              <h3 className="mb-2 font-semibold text-black">Volunteer {index + 1}</h3>
              <div>
                <label
                  htmlFor={`volunteers[${index}].name`}
                  className="block mb-2 text-sm font-medium text-black"
                >
                  Volunteer Name
                </label>
                <input
                  {...register(`volunteers[${index}].name`)}
                  type="text"
                  className="shadow-sm bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-100 focus:border-black block w-full p-2.5 "
                />
              </div>
              <div>
                <label
                  htmlFor={`volunteers[${index}].designation`}
                  className="block mb-2 text-sm font-medium text-black"
                >
                  Volunteer Designation
                </label>
                <input
                  {...register(`volunteers[${index}].designation`)}
                  type="text"
                  className="shadow-sm bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-100 focus:border-black block w-full p-2.5 "
                />
              </div>
              <div>
                <label
                  htmlFor={`volunteers[${index}].socialMediaUrl`}
                  className="block mb-2 text-sm font-medium text-black"
                >
                  Volunteer Social Media URL
                </label>
                <input
                  {...register(`volunteers[${index}].socialMediaUrl`)}
                  type="url"
                  className="shadow-sm bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-100 focus:border-black block w-full p-2.5 "
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
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-customPurple sm:w-fit hover:bg-customPurple-dark focus:ring-4 focus:outline-none focus:ring-customPurple-light"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default EventRegisterForm;
