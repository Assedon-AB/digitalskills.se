import Link from "next/link";

const Footer = () => {
	return (
		<footer className="bg-[#fafafa] p-8">
			<p className="text-center mb-4">
				Har du hittat en bugg eller har förslag på förbättringar?{" "}
				<a
					href="mailto:fred@assedon.se?subject=Bugg eller förslag digitalskills.se"
					className="underline hover:text-blue-500"
				>
					Kontakta oss
				</a>
			</p>
			<div className="mx-auto max-w-6xl flex flex-col md:flex-row justify-between">
				<div className="md:w-3/5 md:mr-8">
					<p className="text-xl mb-2">{"digitalskills.se"}</p>
					<p className="leading-relaxed">
						Digitalskills.se är ett prognosverktyg som ger både
						historiska trender samt framskrivningar på digitala
						kompetenser och yrkestitlar genom att datadrivet
						analysera jobbannonser från Arbetsförmedlingens
						platsbank. Digitalskills.se är framtagen inom
						regeringsuppdraget Digital Spetskompetens som utförs av
						Tillväxtverket och Universitetskanslersämbetet (UKÄ).
					</p>
				</div>
				<ul className="md:w-2/5 mt-4">
					<li className="hover:text-[#004A98]">
						<Link href="/">Hem</Link>
					</li>
					<li className="hover:text-[#004A98]">
						<Link href="/kompetenser">Kompetenser</Link>
					</li>
					<li className="hover:text-[#004A98]">
						<Link href="/yrken">Yrken</Link>
					</li>
					<li className="hover:text-[#004A98]">
						<Link href="/om-digitalskills">
							Om digitalskills.se
						</Link>
					</li>
					<li className="hover:text-[#004A98]">
						<Link href="https://dig-api-kbrvfttzua-uc.a.run.app/">
							<a target="_blank">API</a>
						</Link>
					</li>
					<li className="hover:text-[#004A98]">
						<Link href="https://github.com/orgs/Assedon-AB">
							<a target="_blank">Github</a>
						</Link>
					</li>
				</ul>
			</div>
			<p className="text-center text-sm">Publicerades 2022-04-29</p>
		</footer>
	);
};

export default Footer;
