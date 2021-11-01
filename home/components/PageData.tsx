import { FunctionComponent } from "react";
import Head from "next/head";

import { Page } from "../interfaces/Page";

const PageData: FunctionComponent<Page> = ({
  title,
  description,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      {children}
    </>
  );
};

export default PageData;
