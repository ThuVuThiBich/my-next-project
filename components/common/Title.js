import React from "react";
export default function Title({ title }) {
  return (
    <section className="mt-10 mb-5 flex text-white md:mt-16">
      <div className="flex w-full rounded bg-[#c80000] p-2">
        <small className=" ml-2 font-semibold  uppercase text-sm md:text-base">
          {title}
        </small>
      </div>
    </section>
  );
}
