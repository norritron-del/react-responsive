import FullHeading from "@/components/FullHeading";
import SplitTextSection from "@/components/SplitTextSection";
import CaptionSection from "@/components/CaptionSection";

export default function Home() {
  return (
    <main className="bg-white text-black px-8 py-16">

      <section className="
        grid
        grid-cols-1
        md:grid-cols-6
        gap-8
      ">

        <FullHeading />

<SplitTextSection heading="This is a sub-heading that just hangs around over here">

  <p>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
  </p>

  <p>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
  </p>

</SplitTextSection>
        <CaptionSection />

       <SplitTextSection />


      </section>

    </main>
  );
}