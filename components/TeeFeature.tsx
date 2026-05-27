type TeeFeatureProps = {
  title: string;
  image: string;
  description: string;
};

export default function TeeFeature({
  title,
  image,
  description,
}: TeeFeatureProps) {
  return (
    <section className="md:col-span-6 border-t border-gray-200 pt-10 pb-16">

      <div className="grid grid-cols-1 md:grid-cols-6 gap-8 items-start">

        {/* LEFT COLUMN */}
        <div className="md:col-span-2">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-none sticky top-10">
            {title}
          </h2>
        </div>
          {/* DESCRIPTION */}
          <div className="md:col-span-4 max-w-prose space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>{description}</p>
          </div>
        {/* RIGHT COLUMN */}
        <div className="md:col-span-2 space-y-6">

          {/* IMAGE */}
          <div className="md:col-span-4 overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
            <img
              src={image}
              alt={title}
              className="w-xl"
            />
          </div>



          {/* BUTTON STRIP */}
          <div className="flex flex-wrap gap-3 pt-2">

            <div className="flex gap-2">
              <button className="border border-black px-4 py-2 text-sm hover:bg-black hover:text-white transition">
                S
              </button>

              <button className="border border-black px-4 py-2 text-sm hover:bg-black hover:text-white transition">
                M
              </button>

              <button className="border border-black px-4 py-2 text-sm hover:bg-black hover:text-white transition">
                L
              </button>

              <button className="border border-black px-4 py-2 text-sm hover:bg-black hover:text-white transition">
                XL
              </button>
            </div>

            <button className="bg-black text-white px-6 py-2 text-sm hover:opacity-80 transition">
              Add to Cart
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}