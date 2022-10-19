import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import "./Form.css";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_k6dvzfr",
        "template_dyja188",
        form.current,
        "pJuNNF31cwLfQlHLW"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const form = useRef();

  return (
    <form ref={form} onSubmit={handleSubmit(sendEmail)} className='form'>
      <div className="Input-field">
        <label className="label" htmlFor="recipientEmail">
          Please enter the email of the ANDi you would like to send your AND
          title clue to
        </label>
        <input
          className="input"
          id="recipientEmail"
          name="recipientEmail"
          {...register("recipientEmail", { required: true })}
          type="email"
        />
        {errors.recipientEmail && errors.recipientEmail.type === "required" && (
          <span className="error-message" role="alert">
            This is required
          </span>
        )}
        {errors.recipientEmail && errors.recipientEmail.type === "pattern" && (
          <span className="error-message" role="alert">
            Invalid email. Must use ANDi email
          </span>
        )}
      </div>

      <div className="Input-field">
        <label className="label" htmlFor="toName">
          Recipient's name
        </label>
        <input
          className="input"
          id="toName"
          name="toName"
          {...register("toName", { required: true })}
        />
        {errors.toName && errors.toName.type === "required" && (
          <span className="error-message" role="alert">
            This is required
          </span>
        )}
      </div>

      <div className="Input-field">
        <label className="label" htmlFor="yourEmail">
          Please enter your email
        </label>
        <input
          className="input"
          id="yourEmail"
          name="yourEmail"
          {...register("yourEmail", { required: true })}
          type="email"
        />
        {errors.yourEmail && errors.yourEmail.type === "required" && (
          <span className="error-message" role="alert">
            This is required
          </span>
        )}
      </div>

      <div className="Input-field">
        <label className="label" htmlFor="yourName">
          Your name
        </label>
        <input
          className="input"
          id="yourName"
          name="yourName"
          {...register("yourName", { required: true })}
        />
        {errors.yourName && errors.yourName.type === "required" && (
          <span className="error-message" role="alert">
            This is required
          </span>
        )}
      </div>

      <div className="Input-field">
        <label className="label" htmlFor="andTitle">
          Your AND title
        </label>
        <input
          className="input"
          id="andTitle"
          name="andTitle"
          {...register("andTitle", { required: true })}
        />
        {errors.andTitle && errors.andTitle.type === "required" && (
          <span className="error-message" role="alert">
            This is required
          </span>
        )}
      </div>

      <div className="Input-field">
        <label className="label" htmlFor="pictureClue">
          Please add a link to a photo/media for your AND title clue
        </label>
        <input
          className="input"
          id="pictureClue"
          name="pictureClue"
          placeholder="https//www....."
          {...register("pictureClue", { required: true })}
        />
        {errors.pictureClue && errors.pictureClue.type === "required" && (
          <span className="error-message" role="alert">
            This is required
          </span>
        )}
      </div>

      <input type="submit" value="SEND EMAIL" id="submit-btn"/>
    </form>
  );
};

export default Form;
