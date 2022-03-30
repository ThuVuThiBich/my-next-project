import React from "react";
export default function Ribbon({ title }) {
  return (
    <section
      style={{
        textDecoration: "none",
        color: "white",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        marginTop: 64,
        marginBottom: 16,
      }}
    >
      <div className="ribbon flex justify-center">
        <small className=" mx-auto text-sm font-semibold  uppercase md:text-xl">
          {title}
        </small>
      </div>
    </section>
  );
}
