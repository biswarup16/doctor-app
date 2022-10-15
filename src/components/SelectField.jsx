import Label from "./Label";
import HelpText from "./HelpText";

export default function SelectField({ label, register, children, ...rest }) {
  return (
    <div className="flex w-full flex-col">
      <label>
        {label && (
          <Label
            label={label}
            isRequired={rest?.required}
            hasError={rest?.error}
          />
        )}
        <select
          autoComplete="off"
          {...register}
          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
        >
          <option value="">{`Select ${label}`}</option>
          {children}
        </select>
      </label>
      {rest?.error && (
        <HelpText
          error={rest?.error}
          label={label}
        />
      )}
    </div>
  );
}
