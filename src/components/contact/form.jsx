"use client";
import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";
import { delay, motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { scale: 0 },
  show: { scale: 1 },
};

export default function Form() {
  //
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //Send Email function for emailJS
  const sendEmail = (params) => {
    // Toaster for pop up action messages
    const toastId = toast.loading("Sending Email...");

    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        params,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
          limitRate: {
            throttle: 5000, //Limit of 1 email per 5 seconds
          },
        }
      )
      .then(
        () => {
          toast.success("Message Sent Successfully!", { id: toastId });
        },
        () => {
          toast.error("Message Failed to Send! Please try again later.", {
            id: toastId,
          });
        }
      );
  };
  // OnSubmit action from the Submit button
  const onSubmit = (data) => {
    const templateParams = {
      from_name: data.name,
      to_name: "My name",
      message: data.message,
      reply_to: data.email,
    };
    sendEmail(templateParams);
  };

  return (
    <>
      <Toaster richColors={true} />
      <motion.form
        variants={container}
        initial="hidden"
        animate="show"
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md w-full flex flex-col items-center justify-center space-y-4"
      >
        {/* text input name field */}
        <motion.input
          variants={item}
          type="text"
          placeholder="name"
          {...register("name", {
            required: "This field is required!",
            minLength: {
              value: 3,
              message: "Name must be at least 3 characters",
            },
          })}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        />
        {/* text input name field - VALIDATION*/}
        {errors.name && (
          <span className="inline-block self-start text-accent">
            {errors.name.message}
          </span>
        )}
        {/* text input email field */}
        <motion.input
          variants={item}
          type="email"
          placeholder="email"
          {...register("email", { required: "This field is required!" })}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        />
        {/* text input email field - VALIDATION*/}
        {errors.email && (
          <span className="inline-block self-start text-accent">
            {errors.email.message}
          </span>
        )}
        {/* text message field */}
        <motion.textarea
          variants={item}
          {...register("message", {
            required: "This field is required!",
            maxLength: {
              value: 500,
              message: "Message must be less than 500 characters",
            },
            minLength: {
              value: 50,
              message: "Message must be at least 50 characters",
            },
          })}
          placeholder="message"
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        />
        {/* text message field - VALIDATION*/}
        {errors.message && (
          <span className="inline-block self-start text-accent">
            {errors.message.message}
          </span>
        )}
        {/* SUBMIT BUTTON */}
        <motion.input
          variants={item}
          value="Send Your Message!"
          type="submit"
          className="px-10 py-4 rounded-md shadow-lg bg-background border 
        border-accent/30 border-solid hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none
        focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize"
        />
      </motion.form>
    </>
  );
}
