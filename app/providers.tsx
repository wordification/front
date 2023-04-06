"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import dynamic from "next/dynamic";

const queryClient = new QueryClient();

const Toaster = dynamic(
  async () => {
    const { Toaster: BaseToaster } = await import("react-hot-toast");
    return BaseToaster;
  },
  {
    ssr: false,
  }
);

const Providers = ({ children }: { children: React.ReactNode }) => (
  <SessionProvider>
    <QueryClientProvider client={queryClient}>
      {children}
      <Toaster />
    </QueryClientProvider>
  </SessionProvider>
);

export default Providers;
