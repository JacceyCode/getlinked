import PrizeAndReward from "../features/PrizeAndReward";
import RegistrationDates from "../features/RegistrationDates";

function Timeline() {
  return (
    <section id="timeline" className="border-y border-white/20">
      <RegistrationDates />
      <PrizeAndReward />
    </section>
  );
}

export default Timeline;
