export default function Checkbox({ label, register, ...rest }) {
  return (
    <label className="flex items-center">
      <input
        type="checkbox"
        {...register}
        {...rest}
        className="h-4 w-4 rounded-sm border-gray-300 text-sky-600 focus:ring-sky-500"
      />
      <span className="ml-2 block text-sm text-gray-700 first-letter:uppercase">
        {label}
      </span>
    </label>
  );
}
