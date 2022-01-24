import type { NextPage } from "next";

const OccupationPage: NextPage = ({ yrkesId }: { yrkesId: string }) => {
  return <article></article>;
};

export default OccupationPage;


export async function getServerSideProps(context: any) {
    const { yrkesId } = context.params;
  
    return {
      props: {
        yrkesId,
      },
    };
  }
  