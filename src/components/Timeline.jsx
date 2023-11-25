function Timeline() {
  return (
    <section
      id="timeline"
      className="relative border-y border-white/20 pb-20 pt-48"
    >
      <section className="mx-auto flex max-w-[80rem] flex-row-reverse items-start justify-center gap-[8rem]">
        <section className="relative z-50 w-1/2">
          <img
            className="h-[42rem] w-full"
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
            className="absolute -bottom-4 right-28"
            src="/star-white.png"
            alt="star"
            loading="lazy"
          />
        </section>

        <section className="relative flex w-1/2 flex-col gap-20">
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

            <span className="w-[23rem] font-mont text-sm font-normal leading-6 text-white">
              We got answers to the questions that you might want to ask about{" "}
              <span className="font-bold">getlinked Hackathon 1.0</span>
            </span>
          </section>
        </section>
      </section>
    </section>
  );
}

export default Timeline;
