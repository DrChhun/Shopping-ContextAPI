import { CheckoutContextProvider } from "@/context/checkout-context";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CheckoutContextProvider>
        <Component {...pageProps} />
      </CheckoutContextProvider>
    </>
  );
}
