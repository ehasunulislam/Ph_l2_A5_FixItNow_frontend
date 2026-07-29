import HomeHero from "./_components/Hero/HomeHero";
import HowItWorks from "./_components/Home/How-it-works/How-it-works";
import QualityStandards from "./_components/Home/QualityStandard/QualityStandard";

export default function homePage() {
  return (
    <div>
      <HomeHero />
      <HowItWorks />
      <QualityStandards />
    </div>
  );
}
