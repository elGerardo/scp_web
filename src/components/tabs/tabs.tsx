"use client";
import { useState } from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Tabs({
  options,
  onClick,
}: {
  options: string[];
  onClick?: (event: any) => void;
}) {
  const handleOnClick = (data: any) => {
    if (onClick) onClick(data);
  };

  return (
    <div className="w-full max-w-md px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-gray-600 p-1">
          {options.map((category) => (
            <Tab
              onClick={() => handleOnClick(category)}
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                  "focus:outline-none",
                  selected
                    ? "bg-white text-black shadow"
                    : "text-white hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
      </Tab.Group>
    </div>
  );
}
