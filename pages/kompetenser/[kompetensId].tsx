import type { NextPage } from "next";

const CompetencePage: NextPage = ({ kompetensId }: { kompetensId: string }) => {
  return <article></article>;
};

export default CompetencePage;


export async function getServerSideProps(context: any) {
    const { kompetensId } = context.params;
  
    return {
      props: {
        kompetensId,
      },
    };
  }
  