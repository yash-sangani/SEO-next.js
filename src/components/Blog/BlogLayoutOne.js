import React from "react";
import Tag from "../Elements/Tag";
import Link from "next/link";
import Image from "next/image";

const BlogLayoutOne = ({blog}) => {
  return (
    <div className="group inline-block overflow-hidden rounded-xl">
      <div className="absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-2xl z-10 "/>
      <Image
        src={blog.image.filePath.replace("../public", '')}
        placeholder="blur"
        blurDataURL={blog.image.blurhashDataUrl}
        alt={blog.title}
        width={blog.image.width}
        height={blog.image.height}
        className="w-full h-full object-center object-cover rounded-xl group-hover:scale-105 transition-all ease duration-300"
      />
      <div className="absolute bottom-0 p-10 w-full z-20">
        <Tag className="px-6 text-sm py-2 !border" link={`/categories/${blog.tags[0]}`} name={blog.tags[0]} />
        <Link href={blog.url} className="mt-6">
          <h2 className="font-bold capitalize text-2xl text-light mt-4">
            <span className="bg-gradient-to-r from-accent to-accent bg-[length:0px_6px] group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
              {blog.title}
            </span>
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default BlogLayoutOne;
