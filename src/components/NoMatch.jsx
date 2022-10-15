import { Link } from "react-router-dom";

export default function NoMatch() {
  return (
    <div className="flex h-full items-center justify-center bg-slate-100">
      <div className="flex flex-col space-y-2 rounded-lg border bg-white p-8">
        <p className="text-2xl font-bold">Page not found!</p>
        <Link
          to="/"
          className="mt-3  border-t pt-3 text-center font-bold text-sky-500"
        >
          Go back to home
        </Link>
      </div>
    </div>
  );
}
