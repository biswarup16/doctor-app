import { useState } from "react";
import Label from "./Label";
import HelpText from "./HelpText";
import { LockIcon, UnLockIcon } from "./icons";

export default function PasswordField({ label, register, ...rest }) {
  const [visible, setVisible] = useState(false);

  function toggle(e) {
    e.preventDefault();
    setVisible(!visible);
  }

  return (
    <div className="flex w-full flex-col">
      <label>
        <Label
          label={label}
          isRequired={rest?.required}
          hasError={rest?.error}
        />
        <div className="flex rounded-md shadow-sm">
          <input
            type={visible ? "text" : "password"}
            {...register}
            autoComplete="off"
            className="block w-full flex-1 rounded-none rounded-l-md border-gray-300 focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
            placeholder="Please enter a strong password"
          />
          <button
            onClick={toggle}
            className="inline-flex items-center rounded-r-md border border-l-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500"
          >
            {visible ? (
              <UnLockIcon className="h-6 w-6" />
            ) : (
              <LockIcon className="h-6 w-6" />
            )}
          </button>
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
