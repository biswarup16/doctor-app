export default function HelpText({ label, error }) {
  let message;
  if (error.message) {
    message = error.message;
  } else {
    switch (error.type) {
      case "required":
        if (error.ref.type === "radio") {
          message = `Please select a ${label}`;
        } else if (error.ref.type === "checkbox") {
          message = `Please select ${label}`;
        } else {
          message = `Please enter ${label}`;
        }
        break;
      case "minLength":
        message = `${label} is too short`;
        break;
      case "maxLength":
        message = `${label} is too long`;
        break;
      case "pattern":
        message = `${label} is invalid`;
        break;
    }
  }

  return (
    <p className="mt-2 text-sm text-pink-600 first-letter:uppercase">
      {message}
    </p>
  );
}
