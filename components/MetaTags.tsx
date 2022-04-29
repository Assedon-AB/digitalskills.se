import Head from "next/head";

const MetaTags = ({ title }: { title: string }) => {
	return (
		<Head>
			<title>{title + " - Digitalskills.se"}</title>
			<meta name="title" content={title + " - Digitalskills.se"} />
			<meta
				name="description"
				content="Tillväxtverket och Universitetskanslersämbetet har av regeringen fått i uppdrag att tillsammans analysera och föreslå hur kompetensförsörjningen av digital spetskompetens kan utvecklas både kort- och långsiktigt. Vi ska starta en dialog om samverkan mellan berörda aktörer, i syfte att öka tillgången på digital spetskompetens."
			/>
			<script defer data-domain="digitalskills.se" src="https://plausible.io/js/plausible.js"></script>

			<meta property="og:type" content="website" />
			<meta property="og:url" content="https://digspec-fe.vercel.app/" />
			<meta property="og:title" content={title + " - Digitalskills.se"} />
			<meta
				property="og:description"
				content="Tillväxtverket och Universitetskanslersämbetet har av regeringen fått i uppdrag att tillsammans analysera och föreslå hur kompetensförsörjningen av digital spetskompetens kan utvecklas både kort- och långsiktigt. Vi ska starta en dialog om samverkan mellan berörda aktörer, i syfte att öka tillgången på digital spetskompetens."
			/>
			<meta
				property="og:image"
				content="/digitalspetskompetens-meta.png"
			/>

			<meta property="twitter:card" content="summary_large_image" />
			<meta
				property="twitter:url"
				content="https://digspec-fe.vercel.app/"
			/>
			<meta
				property="twitter:title"
				content={title + " - Digitalskills.se"}
			/>
			<meta
				property="twitter:description"
				content="Tillväxtverket och Universitetskanslersämbetet har av regeringen fått i uppdrag att tillsammans analysera och föreslå hur kompetensförsörjningen av digital spetskompetens kan utvecklas både kort- och långsiktigt. Vi ska starta en dialog om samverkan mellan berörda aktörer, i syfte att öka tillgången på digital spetskompetens."
			/>
			<meta
				property="twitter:image"
				content="/digitalspetskompetens-meta.png"
			/>

			<link
				rel="apple-touch-icon"
				sizes="180x180"
				href="/apple-touch-icon.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href="/favicon-32x32.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href="/favicon-16x16.png"
			/>
			<link rel="manifest" href="/site.webmanifest" />
		</Head>
	);
};

export default MetaTags;
