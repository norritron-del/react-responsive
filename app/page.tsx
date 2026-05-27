import FullHeading from "@/components/FullHeading";
import SplitTextSection from "@/components/SplitTextSection";
import CaptionSection from "@/components/CaptionSection";

export default function Home() {
  return (
    <main className="bg-white text-black px-8 py-16">
      <section
        className="
          grid
          grid-cols-1
          md:grid-cols-6
          gap-8
        "
      >
        <FullHeading />

        <SplitTextSection heading="This is a sub-heading that just hangs around over here">
          <p>
            is this working?
          </p>

          <p>
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text.
          </p>
        </SplitTextSection>

        <CaptionSection />
      </section>
    </main>
  );
}