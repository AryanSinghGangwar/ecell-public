"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";

interface IForm {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const initForm: IForm = {
  name: "",
  email: "",
  phone: "",
  message: ""
}

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

const Contact = () => {
  const router = useRouter();
  const [form, setForm] = React.useState<IForm>(initForm);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }


  const handleSubmit = async () => {
    const { name, email, phone, message } = form;
    if (name && email && phone && message) {
      const res = await fetch("/api/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      if (res.status === 200) {
        toast.success("Message sent successfully", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored"
        });
        setForm(initForm);
        await delay(1500);
        router.push("/");
      } else {
        toast.error("Something went wrong! Please try again later", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored"
        });
      }
    } else {
      toast.error("Please fill all the fields", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored"
      });
    }
  }

  return (
    <div id="contact" className="h-full my-10 bg-black bg-[url('/assets/back4.png')] bg-blend-luminosity bg-no-repeat bg-left bg-cover">
      <div className="py-20 bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.2)] flex flex-col">
        <div className="flex flex-col gap-3 items-center justify-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold">
          <span className="uppercase text-transparent bg-clip-text bg-gradient-to-b from-[#0298F9] to-[#086BEA]">Connect with us</span>
          <svg className="px-5" width="450" height="1" viewBox="0 0 580 1" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="0.5" x2="580" y2="0.5" stroke="url(#paint0_linear_11_3)" />
            <defs>
              <linearGradient id="paint0_linear_11_3" x1="622.006" y1="1" x2="-40.7939" y2="0.999999" gradientUnits="userSpaceOnUse">
                <stop stopColor="white" stopOpacity="0" />
                <stop offset="0.501042" stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="h-full grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-10 pt-20 px-6">
          <div className="flex flex-col items-center lg:items-end justify-start gap-9 h-full">
            <textarea rows={1} className="w-full md:w-3/4 xl:w-1/2 text-lg bg-transparent resize-none text-white py-2 px-3 border-2 border-gradient-b-primary" placeholder="Name" name="name" value={form.name} onChange={handleChange} />
            <textarea rows={1} className="w-full md:w-3/4 xl:w-1/2 text-lg bg-transparent resize-none text-white py-2 px-3 border-2 border-gradient-b-primary" placeholder="Email" name="email" value={form.email} onChange={handleChange} />
            <textarea rows={1} className="w-full md:w-3/4 xl:w-1/2 text-lg bg-transparent resize-none text-white py-2 px-3 border-2 border-gradient-b-primary" placeholder="Phone" name="phone" value={form.phone} onChange={handleChange} />
          </div>
          <div className="mt-0 h-full flex flex-col items-center lg:items-start">
            <textarea rows={7} className="text-lg bg-transparent text-white pt-3 px-5 resize-none w-full md:w-3/4 xl:w-1/2 border-2 border-gradient-b-primary" value={form.message} placeholder="Message" name="message" onChange={handleChange} />
          </div>
        </div>
        <button onClick={handleSubmit} className="text-lg bg-gradient-to-b from-[#0298F9] to-[#086BEA] uppercase w-1/2 md:w-1/4 lg:w-1/6 xl:w-[13%] self-center py-3 mt-20 text-white">Submit</button>
      </div>
    </div>
  )
}

export default Contact;