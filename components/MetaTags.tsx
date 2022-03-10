import Head from "next/head";

const MetaTags = ({title}: {title: string}) => {
    return (
        <Head>
            <title>{title}</title>
        </Head>
    );
}

export default MetaTags;
