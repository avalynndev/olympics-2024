import { NewsHeaderLayout } from "@/components/content/news-header-layout";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NewsHeaderLayout />
      <MaxWidthWrapper className="pb-16">{children}</MaxWidthWrapper>
    </>
  );
}
