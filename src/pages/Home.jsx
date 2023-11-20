function Home() {
  return (
    <main>
      <hr className="h-1 w-full bg-white/[0.18]" />

      <section role="hero" className="flex flex-col gap-24 py-8 pl-32 pr-14">
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

        <section className="flex flex-col">
          <section className="font-clash flex flex-col text-[5rem] font-bold leading-normal text-white">
            <h1 className="relative">
              getlinked Tech
              <img
                className="absolute -top-9 left-[32rem]"
                src="/light-bulb.png"
                alt="bulb"
              />
            </h1>

            <span className="flex items-center gap-2">
              <span>Hackathon</span>
              <span className="text-secondary">1.0</span>
              <img className="w-20" src="/chain.png" alt="chain" />
              <img className="w-16" src="/explode.png" alt="blast" />
            </span>
          </section>

          <p className="font-mont w-[33rem] text-xl font-normal leading-8 text-white">
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
          </p>

          <button className="from-primary via-secondary via-gradient1 to-gradient2 mt-14 w-44 rounded-[.25rem] bg-gradient-to-l  from-0% via-[56.42%] via-[99.99%] to-100% px-12 py-4 text-base text-white">
            Register
          </button>
        </section>

        {/* <section className="">
          <img
            className="absolute right-0 z-50"
            src="/worldStar.png"
            alt="Hero"
          />
          <img
            className="absolute bottom-0 right-0"
            src="/man-wearing-smart-glasses.png"
            alt="Hero"
          />
        </section> */}
      </section>
    </main>
  );
}

export default Home;
