import { LiaQuestionSolid } from "react-icons/lia";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { useState } from "react";

function Faq() {
  const [show, setShow] = useState(false);
  return (
    <section id="faq" className="relative border-y border-white/20 pb-40 pt-40">
      <section className="mx-auto flex max-w-[80rem] flex-row-reverse items-start justify-center gap-[8rem]">
        <section className="relative z-50 w-1/2">
          <img
            className="w-full"
            src="/thought.png"
            alt="Persons"
            loading="lazy"
          />

          {/* //////// Stars ///////// */}
          <img
            className="absolute left-28 top-28 w-4"
            src="/star.png"
            alt="star"
            loading="lazy"
          />
          <img
            className="absolute -top-6 left-0 right-0 mx-auto w-4"
            src="/star.png"
            alt="star"
            loading="lazy"
          />
          <img
            className="absolute left-10 top-72"
            src="/star-gray.png"
            alt="star"
            loading="lazy"
          />
          <img
            className="absolute bottom-0 right-28"
            src="/star-white.png"
            alt="star"
            loading="lazy"
          />

          {/* /////////////// Question mark ////////////////////// */}
          <span className="text-secondary absolute -top-[7rem] left-36">
            <LiaQuestionSolid className="h-32 w-32" />
          </span>
          <span className="text-primary absolute -top-[2.2rem] left-12">
            <LiaQuestionSolid className="h-20 w-20" />
          </span>
          <span className="text-primary absolute -top-[2.2rem] left-[19rem]">
            <LiaQuestionSolid className="h-20 w-20" />
          </span>
        </section>

        <section className="relative flex w-1/2 flex-col gap-12">
          {/* ////////////// Star ///////////// */}

          <img
            className="absolute -left-6 -top-12"
            src="/star.png"
            alt="star"
            loading="lazy"
          />

          {/* ///////////// Star end ///////////////// */}
          <section className="flex flex-col">
            <h2 className="font-clash text-[2rem] font-bold text-white">
              Frequently Ask <br />
              <span className="text-secondary">Question</span>
            </h2>

            <span className="font-mont w-[23rem] text-sm font-normal leading-6 text-white">
              We got answers to the questions that you might want to ask about{" "}
              <span className="font-bold">getlinked Hackathon 1.0</span>
            </span>
          </section>

          <section className="flex flex-col items-start justify-start gap-8">
            {/* 1st */}
            <span className="border-secondary font-mont flex w-full flex-col gap-2 border-b-2 pb-2 text-sm font-normal text-white">
              <span className="flex items-center justify-between">
                Can I work on a project I started before the hackathon?
                <button
                  onClick={() => setShow((prev) => !prev)}
                  className="text-secondary"
                >
                  {!show ? <FaPlus /> : <FaMinus />}
                </button>
              </span>
              {show && (
                <p className="text-xs transition-all duration-300 ease-in-out">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi maxime iste explicabo debitis numquam quod obcaecati
                  quis voluptas unde nemo beatae officia pariatur possimus
                  repellat sequi ea neque, totam doloribus!
                </p>
              )}
            </span>

            {/* 2nd */}
            <span className="border-secondary font-mont flex w-full flex-col gap-2 border-b-2 pb-2 text-sm font-normal text-white">
              <span className="flex items-center justify-between">
                Can I work on a project I started before the hackathon?
                <button
                  onClick={() => setShow((prev) => !prev)}
                  className="text-secondary"
                >
                  {!show ? <FaPlus /> : <FaMinus />}
                </button>
              </span>
              {show && (
                <p className="text-xs transition-all duration-300 ease-in-out">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi maxime iste explicabo debitis numquam quod obcaecati
                  quis voluptas unde nemo beatae officia pariatur possimus
                  repellat sequi ea neque, totam doloribus!
                </p>
              )}
            </span>

            {/* 3rd */}
            <span className="border-secondary font-mont flex w-full flex-col gap-2 border-b-2 pb-2 text-sm font-normal text-white">
              <span className="flex items-center justify-between">
                Can I work on a project I started before the hackathon?
                <button
                  onClick={() => setShow((prev) => !prev)}
                  className="text-secondary"
                >
                  {!show ? <FaPlus /> : <FaMinus />}
                </button>
              </span>
              {show && (
                <p className="text-xs transition-all duration-300 ease-in-out">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi maxime iste explicabo debitis numquam quod obcaecati
                  quis voluptas unde nemo beatae officia pariatur possimus
                  repellat sequi ea neque, totam doloribus!
                </p>
              )}
            </span>

            {/* 4th */}
            <span className="border-secondary font-mont flex w-full flex-col gap-2 border-b-2 pb-2 text-sm font-normal text-white">
              <span className="flex items-center justify-between">
                Can I work on a project I started before the hackathon?
                <button
                  onClick={() => setShow((prev) => !prev)}
                  className="text-secondary"
                >
                  {!show ? <FaPlus /> : <FaMinus />}
                </button>
              </span>
              {show && (
                <p className="text-xs transition-all duration-300 ease-in-out">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi maxime iste explicabo debitis numquam quod obcaecati
                  quis voluptas unde nemo beatae officia pariatur possimus
                  repellat sequi ea neque, totam doloribus!
                </p>
              )}
            </span>

            {/* 5th */}
            <span className="border-secondary font-mont flex w-full flex-col gap-2 border-b-2 pb-2 text-sm font-normal text-white">
              <span className="flex items-center justify-between">
                Can I work on a project I started before the hackathon?
                <button
                  onClick={() => setShow((prev) => !prev)}
                  className="text-secondary"
                >
                  {!show ? <FaPlus /> : <FaMinus />}
                </button>
              </span>
              {show && (
                <p className="text-xs transition-all duration-300 ease-in-out">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi maxime iste explicabo debitis numquam quod obcaecati
                  quis voluptas unde nemo beatae officia pariatur possimus
                  repellat sequi ea neque, totam doloribus!
                </p>
              )}
            </span>

            {/* 6th */}
            <span className="border-secondary font-mont flex w-full flex-col gap-2 border-b-2 pb-2 text-sm font-normal text-white">
              <span className="flex items-center justify-between">
                Can I work on a project I started before the hackathon?
                <button
                  onClick={() => setShow((prev) => !prev)}
                  className="text-secondary"
                >
                  {!show ? <FaPlus /> : <FaMinus />}
                </button>
              </span>
              {show && (
                <p className="text-xs transition-all duration-300 ease-in-out">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi maxime iste explicabo debitis numquam quod obcaecati
                  quis voluptas unde nemo beatae officia pariatur possimus
                  repellat sequi ea neque, totam doloribus!
                </p>
              )}
            </span>
          </section>
        </section>
      </section>
    </section>
  );
}

export default Faq;
