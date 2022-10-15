import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="flex h-screen flex-col items-center justify-center bg-gradient-to-br from-red-300 via-red-400 to-red-50">
          <div className="flex flex-col space-y-10 rounded-xl bg-white p-12 text-center shadow-xl">
            <p className="text-3xl font-bold text-slate-800">Error !</p>
            <p className="text-base text-slate-600">
              An unknown error has occoured. Pleas try reloading the page.
            </p>
            <div className="pt-4 text-center">
              <a
                href="/"
                className="rounded-lg bg-sky-500 px-6 py-2 font-semibold text-white"
              >
                RELOAD
              </a>
            </div>
            <div className="border-t pt-4">
              <p className="text-left text-xs font-semibold text-slate-500">
                Note:- On repeat error please contact support.
              </p>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
