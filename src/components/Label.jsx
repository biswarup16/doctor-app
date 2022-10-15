export default function Label({ label, hasError = false, isRequired = false }) {
  return (
    <span
      className={`block text-sm font-medium first-letter:uppercase ${
        isRequired ? "after:ml-0.5 after:text-pink-700 after:content-['*']" : ""
      }  ${hasError ? "text-pink-700" : "text-gray-700"}`}
    >
      {label}
    </span>
  );
}
