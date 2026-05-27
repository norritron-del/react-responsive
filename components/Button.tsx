type ButtonProps = {
  text: string;
};

export default function Button({
  text,
}: ButtonProps) {
  return (
    <button className="bg-white text-gray-900 px-7 py-2 mx-3 rounded-lg hover:bg-gray-200 transition">
      {text}
    </button>
  );
}