import React from 'react';
import { useForm } from 'react-hook-form';

const AddServices = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = 'http://localhost:5000/service';
    fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };

  return (
    <div className="m-5 p-5">
      <h2 className="my-5 font-semibold text-2xl text-center">
        You can add a service from here
      </h2>
      <form
        className="flex flex-col items-center gap-3"
        onSubmit={handleSubmit(onSubmit)}>
        {/* React Hook Form */}
        <input
          className="bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Service name"
          {...register('name', { required: true, maxLength: 20 })}
        />
        <input
          className="bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Photo URL"
          {...register('img', { required: true })}
        />

        <input
          className="bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          type="number"
          placeholder="Price"
          {...register('price', { required: true })}
        />

        <textarea
          className=" bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Description"
          {...register('description', { required: true, maxLength: 250 })}
        />

        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input
          className="p-2 bg-blue-500 rounded-md border-2 hover:bg-blue-600 text-white font-medium"
          type="submit"
          value="Add Service"
        />
      </form>
    </div>
  );
};

export default AddServices;
