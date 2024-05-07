"use client"
import React from "react";
import { useForm } from "react-hook-form";
import { DribbbleIcon, GithubIcon, LinkedinIcon, TwitterIcon } from "../icons";
import Link from "next/link";
import siteMetadata from "@/src/utils/siteMetaDate";

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <footer className="mt-16 rounded-2xl border-2 bg-dark border-solid border-dark dark:border-light m-10 flex flex-col items-center text-light">
      <h3 className="mt-16 font-medium text-center capitalize text-4xl px-4">Interesting Stories | Updates | Guides</h3>
      <p className="mt-5 px-4 tet-center w-3/5 font-light text-base">
        Subscribe to learn about new technology and updates. Join over 5000+
        members community to stay up to date with latest news. © 2023 CodeBucks.
        All rights reserved.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 min-w-[384px] flex items-center bg-light p-2 rounded mx-4">
        <input
          type="email"
          placeholder="Enter your email"
          {...register("Email", { required: true, min: 1 })}
          className="w-full bg-transparent text-dark pl-0 focus:border-dark focus:ring-0 border-0 border-b mr-2 pb-1"
        />

        <input type="submit" className="bg-dark text-light cursor-pointer font-medium rounded px-5 py-1" />
      </form>
      <div className="flex items-center mt-8">
           <a href={siteMetadata.linkedin} className="inline-block w-6 h-6 mr-4 hover:scale-125 transition-all ease duration-200"><LinkedinIcon className=""/></a>
           <a href={siteMetadata.twitter} className="inline-block w-6 h-6 mr-4 hover:scale-125 transition-all ease duration-200"><TwitterIcon className=""/></a>
           <a href={siteMetadata.github} className="inline-block w-6 h-6 mr-4 hover:scale-125 transition-all ease duration-200 fill-light"><GithubIcon className=""/></a>
           <a href={siteMetadata.dribbble} className="inline-block w-6 h-6 mr-4 hover:scale-125 transition-all ease duration-200"><DribbbleIcon className=""/></a>
        </div>

        <div className="w-full mt-24 relative font-medium border-t border-solid border-light py-6 px-8 flex flex-roe items-center justify-between">
<span className="text-center">
    &copy;2024 CodeBucks. All rights reserved.
</span>
<Link href='/site.xml' className="text-center underline">
sitemap.xml
</Link>
<div className="text-center">
Made with &hearts; by <a href="#" className="underline">CodeBucks</a>
</div>
        </div>
    </footer>
  );
};

export default Footer;
