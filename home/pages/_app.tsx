import type { AppProps } from "next/app";

import "../styles/app.scss";
import BaseProvider from "../components/BaseProvider";
import { PageProps } from "../interfaces/PageProps";

interface Props extends AppProps<Partial<PageProps>> {
  pageProps: Partial<PageProps> | undefined;
}

function App({ Component, pageProps }: Props) {
  return (
    <BaseProvider {...pageProps}>
      <Component {...pageProps} />
    </BaseProvider>
  );
}
export default App;
