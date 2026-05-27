type HeroProps = {
  largetext: string;
  description: string;
};

export default function Hero({
  largetext,
  description,
}: HeroProps) {
  return (
    <div className="w-full px-20 py-30 text-left text-white">
      <h1 className="text-6xl font-bold mb-6">
        {largetext}
      </h1>

      <p className="text-3xl max-w-xl">
        {description}
      </p>
    </div>
  );
}