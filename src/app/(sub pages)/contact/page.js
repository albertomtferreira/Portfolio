import Image from "next/image";
import bg from "../../../../public/background/Background_3.jpeg";
import Form from "../../../components/contact/form";



export default function Contact() {
  return (
    <>
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25"
      />
      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
            Get in touch!
          </h1>
          <p className="text-center font-align text-sm">
            Use the power of technology to get in touch. Fill out the form and I will get back to you as soon as possible.

          </p>

        </div>
        <Form />
      </article>      
    </>
  );
}