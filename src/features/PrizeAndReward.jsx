function PrizeAndReward() {
  return (
    <section className="">
      <section className="mx-auto flex max-w-[80rem] flex-col pb-[9.3rem] pt-[4.62rem]">
        <section>
          <section className="float-right w-[35rem] font-clash text-[2rem] font-bold text-white">
            <h2>Prizes and</h2>
            <h3 className="text-secondary">Rewards</h3>
            <p className="w-[22rem] font-mont text-sm font-normal">
              Highlight of the prizes or rewards for winners and for
              participants.
            </p>
          </section>
        </section>

        <section className="flex items-center gap-12">
          <section className="">
            <section>
              <img className="w-full" src="/trophy.png" alt="Trophy" />
            </section>
            {/* <section className="absolute -top-20 left-24">
              <img
                className="w-full mix-blend-color-dodge"
                src="/Purple-Lens-Flare.png"
                alt="Purple Flare"
              />
            </section> */}
          </section>

          <section className="flex items-center gap-4 pt-72">
            {/* 1st */}
            <section className="relative flex h-[18.5rem] w-[13.25rem] flex-col items-center justify-end rounded-lg border border-secondary bg-secondary/[0.12] pb-[2rem]">
              <img
                className="absolute -top-20"
                src="/second-medal.png"
                alt="Second medal"
              />

              <section className="text-center font-mont text-white">
                <h4 className="text-4xl font-bold">2nd</h4>
                <h5 className="text-2xl font-semibold">Runner</h5>
                <p className="text-[2rem] font-bold text-secondary">N300,000</p>
              </section>
            </section>

            {/* 2nd */}
            <section className="relative flex h-[21.6875rem] w-[13.25rem] flex-col items-center justify-end rounded-lg border border-primary bg-primary/[0.12] pb-[2rem]">
              <section className="absolute -top-32 h-60 w-72">
                <img
                  className="w-full"
                  src="/first-medal.png"
                  alt="First medal"
                />
              </section>

              <section className="text-center font-mont text-white">
                <h4 className="text-4xl font-bold">1st</h4>
                <h5 className="text-2xl font-semibold">Runner</h5>
                <p className="text-[2rem] font-bold text-secondary">N400,000</p>
              </section>
            </section>

            {/* 3rd */}
            <section className="relative flex h-[18.5rem] w-[13.25rem] flex-col items-center justify-end rounded-lg border border-secondary bg-secondary/[0.12] pb-[2rem]">
              <img
                className="absolute -top-20"
                src="/third-medal.png"
                alt="Third medal"
              />

              <section className="text-center font-mont text-white">
                <h4 className="text-4xl font-bold">3rd</h4>
                <h5 className="text-2xl font-semibold">Runner</h5>
                <p className="text-[2rem] font-bold text-secondary">N150,000</p>
              </section>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
}

export default PrizeAndReward;
