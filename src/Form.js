import React from "react";
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="Input-field">
        <label htmlFor="recipientEmail">
          Please enter the email of the ANDi you would like to send your AND
          title clue to
        </label>
        <input
          id="recipientEmail"
          name="recipientEmail"
          {...register("recipientEmail", { required: true, pattern: /@and.digital/ })}
          type="email"
        />
        {errors.recipientEmail && errors.recipientEmail.type === "required" && (
          <span role="alert">This is required</span>
        )}
        {errors.recipientEmail && errors.recipientEmail.type === "pattern" && (
          <span role="alert">Invalid email. Must use ANDi email</span>
        )}
      </div>

      <div className="Input-field">
        <label htmlFor="yourEmail">Please enter your email</label>
        <input
          id="yourEmail"
          name="yourEmail"
          {...register("yourEmail", { required: true })}
          type="email"
        />
        {errors.yourEmail && errors.yourEmail.type === "required" && (
          <span role="alert">This is required</span>
        )}
      </div>

      <div className="Input-field">
        <label htmlFor="yourName">Your AND title</label>
        <input id="yourName" name="yourName" {...register("yourName", { required: true })} />
        {errors.yourName && errors.yourName.type === "required" && (
          <span role="alert">This is required</span>
        )}
      </div>

      <div className="Input-field">
        <label htmlFor="andTitle">Your AND title</label>
        <input id="andTitle" name="andTitle" {...register("andTitle", { required: true })} />
        {errors.andTitle && errors.andTitle.type === "required" && (
          <span role="alert">This is required</span>
        )}
      </div>

      {/* I think that for MVP that it might be easier to have a text input and get the user to add a link to a photo/gif/video/meme on the internet */}
      <div className="Input-field">
        <label htmlFor="pictureClue">Please add a link to a photo/media for your AND title clue</label>
        <input
          id="pictureClue"
          name="pictureClue"
          {...register("pictureClue", { required: true })}
        />
        {errors.pictureClue && errors.pictureClue.type === "required" && (
          <span role="alert">This is required</span>
        )}
      </div>

      <input type="submit" />
    </form>
  );
};

export default Form;
