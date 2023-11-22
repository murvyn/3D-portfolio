import { useRef, useState } from "react";
import { SectionWrapper } from "./hoc";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import { styles } from "../style";
import { EarthCanvas } from ".";
import emailjs from "@emailjs/browser";
import { ZodType, z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaTimes, FaRegSmile } from "react-icons/fa";
import { IoIosWarning } from "react-icons/io";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const schema: ZodType<FormData> = z.object({
    name: z.string().nonempty("Name is required!"),
    email: z.string().email(),
    message: z.string().min(15, "Feild requires more words"),
  });
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [close, setClose] = useState(false);
  const [success, setSuccess] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const submitHandle = async (form: FormData) => {
    try {
      setLoading(true);
      await emailjs.send(
        "service_bmaa95v",
        "template_3vdmbuk",
        {
          from_name: form.name,
          to_name: "Marvin",
          from_email: form.email,
          to_email: "marvin.asamoah.123@gmail.com",
          message: form.message,
        },
        "1qMUZTGwWE7UdxH86"
      );
      setSuccess("Thank you, I'll get back to you as soon as possible");
    } catch (err) {
      setError("Unexpected error, please try again later");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {error && (
        <div
          className={`toast toast-bottom sm:toast-start toast-center none z-20 ${
            close && "hidden"
          }`}
        >
          <div className="indicator cursor-pointer">
            <span
              className="indicator-item badge badge-white rounded-full"
              onClick={() => setClose(true)}
            >
              <FaTimes />
            </span>
            <div className="alert alert-error">
              <IoIosWarning />
              <span>{error}</span>
            </div>
          </div>
        </div>
      )}
      {success && (
        <div
          className={`toast toast-bottom sm:toast-start toast-center none z-20 ${
            close && "hidden"
          }`}
        >
          <div className="indicator">
            <span
              className="indicator-item badge badge-white rounded-full"
              onClick={() => setClose(true)}
            >
              <FaTimes />
            </span>
            <div className="alert alert-info">
              <FaRegSmile />
              <span>{success}</span>
            </div>
          </div>
        </div>
      )}
      <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
        <motion.div
          variants={slideIn({
            direction: "left",
            type: "tween",
            delay: 0.2,
            duration: 1,
          })}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <p className={styles.sectionHeadText}>Contact.</p>

          <form
            ref={formRef}
            onSubmit={handleSubmit(submitHandle)}
            className="mt-12 flex flex-col gap-8"
          >
            <label htmlFor="name" className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                {...register("name", { required: true })}
                name="name"
                type="text"
                placeholder="What's your name"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
              {errors.name && (
                <span className="text-error text-sm">
                  {errors.name.message}
                </span>
              )}
            </label>
            <label htmlFor="email" className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Email</span>
              <input
                {...register("email", { required: true })}
                name="email"
                type="email"
                placeholder="What's your email"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
              {errors.email && (
                <span className="text-error text-sm">
                  {errors.email.message}
                </span>
              )}
            </label>

            <label htmlFor="message" className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                {...register("message", { required: true })}
                rows={7}
                name="message"
                placeholder="What do you want to say?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
              {errors.message && (
                <span className="text-error text-sm">
                  {errors.message.message}
                </span>
              )}
            </label>
            <button
              type="submit"
              disabled={loading}
              className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>
        <motion.div
          variants={slideIn({
            direction: "right",
            type: "tween",
            delay: 0.2,
            duration: 1,
          })}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] "
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </>
  );
};

const Wrapper = SectionWrapper({ Component: Contact, idName: "contact" });

export default Wrapper;
