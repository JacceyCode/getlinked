function PartnersAndSponsors() {
  return (
    <section className="bg-[url('./Pulple-Lens-Flare.png')] bg-cover bg-no-repeat bg-blend-difference mix-blend-difference">
      <section className="mx-auto flex max-w-[80rem] flex-col items-center gap-16 p-32 text-white">
        <section className="flex flex-col items-center gap-5">
          <h2 className="font-clash text-[2rem] font-bold">
            Partners and Sponsors
          </h2>
          <p className="w-[28.25rem] text-center font-mont text-sm font-normal">
            Getlinked Hackathon 1.0 is honored to have the following major
            companies as its partners and sponsors
          </p>
        </section>

        <section className="flex h-[35rem] w-[78.4375rem] rounded-[0.3125rem] border border-secondary bg-secondary/[0.01] px-[11rem] py-[9rem]">
          {/* 1st */}
          <section className="flex basis-1/3 flex-col items-center justify-between border-r-4 border-secondary px-8">
            <section className="flex basis-1/2 items-center justify-center">
              <img
                className="w-full"
                src="/liberty.png"
                alt="Liberty company logo"
              />
            </section>

            <hr className="h-1 w-full border-none bg-secondary" />

            <section className="flex basis-1/2 items-center justify-center">
              <img
                className="w-full"
                src="/wisper.png"
                alt="Whisperms company logo"
              />
            </section>
          </section>

          {/* 2nd */}
          <section className="flex basis-1/3 flex-col items-center justify-between px-8">
            <section className="flex basis-1/2 items-center justify-center">
              <img
                className="w-full"
                src="/liberty2.png"
                alt="Liberty company logo"
              />
            </section>

            <hr className="h-1 w-full border-none bg-secondary" />

            <section className="font-typo flex basis-1/2 items-center justify-center text-[3.1875rem] font-normal text-white">
              Pay
              <span className="text-[#00A3FF]">box</span>
            </section>
          </section>

          {/* 3rd */}
          <section className="flex basis-1/3 flex-col items-center justify-between border-l-4 border-secondary px-8">
            <section className="flex basis-1/2 items-center justify-center">
              <img
                className="w-full"
                src="/winwise.png"
                alt="Winwise company logo"
              />
            </section>

            <hr className="h-1 w-full border-none bg-secondary" />

            <section className="font-typo flex basis-1/2 items-center justify-center text-[3.1875rem] font-normal text-white">
              Pay
              <span className="text-[#00A3FF]">box</span>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
}

export default PartnersAndSponsors;
