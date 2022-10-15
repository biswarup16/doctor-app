import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import ErrorBoundary from "./ErrorBoundary";

const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      networkMode: NETWORKMODE,
    },
    queries: {
      networkMode: NETWORKMODE,
    },
  },
});

export default function Shell({ basename, children }) {
  return (
    <StrictMode>
      <ErrorBoundary>
        <BrowserRouter basename={basename}>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </BrowserRouter>
      </ErrorBoundary>
    </StrictMode>
  );
}
