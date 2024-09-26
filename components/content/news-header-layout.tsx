import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

export function NewsHeaderLayout() {
  return (
    <>
      <MaxWidthWrapper className="py-6 md:pb-8 md:pt-10">
        <div className="max-w-screen-sm">
          <h1 className="font-heading text-3xl md:text-4xl">
            News
          </h1>
          <p className="mt-3.5 text-base text-muted-foreground md:text-lg">
            Latest news and updates from Olympics.
          </p>
        </div>
      </MaxWidthWrapper>
    </>
  );
}
