export default function FileField(props) {
  return (
    <label className="block">
      <input
        {...props}
        type="file"
        className="block w-full text-sm text-slate-500
      file:mr-4 file:rounded-full file:border-0
      file:bg-sky-50 file:py-2
      file:px-4 file:text-sm
      file:font-semibold file:text-sky-700
      hover:file:bg-sky-100
    "
      />
    </label>
  );
}
