import Spinner from "./Spinner";

export default function SubmitButton({ isSubmitting, children }) {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className="group inline-flex w-full items-center justify-center rounded-lg bg-blue-600 py-2 px-4 text-sm font-semibold text-white hover:bg-blue-500 hover:text-slate-100 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:bg-blue-800 active:text-blue-100 disabled:cursor-not-allowed"
    >
      {isSubmitting ? <Spinner className="h-5 w-5" /> : children ?? "Submit"}
    </button>
  );
}
