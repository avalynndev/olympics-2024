import { infos } from "@/config/landing";
import BentoGrid from "@/components/sections/bentogrid";
import HeroLanding from "@/components/sections/hero-landing";
import InfoLanding from "@/components/sections/info-landing";
import Powered from "@/components/sections/powered";
import PreviewLanding from "@/components/sections/preview-landing";

export default function IndexPage() {
  return (
    <div className="pb-10">
      <HeroLanding />
      <PreviewLanding />
      <Powered />
      <BentoGrid />
      <InfoLanding data={infos[0]} reverse={true} />
      <InfoLanding data={infos[1]} /> 
    </div>
  );
}
