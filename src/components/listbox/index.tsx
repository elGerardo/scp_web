"use client";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";

export default function Example({
  data,
  onChange,
  className
}: {
  data: Array<{ value: string | null; label: string }>;
  onChange?: (event: any) => void;
  className?: string;
}) {
  const [selected, setSelected] = useState(data[0]);
  const handleOnChangeSelected = (data: any) => {
    setSelected(data);
    if (onChange) onChange(data);
  };

  return (
    <div className="w-full">
      <Listbox
        value={selected}
        onChange={(data: any) => handleOnChangeSelected(data)}
      >
        <div className="relative !border-slate-200">
          <Listbox.Button className={`rounded cursor-pointer relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left border-2 border-slate-200 ${className}`}>
            <span className="block truncate">{selected.label}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"></span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm z-10">
              {data.map((item, index) => (
                <Listbox.Option
                  key={index}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-gray-100 text-gray-900" : "text-gray-900"
                    }`
                  }
                  value={item}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {item.label}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
