import Button from "../features/Button";

function Overview() {
  return (
    <section>
      <section
        id="overview"
        className="mx-auto flex max-w-[80rem] items-center justify-center gap-[7rem] py-16"
      >
        <section className="relative w-1/2">
          <img
            className="w-full"
            src="/the big idea.png"
            alt="Idea"
            loading="lazy"
          />
          <img
            className="absolute -left-20 top-40"
            src="/star.png"
            alt="star"
            loading="lazy"
          />
          <img
            className="absolute -bottom-6 -right-6"
            src="/arrow.png"
            alt="arrow"
            loading="lazy"
          />
          <p className="absolute left-0 right-0 top-1/2 mx-auto text-center font-mont text-2xl font-bold text-white">
            The Big <br /> Idea!
          </p>
        </section>

        <section className="flex w-1/2 flex-col gap-6">
          <span className="relative">
            <h2 className="font-clash text-[2rem] font-bold text-white">
              Introduction to getlinked <br />
              <span className="text-secondary">tech Hackathon 1.0</span>
            </h2>
            <img
              className="absolute -right-6 top-1/3"
              src="/star.png"
              alt="star"
            />
          </span>
          <p className="font-mont text-sm font-normal leading-6 text-white">
            {`Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!`}
          </p>
        </section>
      </section>

      {/* --------------------2nd part--------------------- */}

      <section className="relative border-y border-white/20">
        <section className="mx-auto flex max-w-[80rem] flex-row-reverse items-center justify-center gap-[3rem]">
          <section className="relative w-1/2">
            <img
              className="w-full"
              src="/female.png"
              alt="Female"
              loading="lazy"
            />
            <img
              className="absolute left-10 top-60"
              src="/star-white.png"
              alt="star"
              loading="lazy"
            />
          </section>

          <section className="z-50 flex w-1/2 flex-col gap-6">
            <span className="relative">
              <h2 className="font-clash text-[2rem] font-bold text-white">
                Rules and <br />
                <span className="text-secondary">Guidelines</span>
              </h2>
              <img
                className="absolute -top-6 left-80"
                src="/star-gray.png"
                alt="star"
              />
            </span>
            <span className="relative">
              <p className="font-mont text-sm font-normal leading-6 text-white">
                {`Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!`}
              </p>
              <img
                className="absolute -bottom-4 -right-16"
                src="/star-white.png"
                alt="star"
              />
            </span>
          </section>
        </section>

        <section className="absolute left-0 top-0 h-full w-full overflow-hidden">
          <img
            className="absolute -bottom-32 left-0 mix-blend-saturation"
            src="/Purple-Lens-Flare.png"
            alt="Purple Flare"
          />
        </section>

        {/* <section className="absolute right-0 top-0 h-full w-full overflow-hidden">
          <img
            className="absolute -right-[30rem] top-20 mix-blend-saturation"
            src="/Purple-Lens-Flare.png"
            alt="Purple Flare"
          />
        </section> */}
      </section>

      {/* --------------------Purple Flare starts-------------------- */}
      <section className="absolute right-0 top-[112rem] h-full w-full overflow-hidden">
        <img
          className="absolute -right-[30rem] top-20 mix-blend-saturation"
          src="/Purple-Lens-Flare.png"
          alt="Purple Flare"
        />
      </section>

      {/* -------------- 2nd Flare ---------- */}

      <section className="absolute right-0 top-[175rem] h-full w-full overflow-hidden">
        <img
          className="absolute -right-[20rem] top-20 mix-blend-saturation"
          src="/Purple-Lens-Flare.png"
          alt="Purple Flare"
        />
      </section>
      {/* --------------------Purple Flare ends--------------------- */}

      {/* --------------------3rd part--------------------- */}

      <section className="relative border-y border-white/20 pb-40 pt-20">
        <section className="mx-auto flex max-w-[80rem] items-center justify-center gap-[8rem]">
          <section className="relative z-50 w-1/2">
            <img
              className="w-full"
              src="/two persons.png"
              alt="Persons"
              loading="lazy"
            />

            {/* //////// Stars ///////// */}
            <img
              className="absolute -top-32 left-28"
              src="/star.png"
              alt="star"
              loading="lazy"
            />
            <img
              className="absolute left-80 top-48"
              src="/star-gray.png"
              alt="star"
              loading="lazy"
            />
            <img
              className="absolute bottom-0 right-0"
              src="/star-white.png"
              alt="star"
              loading="lazy"
            />
          </section>

          {/* /////////// Ellipse starts ////////////// */}

          <span className="absolute left-[17rem] top-32">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="134"
              height="134"
              viewBox="0 0 134 134"
              fill="none"
            >
              <circle cx="67" cy="67" r="67" fill="url(#paint0_linear_70_6)" />
              <defs>
                <linearGradient
                  id="paint0_linear_70_6"
                  x1="134"
                  y1="67"
                  x2="3.69183"
                  y2="67"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#8F01FE" />
                  <stop offset="1" stopColor="#FF2674" />
                </linearGradient>
              </defs>
            </svg>
          </span>

          {/* /////////// Ellipse ends ////////////// */}

          {/* //////////////// Foot Splash starts /////////////// */}

          <section className="absolute left-0 top-0 h-full w-full overflow-hidden">
            <img
              className="absolute -left-36 top-52 mix-blend-saturation"
              src="/Purple-Lens-Flare.png"
              alt="Purple Flare"
            />
          </section>

          {/* //////////////// Foot Splash ends /////////////// */}

          <section className="flex w-1/2 flex-col gap-6">
            <h2 className="font-clash text-[2rem] font-bold text-white">
              Judging Criteria <br />
              <span className="text-secondary">Key attributes</span>
            </h2>

            <section className="mb-8 flex flex-col gap-6">
              <span className="font-mont text-sm font-normal leading-6 text-white">
                <span className="text-base font-bold text-gradient1">
                  Innovation and Creativity
                </span>
                : Evaluate the uniqueness and creativity of the solution.
                Consider whether it addresses a real-world problem in a novel
                way or introduces innovative features.
              </span>

              <span className="font-mont text-sm font-normal leading-6 text-white">
                <span className="text-base font-bold text-gradient1">
                  Functionality
                </span>
                : Assess how well the solution works. Does it perform its
                intended functions effectively and without major issues? Judges
                would consider the completeness and robustness of the solution.
              </span>

              <span className="font-mont text-sm font-normal leading-6 text-white">
                <span className="text-base font-bold text-gradient1">
                  Impact and Relevance
                </span>
                : Determine the potential impact of the solution in the real
                world. Does it address a significant problem, and is it relevant
                to the target audience? Judges would assess the potential
                social, economic, or environmental benefits.
              </span>

              <span className="font-mont text-sm font-normal leading-6 text-white">
                <span className="text-base font-bold text-gradient1">
                  Technical Complexity
                </span>
                : Evaluate the technical sophistication of the solution. Judges
                would consider the complexity of the code, the use of advanced
                technologies or algorithms, and the scalability of the solution.
              </span>

              <span className="font-mont text-sm font-normal leading-6 text-white">
                <span className="text-base font-bold text-gradient1">
                  Adherence to Hackathon Rules
                </span>
                : Judges will Ensure that the team adhered to the rules and
                guidelines of the hackathon, including deadlines, use of
                specific technologies or APIs, and any other
                competition-specific requirements.
              </span>
            </section>

            <Button>Read More</Button>
          </section>
        </section>
      </section>
    </section>
  );
}

export default Overview;
