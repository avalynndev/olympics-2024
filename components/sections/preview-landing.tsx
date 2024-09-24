import { BorderBeam } from "@/components/ui/border-beam";

import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";

import { MediaPlayer, MediaProvider, Poster } from "@vidstack/react";
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";

import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

export default function PreviewLanding() {
  return (
    <div className="pb-6 sm:pb-16">
      <MaxWidthWrapper>
        <div className="relative aspect-video rounded-xl md:bg-muted/30 md:p-3.5 md:ring-1 md:ring-inset md:ring-border">
          <div className="">
            <MediaPlayer
              aspectRatio="16/9"
              src="youtube/6c9hFGtSUF8"
            >
              <MediaProvider>
                <Poster
                  className="absolute inset-0 block size-full rounded-md bg-black opacity-0 transition-opacity data-[visible]:opacity-100"
                  src="/_static/thumbnail.png"
                  alt="2024 Olympics Video"
                />
              </MediaProvider>
              <DefaultVideoLayout icons={defaultLayoutIcons} />
            </MediaPlayer>
          </div>
          <BorderBeam size={250} duration={12} />
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
