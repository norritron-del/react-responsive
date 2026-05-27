export default function SplitTextSection({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section className="md:col-span-6 grid md:grid-cols-6 gap-8">
      <div className="md:col-span-2">
        <h2 className="text-2xl font-bold sticky top-10">{heading}</h2>
      </div>

      <div className="md:col-span-4 space-y-6 text-lg leading-relaxed prose max-w-3xl">
        {children}
      </div>
    </section>
  );
}