import { format, parseISO } from "date-fns";

export function Date({ value }) {
  const dateValue = value ? parseISO(value) : null;
  return (
    dateValue && <time dateTime={value}>{format(dateValue, "dd/MM/yyyy")}</time>
  );
}

export function DateTime({ value }) {
  const dateTimeValue = value ? parseISO(value) : null;
  return (
    dateTimeValue && (
      <time dateTime={value}>{format(dateTimeValue, "dd/MM/yyyy h:mm a")}</time>
    )
  );
}
