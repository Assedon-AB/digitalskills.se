import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#fafafa] p-8">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row justify-between">
        <div className="md:w-3/5 md:mr-8">
          <p className="text-xl mb-2">{"Digitalskills.se"}</p>
          <p className="leading-relaxed">
            Tillväxtverket och Universitetskanslersämbetet har av regeringen
            fått i uppdrag att tillsammans analysera och föreslå hur
            kompetensförsörjningen av digital spetskompetens kan utvecklas både
            kort- och långsiktigt. Vi ska starta en dialog om samverkan mellan
            berörda aktörer, i syfte att öka tillgången på digital
            spetskompetens.
          </p>
        </div>
        <ul className="md:w-2/5 mt-4">
          <li className="hover:text-blue-500">
            <Link href="/">Hem</Link>
          </li>
          <li className="hover:text-blue-500">
            <Link href="/kompetenser">Kompetenser</Link>
          </li>
          <li className="hover:text-blue-500">
            <Link href="/yrken">Yrken</Link>
          </li>
          <li className="hover:text-blue-500">
            <Link href="/om-digspec">Om digitalskills</Link>
          </li>
          <li className="hover:text-blue-500">
            <Link href="https://dig-api-kbrvfttzua-uc.a.run.app/">API</Link>
          </li>
          <li className="hover:text-blue-500">
            <Link href="https://github.com/orgs/Assedon-AB/dashboard">Github</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
