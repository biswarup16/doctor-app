export default function Status({ code }) {
  const colors = {
    open: "bg-green-100 text-green-700",
    close: "bg-amber-100 text-amber-700",
  };

  const color = colors[code];

  return (
    <div
      className={`px-2 py-1 ${color} rounded-full text-center text-sm first-letter:uppercase`}
    >
      {code}
    </div>
  );
}
