"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function Form() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const [formData, setFormData] = useState();
  function onSubmit(data) {
    console.log(data);
  }
  return (
    <>
      <form onClick={handleSubmit(onSubmit)}>
        <label htmlFor="fullname">Full Name</label>
        <input
          type="text"
          className=""
          {...register("fullname", { required: true, minLength: 4 })}
          placeholder="Enter Your Name Please"
        />{" "}
        {errors.fullname && (
          <span className="error">This field is required</span>
        )}
        {/* {errors.fullname"minLength" && (
          <span className="error">The name should be more than3</span>
        )} */}
        <br></br>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className=""
          {...register("email", { required: true })}
          placeholder="Enter Your Email"
        />
        {errors.email && <span className="error">This field is required</span>}
        <br></br>
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="number"
          {...register("phoneNumber", { required: true })}
          className=""
          placeholder="Enter Your Phone Number"
        />{" "}
        {errors.phoneNumber && (
          <span className="error">This field is required</span>
        )}
        <br></br>
        <label htmlFor="location">Location</label>
        <input
          type="text"
          {...register("location", { required: true })}
          className=""
          placeholder="Enter Location"
        />
        {errors.location && (
          <span className="error">This field is required</span>
        )}
        <br></br>
        <button>Order</button>
      </form>
    </>
  );
}
