export default function Radio({ label, register, ...rest }) {
  return (
    <label className="flex items-center">
      <input
        type="radio"
        {...register}
        {...rest}
        className="h-4 w-4 border-gray-300 text-sky-600 focus:ring-sky-500"
      />
      <span className="ml-2 block text-sm text-gray-700 first-letter:uppercase">
        {label}
      </span>
    </label>
  );
}
