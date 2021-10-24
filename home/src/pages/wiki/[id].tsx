import type { NextPage } from "next";
import { useRouter } from "next/router";

import PageData from "../../components/PageData";

const Wiki: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <PageData title={`${id}`} description={`${id}`}>
      <p>Wiki: {id}</p>
    </PageData>
  );
};

export default Wiki;
