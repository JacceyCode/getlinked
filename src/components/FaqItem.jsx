/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

function FaqItem({ item }) {
  const [show, setShow] = useState(false);
  return (
    <section className="border-secondary font-mont flex w-full flex-col gap-2 border-b-2 pb-2 font-normal text-white">
      <span className="flex items-center justify-between text-sm">
        {item}
        <button
          onClick={() => setShow((prev) => !prev)}
          className="text-secondary"
        >
          {!show ? <FaPlus /> : <FaMinus />}
        </button>
      </span>
      {show && (
        <p className="text-xs transition-all duration-300 ease-in-out">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          maxime iste explicabo debitis numquam quod obcaecati quis voluptas
          unde nemo beatae officia pariatur possimus repellat sequi ea neque,
          totam doloribus!
        </p>
      )}
    </section>
  );
}

export default FaqItem;
