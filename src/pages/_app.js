import Header from "@/component/Header";
import "@/styles/globals.css";
import { Suspense } from "react";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header/>
      {/* suspens는 로딩이 걸려야하는 애들이 존재할 때 */}
      <Suspense fallback={<div>Loading..</div>}>
        <Component {...pageProps} />
      </Suspense>
    </>
  )
}
