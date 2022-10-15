import HelpText from "./HelpText";
import Label from "./Label";

export default function PhoneField({ label, register, ...rest }) {
  return (
    <div className="flex w-full flex-col">
      <label>
        <Label
          label={label}
          isRequired={rest?.required}
          hasError={rest?.error}
        />
        <div className="flex rounded-md shadow-sm">
          <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
            +91
          </span>
          <input
            type="text"
            {...register}
            autoComplete="off"
            className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
            placeholder={rest?.placeholder ?? `Enter ${label}`}
          />
        </div>
      </label>
      {rest?.error && (
        <HelpText
          label={label}
          error={rest.error}
        />
      )}
    </div>
  );
}
