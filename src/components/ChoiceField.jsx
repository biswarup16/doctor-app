import Label from "./Label";
import HelpText from "./HelpText";

export default function ChoiceField({ label, children, ...rest }) {
  return (
    <div className="flex w-full flex-col">
      <fieldset>
        {label && (
          <legend>
            <Label
              label={label}
              isRequired={rest?.required}
              hasError={rest?.error}
            />
          </legend>
        )}

        <div className={`mt-1 flex ${rest?.className ?? "space-x-3"}`}>
          {children}
        </div>
      </fieldset>
      {rest?.error && (
        <HelpText
          error={rest?.error}
          label={label}
        />
      )}
    </div>
  );
}
