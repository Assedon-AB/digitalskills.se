import type { NextPage, GetServerSideProps } from "next";

interface CompetencePageProps {
  competenceId: string;
}

const CompetencePage: NextPage<CompetencePageProps> = ({ competenceId }) => {
  return <article></article>;
};

export default CompetencePage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const competenceId = context.params?.competenceId;

  return {
    props: {
      competenceId,
    },
  };
};
