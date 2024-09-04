import AdvantageCard from "@/components/advantage_card/advantageCard";
import Advantage1 from "../../../../../public/assets/advantage1.svg";
import Advantage2 from "../../../../../public/assets/advantage2.svg";
import Advantage3 from "../../../../../public/assets/advantage3.svg";
import Advantage4 from "../../../../../public/assets/advantage4.svg";
import Radial3 from "../../../../../public/assets/Rectangle 78.svg";
import Radial4 from "../../../../../public/assets/Rectangle 79.svg";
import MainSection from "@/components/main_section/mainSection";

const Advantages = () => {
  interface IAdvantage {
    icon: string;
    title: string;
    description: string;
  }
  const advantages: IAdvantage[] = [
    {
      icon: Advantage1,
      title: "Experience",
      description:
        "Experience counts is a common saying, and hiring us means hiring professionals who have years of experience to add on to their kitty to get your projects falling at the right place. Also, we have a streamlined project management system to cater to your project requisites. Getting connected with us allows you to browse over a large talent pool who can get your task accomplished within fixed deadlines.",
    },
    {
      icon: Advantage2,
      title: "Dedicated team",
      description:
        "Everyone has their own cup of tea to drink, and thus we do not mix up the different areas of functionality. We have dedicated teams for designing and graphics. While our web developers get the deigning part done, we have our own graphic designing team that handles all the quality imagery part for a successful website.",
    },
    {
      icon: Advantage3,
      title: "Rapid turnaround time",
      description:
        "We aim at delivering quality work within fixed deadlines and thus are committed to delivering solutions when our clients need them without making them wait for it and extend beyond the fixed time frame. We chalk out our plans accordingly and also regularly update our clients regarding the progress to get what you desire. We give ears to your vision",
    },
    {
      icon: Advantage4,
      title: "Competitive pricing",
      description:
        "Pricing is one crucial factor that every business owner considers while hiring a web development company. We are the best in the market and offer competitive pricing to our clients meeting all the demands of the clients with higher levels of efficiency.",
    },
  ];
  return (
    <MainSection radial1={Radial3} radial2={Radial4} isOdd={false}>
      <div className="text-center w-4/5 mx-auto">
        <h2 className="primary-color">Why choose us</h2>
        <h1 className="text-white">for your web development needs?</h1>
        <p className="paragraph-light large-paragraph mt-2">
          We have passion and love for what we do& we don’t believe in cutting
          corners and setting wrong expectations. We aim at improving with each
          passing day and showcase what we actually are in reality, and we do
          not pretend in any circumstances. There are multiple reasons that will
          make you fall for us for availing top-notch web development services.
          Here are a few of them
        </p>
      </div>

      <ul className="flex flex-wrap justify-center gap-2 mt-8">
        {advantages &&
          advantages.map((adv, index) => (
            <li key={index}>
              <AdvantageCard
                cardTitle={adv.title}
                cardIcon={adv.icon}
                cardDescription={adv.description}
              />
            </li>
          ))}
      </ul>
    </MainSection>
  );
};

export default Advantages;
