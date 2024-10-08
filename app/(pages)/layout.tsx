import Image from "next/image";

import { sidebarLinks } from "@/config/dashboard";
import { SearchCommand } from "@/components/dashboard/search-command";
import {
  DashboardSidebar,
  MobileSheetSidebar,
} from "@/components/layout/dashboard-sidebar";
import { ModeToggle } from "@/components/layout/mode-toggle";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

export default async function Dashboard({ children }: ProtectedLayoutProps) {
  const filteredLinks = sidebarLinks.map((section) => ({
    ...section,
  }));

  return (
    <div className="relative flex min-h-screen w-full">
      <div 
        className="fixed inset-0 z-[-1] bg-cover bg-center bg-no-repeat opacity-[0.13]"
        style={{
          backgroundImage: "url('/_static/background.jpg')",
          backgroundAttachment: "fixed"
        }}
      />
      <DashboardSidebar links={filteredLinks} />

      <div className="flex flex-1 flex-col">

        <header className="sticky top-0 z-50 flex h-14 px-4 backdrop-blur-sm lg:h-[60px] xl:px-8">
          <MaxWidthWrapper className="flex max-w-7xl items-center gap-x-3 px-0">
            <MobileSheetSidebar links={filteredLinks} />

            <div className="flex w-full justify-end">
              <SearchCommand links={filteredLinks} />
            </div>

            <ModeToggle />
          </MaxWidthWrapper>
        </header>

        <main className="flex-1 p-4 xl:px-8">
          <MaxWidthWrapper className="flex h-full max-w-7xl flex-col gap-4 px-0 lg:gap-6">
            {children}
          </MaxWidthWrapper>
        </main>
      </div>
    </div>
  );
}
