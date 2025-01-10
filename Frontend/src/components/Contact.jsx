

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import Navbar from "./Navbar";

function Contact() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("Users"));
    if (loggedUser) {
      setUser(loggedUser);
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (!user) {
      toast.error("You need to log in first.");
      return;
    }

    const contactData = {
      userId: user._id,
      name: data.name,
      email: data.email,
      message: data.message,
    };

    try {
      const res = await axios.post("http://localhost:4001/contact/contact1", contactData);
      if (res.data.success) {
        toast.success("Message sent successfully!");
      }
    } catch (err) {
      console.error(err);
      toast.error("Error: " + err.response?.data?.message || "Something went wrong.");
    }
  };

  return (
    <div className="relative">
      <Navbar />
      <div className="pt-16">
        <h1 className="text-center text-3xl font-bold text-gray-800 dark:text-white mt-8">
          Contact Us
        </h1>
        <div className="max-w-lg mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mt-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                {...register("name", { required: "Name is required" })}
                defaultValue={user ? user.name : ""}
                disabled={!user}
              />
              {errors.name && <span className="text-sm text-red-500">{errors.name.message}</span>}
            </div>

            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                {...register("email", { required: "Email is required" })}
                defaultValue={user ? user.email : ""}
                disabled={!user}
              />
              {errors.email && <span className="text-sm text-red-500">{errors.email.message}</span>}
            </div>

            {/* Message */}
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Message
              </label>
              <textarea
                id="message"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                {...register("message", { required: "Message is required" })}
                rows="4"
              ></textarea>
              {errors.message && <span className="text-sm text-red-500">{errors.message.message}</span>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
