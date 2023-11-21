function Overview() {
  return (
    <section className="">
      <section className="mx-auto flex max-w-[70rem] items-center justify-center gap-[7rem] py-16">
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
          <p className="font-mont absolute left-0 right-0 top-1/2 mx-auto text-center text-2xl font-bold text-white">
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
        <section className="mx-auto flex max-w-[70rem] flex-row-reverse items-center justify-center gap-[3rem]">
          <section className="relative w-1/2">
            <img
              className="w-full"
              src="/female.png"
              alt="Idea"
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

        <section className="absolute right-0 top-0 h-full w-full overflow-hidden">
          <img
            className="absolute -right-[30rem] top-20 mix-blend-saturation"
            src="/Purple-Lens-Flare.png"
            alt="Purple Flare"
          />
        </section>
      </section>

      {/* --------------------3rd part--------------------- */}

      <section></section>
    </section>
  );
}

export default Overview;
