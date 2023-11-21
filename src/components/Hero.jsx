function Hero() {
  return (
    <section className="relative flex flex-col gap-[7.7rem] border-y-2 border-white/20 py-8 pl-32 pr-14">
      <section className="flex flex-col items-end">
        <h2 className="font-mont text-4xl font-bold italic text-white">
          Igniting a Revolution in HR Innovation
        </h2>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="255"
            height="17"
            viewBox="0 0 255 17"
            fill="none"
          >
            <path
              d="M1 14.043C43.3333 5.7097 154.4 -5.95697 254 14.043"
              stroke="#FF26B9"
              strokeWidth="5px"
            />
          </svg>
        </span>
      </section>

      <section className="relative z-30 flex flex-col">
        <section className="font-clash flex flex-col text-[5rem] font-bold leading-normal text-white">
          <h1 className="relative">
            getlinked Tech
            <img
              className="absolute -top-9 left-[32rem]"
              src="/light-bulb.png"
              alt="bulb"
              loading="eager"
            />
          </h1>

          <span className="-mt-8 flex items-center gap-2">
            <span>Hackathon</span>
            <span className="text-secondary">1.0</span>
            <img
              className="w-20"
              src="/chain.png"
              alt="chain"
              loading="eager"
            />
            <img
              className="w-16"
              src="/explode.png"
              alt="blast"
              loading="eager"
            />
          </span>
        </section>

        <p className="font-mont w-[33rem] text-xl font-normal leading-8 text-white">
          Participate in getlinked tech Hackathon 2023 stand a chance to win a
          Big prize
        </p>

        <button className="from-primary via-secondary via-gradient1 to-gradient2 mt-14 w-44 rounded-[.25rem] bg-gradient-to-l  from-0% via-[56.42%] via-[99.99%] to-100% px-12 py-4 text-base text-white">
          Register
        </button>

        <section className="font-unica my-16 flex items-center gap-8 text-[4rem] font-normal text-white">
          <span>
            00
            <sub className="font-mont text-sm">H</sub>
          </span>
          <span>
            00
            <sub className="font-mont text-sm">M</sub>
          </span>
          <span>
            00
            <sub className="font-mont text-sm">S</sub>
          </span>
        </section>

        {/* ---------- STARS -------------- */}
        <img
          className="absolute -top-36 left-16"
          src="/star-white.png"
          alt="star"
          loading="eager"
        />
        <img
          className="absolute -top-16 left-[56rem]"
          src="/star-gray.png"
          alt="star"
          loading="eager"
        />
        <img
          className="absolute left-[27.5rem] top-[25rem]"
          src="/star-gray.png"
          alt="star"
          loading="eager"
        />
      </section>

      <section className="absolute -top-44 left-0 h-full w-3/4 bg-[url('/Purple-Lens-Flare.png')] bg-cover bg-no-repeat mix-blend-hard-light"></section>

      <section className="absolute bottom-0 right-0">
        <img
          className="w-full"
          src="/man-wearing-smart-glasses.png"
          alt="Hero"
          loading="eager"
        />
        <section className="absolute left-16 top-0">
          <img
            className="w-full"
            src="/worldStar.png"
            alt="Hero"
            loading="eager"
          />
        </section>
      </section>
    </section>
  );
}

export default Hero;
