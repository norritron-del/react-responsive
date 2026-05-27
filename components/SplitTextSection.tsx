export default function SplitTextSection({
  heading,
  children,
}) {
  return (

    <section className="md:col-span-6">

      {/* TOP LINE */}
      <div className="border-t border-gray-300 mb-8"></div>

      {/* INNER GRID */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-8">

        {/* LEFT */}
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold sticky top-8">
            {heading}
          </h2>
        </div>

        {/* RIGHT */}
        <div className="
          md:col-span-4
          text-lg
          leading-relaxed
          space-y-6
          text-gray-700
          max-w-prose
        ">
          {children}
        </div>

      </div>

    </section>
  );
}

