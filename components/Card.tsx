"use client";

import { useState } from "react";
import Button from "./Button";

type CardProps = {
  title: string;
  text: string;
  image: string;
  gradient: string;
  buttonText: string;
};

export default function Card({
  title,
  text,
  image,
  gradient,
  buttonText,
}: CardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`w-full max-w-sm rounded-2xl overflow-hidden text-black shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl ${gradient}`}
    >
      {/* IMAGE */}
      <div className="h-40 w-full">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3">
          {title}
        </h3>

        <p className="mb-4 opacity-90">
          {expanded ? text : text.slice(0, 80) + "..."}
        </p>

        <button
          onClick={() => setExpanded(!expanded)} 
          className="mb-4 text-sm underline opacity-80"
        >
          {expanded ? "Show Less" : "Show More"}
        </button>

        <Button text={buttonText} />
      </div>
    </div>
  );
}