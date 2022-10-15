import { useState } from "react";
import { UserIcon, XIcon } from "@s/icons";
import { Link } from "@/shared/router.jsx";

export default function SlideMenuDesktop({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen((previousState) => !previousState);
  };

  return (
    <>
      <button onClick={toggle}>
        <UserIcon className="h-6 w-6 text-sky-500" />
      </button>
      <div
        className={`fixed inset-0 z-40 h-full w-full ${
          isOpen ? "" : "invisible"
        }`}
      >
        <div
          className={`absolute inset-0 h-full w-full bg-gray-900 transition-all duration-300 ease-out ${
            isOpen ? "opacity-30" : "opacity-0"
          }`}
          onClick={toggle}
        ></div>
        <div
          className={`absolute right-0 top-0 h-full w-64 bg-white transition-all duration-300 ease-out ${
            isOpen ? "" : "translate-x-full"
          }`}
        >
          <button
            onClick={toggle}
            className="absolute top-0 right-0 mt-3 flex h-8 w-8 items-center justify-center rounded-full bg-sky-500 shadow-lg"
          >
            <XIcon />
          </button>
          <div className="mt-8 bg-white p-10">
            <ul className="space-y-3">
              <li>
                <Link to="orders">My orders</Link>
              </li>
              <li>
                <Link to="/">Chat with Heal counsellor</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
