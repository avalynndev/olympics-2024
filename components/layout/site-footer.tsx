import Image from "next/image";
import Link from "next/link";
import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";

export const SiteFooter = () => {
  return (
    <div className="mx-auto max-w-6xl rounded-lg shadow-sm lg:mb-4 lg:border">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-2 border-t leading-7 md:grid-cols-3 [&_h5]:text-lg [&_h5]:font-medium [&_li.disabled]:cursor-not-allowed [&_li.disabled]:opacity-50 [&_li]:text-muted-foreground [&_section]:space-y-2 [&_section]:p-4 [&_ul]:space-y-1 [&_ul]:text-sm [&_ul]:leading-7">
        <section className="border-b md:border-b-0 md:border-r">
          <h5>About us</h5>

          <ul>
            <li className="disabled">About</li>
            <li className="disabled">Features</li>
            <li className="disabled">Sports</li>
            <li className="disabled">Download</li>
          </ul>
        </section>

        <section className="border-b md:border-b-0 md:border-r">
          <h5>Community</h5>

          <ul>
            <li>
              <Link href="https://github.com/avalynndev/olympics-2024">
                Github
              </Link>
            </li>

            <li className="disabled">Discord</li>

            <li className="disabled">Careers</li>
            <li className="disabled">Brand</li>
          </ul>
        </section>

        <section className="">
          <h5>Legal</h5>

          <ul>
            <li>
              {" "}
              <Link href={`/privacy`}>Privacy Policy</Link>
            </li>
            <li>
              {" "}
              <Link href={`/terms`}>Terms of Service</Link>
            </li>
          </ul>
        </section>
      </div>
      <div className="border-t p-4">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-0">
          <div className="flex items-center gap-2">
            <Image
              src="/android-chrome-512x512.png"
              alt="Olympics"
              width={32}
              height={32}
              className="rounded-full"
            />
            <h2 className="text-md font-normal">Olympics</h2>
          </div>

          <div className="flex items-center gap-2">
            <p className="text-xs text-muted-foreground">© 2024 avalynndev</p>

            <div className="h-3 border-r" />

            <span className="text-xs text-muted-foreground">
              Data provided by Consumet and Tmdb API
            </span>
          </div>

          <div className="flex items-center gap-2 [&_a]:rounded-full [&_a]:border [&_a]:px-3 [&_a]:py-1 [&_a]:shadow">
            <Link href="https://github.com/avalynndev/olympics-2024">
              <GitHubLogoIcon />
            </Link>

            <Link href="https://x.com/avalynndev">
              <TwitterLogoIcon />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
