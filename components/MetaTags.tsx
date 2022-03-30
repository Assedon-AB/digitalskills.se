import Head from "next/head";

const MetaTags = ({title}: {title: string}) => {
    return (
        <Head>
            <title>{title + " - Digitalspetskompetens"}</title>
            <meta name="title" content={title + " - Digitalspetskompetens"} />
            <meta name="description" content="Tillväxtverket och Universitetskanslersämbetet har av regeringen fått i uppdrag att tillsammans analysera och föreslå hur kompetensförsörjningen av digital spetskompetens kan utvecklas både kort- och långsiktigt. Vi ska starta en dialog om samverkan mellan berörda aktörer, i syfte att öka tillgången på digital spetskompetens."/>

            <meta property="og:type" content="website"/>
            <meta property="og:url" content="https://digspec-fe.vercel.app/"/>
            <meta property="og:title" content={title + " - Digitalspetskompetens"}/>
            <meta property="og:description" content="Tillväxtverket och Universitetskanslersämbetet har av regeringen fått i uppdrag att tillsammans analysera och föreslå hur kompetensförsörjningen av digital spetskompetens kan utvecklas både kort- och långsiktigt. Vi ska starta en dialog om samverkan mellan berörda aktörer, i syfte att öka tillgången på digital spetskompetens."/>
            <meta property="og:image" content="/digitalspetskompetens-meta.png"/>

            <meta property="twitter:card" content="summary_large_image"/>
            <meta property="twitter:url" content="https://digspec-fe.vercel.app/"/>
            <meta property="twitter:title" content={title + " - Digitalspetskompetens"}/>
            <meta property="twitter:description" content="Tillväxtverket och Universitetskanslersämbetet har av regeringen fått i uppdrag att tillsammans analysera och föreslå hur kompetensförsörjningen av digital spetskompetens kan utvecklas både kort- och långsiktigt. Vi ska starta en dialog om samverkan mellan berörda aktörer, i syfte att öka tillgången på digital spetskompetens."/>
            <meta property="twitter:image" content="/digitalspetskompetens-meta.png"/>

        </Head>
    );
}

export default MetaTags;
