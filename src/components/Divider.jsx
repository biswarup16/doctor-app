export default function Divider({ className, children }) {
  return (
    <div className={`${className ?? ""} flex items-center justify-center`}>
      <span className="h-0.5 w-1/3 bg-neutral-200"></span>
      <span className="mx-3">{children ? children : "or"}</span>
      <span className="h-0.5 w-1/3 bg-neutral-200"></span>
    </div>
  );
}
