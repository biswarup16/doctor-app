import Label from "./Label";
import HelpText from "./HelpText";

export default function TextField({ label, register, ...rest }) {
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
        <input
          type={rest?.type ?? "text"}
          {...register}
          autoComplete="off"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
          placeholder={rest?.placeholder ?? `Enter ${label}`}
        />
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
