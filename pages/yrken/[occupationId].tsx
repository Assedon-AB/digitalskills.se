import type { NextPage, GetServerSideProps } from "next";

interface OccupationPageProps {
  occupationId: string;
}
const OccupationPage: NextPage<OccupationPageProps> = ({ occupationId }) => {
  return <article></article>;
};

export default OccupationPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const occupationId = context.params?.occupationId;

  return {
    props: {
      occupationId,
    },
  };
};
 