function PrizeAndReward() {
  return (
    <section className="bg-background mix-blend-hard-light">
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

        <section className="flex">
          <section className="relative">
            <section>
              <img className="w-full" src="/trophy.png" alt="Trophy" />
            </section>
            <section className="absolute -top-20 left-20">
              <img
                className="w-full"
                src="/Purple-Lens-Flare.png"
                alt="Purple Flare"
              />
            </section>
          </section>
          <section></section>
        </section>
      </section>
    </section>
  );
}

export default PrizeAndReward;
