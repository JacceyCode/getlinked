import { LiaQuestionSolid } from "react-icons/lia";

function Faq() {
  return (
    <section id="faq" className="relative border-y border-white/20 pb-40 pt-20">
      <section className="mx-auto flex max-w-[80rem] flex-row-reverse items-center justify-center gap-[8rem]">
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

        <section className="relative flex w-1/2 flex-col gap-4">
          {/* ////////////// Star ///////////// */}

          <img
            className="absolute -left-6 -top-12"
            src="/star.png"
            alt="star"
            loading="lazy"
          />

          {/* ///////////// Star end ///////////////// */}
          <section>
            <h2 className="font-clash text-[2rem] font-bold text-white">
              Frequently Ask <br />
              <span className="text-secondary">Question</span>
            </h2>

            <span className="font-mont w-[23rem] text-sm font-normal leading-6 text-white">
              We got answers to the questions that you might want to ask about{" "}
              <span className="font-bold">getlinked Hackathon 1.0</span>
            </span>
          </section>

          <section>
            <span className="font-mont text-sm font-normal leading-6 text-white">
              <span className="text-gradient1 text-base font-bold">
                Functionality
              </span>
              : Assess how well the solution works. Does it perform its intended
              functions effectively and without major issues? Judges would
              consider the completeness and robustness of the solution.
            </span>
          </section>
        </section>
      </section>
    </section>
  );
}

export default Faq;
