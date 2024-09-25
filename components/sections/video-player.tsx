import { BorderBeam } from "@/components/ui/border-beam";
import HeroVideoDialog from "@/components/ui/hero-video-dialog";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

export default function VideoPlayer() {
  return (
    <div className="pb-6 sm:pb-16">
      <MaxWidthWrapper>
        <div className="relative aspect-video rounded-xl md:bg-muted/30 md:p-3.5 md:ring-1 md:ring-inset md:ring-border">
          <div className="">
            <HeroVideoDialog
              animationStyle="from-center"
              videoSrc="https://www.youtube.com/embed/6c9hFGtSUF8?si=Q0PM6t-lCsjUAzqr"
              thumbnailSrc="/_static/thumbnail.png"
              thumbnailAlt="Hero Video"
            />
          </div>
          <BorderBeam size={250} duration={12} />
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
