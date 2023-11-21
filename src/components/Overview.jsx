function Overview() {
  return (
    <section className="mx-auto flex max-w-[90rem] items-center justify-center py-10">
      <section className="relative">
        <img className="w-full" src="/the big idea.png" alt="Idea" />
        <img className="absolute -left-20 top-40" src="/star.png" alt="star" />
        <img
          className="absolute -bottom-6 -right-6"
          src="/arrow.png"
          alt="arrow"
        />
        <p className="font-mont absolute left-0 right-0 top-1/2 mx-auto text-center text-2xl font-bold text-white">
          The Big <br /> Idea!
        </p>
      </section>

      <section></section>
    </section>
  );
}

export default Overview;
