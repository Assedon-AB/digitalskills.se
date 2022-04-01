import type { NextPage } from "next";
import MetaTags from "../components/MetaTags";

const Home: NextPage = () => {
  return (
    <div className=" bg-[#fafafa] w-full h-full ">
    <MetaTags title="Om digitalskills" />
    <main className="max-w-6xl mx-auto px-4 min-h-screen pt-16">
        <article className="md:w-3/5">
      <h1 className="text-4xl mb-2">Om digitalskills.se</h1>
      <p className="mb-4 leading-relaxed tracking-wide">
          <a className="text-blue-500 hover:text-blue-700 hover:underline" target="_blank" rel="noreferrer" href="https://tillvaxtverket.se/">Tillväxtverket</a> och <a className="text-blue-500 hover:text-blue-700 hover:underline" target="_blank" rel="noreferrer" href="https://www.uka.se/">Universitetskanslersämbetet</a> har av regeringen fått i uppdrag att tillsammans analysera och föreslå hur kompetensförsörjningen av digital spetskompetens kan utvecklas både kort- och långsiktigt. Projektet ska starta en dialog om samverkan mellan berörda aktörer, i syfte att öka tillgången på digital spetskompetens. I uppdraget ingår också att så långt det är möjligt säkerställa en förbättrad tillgång till statistik och prognoser över efterfrågan och tillgången på digital spetskompetens på svensk arbetsmarknad. Uppdraget ska slutredovisas till Regeringskansliet senast den 31 oktober 2022. Du kan läsa mer om uppdraget här: <a className="text-blue-500 hover:text-blue-700 hover:underline" target="_blank" rel="noreferrer" href="https://digitalspetskompetens.se/om/">https://digitalspetskompetens.se/om/</a>
      </p>
      <p className="mb-8 leading-relaxed tracking-wide">
          Som en av flera metoder för att nå projektmålen för uppdraget har arbetsgruppen för Digital Spetskompetens tagit fram digitalskills.se. digitalskills.se är ett prognosverktyg som ger både historiska trender samt framskrivningar på digitala kompetenser och yrkestitlar genom att datadrivet analysera jobbannonser från Arbetsförmedlingens platsbank. Syftet med verktyget är att behovsägare, t.ex. anordnare av yrkesutbildning och andra verksamma inom kompetensförsörjningen, kvantitativt och löpande ska kunna följa trender och utvecklingar av arbetsgivares behov inom området.
      </p>
      <h2 className="text-3xl mb-2">Så är digitalskills.se framtaget</h2>

      <h3 className="text-xl mb-2">1. Extrahering av annonser från rådata</h3>
      <p className="mb-4 leading-relaxed tracking-wide">
          Historiska jobbannonser hämtas kvartalsvis från  <a target="_blank" rel="noreferrer" href="https://jobtechdev.se/sv/produkter" className="text-blue-500 hover:text-blue-700 hover:underline">Jobtech Development</a>. Från datasetet extraheras annonser som är kategoriserade som Data/IT enligt Jobtech Development’s taxonomi. Du kan hitta datasetet  <a target="_blank" rel="noreferrer" href="https://jobtechdev.se/sv/produkter/historical-ads" className="text-blue-500 hover:text-blue-700 hover:underline">här</a>.
      </p>

      <h3 className="text-xl mb-2">2. Berikning av annonsdata</h3>
      <p className="mb-4 leading-relaxed tracking-wide">
          Jobtech Developments algoritm  <a target="_blank" rel="noreferrer" href="https://github.com/orgs/Assedon-AB" className="text-blue-500 hover:text-blue-700 hover:underline">JobAd Enrichments</a> anropas via API och tillämpas på aktuella annonser för att plocka fram kompetenser, yrken, information om jobbets geografiska läge samt mjuka kompetenser kopplade till annonsen. Extraheringen av kompetenser tar ej i beaktning avgränsningen till Data/IT och följaktligen behöver resultatet filtreras genom en framtagen ”black list” på kompetensord. Processen har ett tröskelvärde för den statistiska säkerhet som JobAd Enrichments anser sig ha i sin träffsäkerhet för extraheringen av de olika datapunkterna.
      </p>

      <h3 className="text-xl mb-2">3. Framskrivning av data</h3>
      <p className="mb-4 leading-relaxed tracking-wide">
          Annonserna passerar sedan en funktion som med hjälp av öppna bibliotek i Python applicerar algoritmer för prognostisering av tidsserier. Metoden som tillämpas är exponentiell utjämning där tidsseriens säsongsvariation först utreds för att sedan tas i beaktning i framskrivningen. Framskrivningar för 6, 12 och 18 månader tas fram och sparas ned som tidsserier i resultatobjektet. I samma steg sparas även värden för historiska trender på samma intervall.
      </p>

      <h3 className="text-xl mb-2">4. Rensning av data</h3>
      <p className="mb-4 leading-relaxed tracking-wide">
          Efter att framskrivningar har gjorts så rensas framtagna data på en viss uppsättning variabler. Rensning beror på att variabler som använts i framskrivningen och tidigare funktioner inte längre fyller någon funktion i databasen
      </p>

      <h3 className="text-xl mb-2">5. Uppladdning av data</h3>
      <p className="mb-4 leading-relaxed tracking-wide">
          Framtagen data laddas sen upp i en databas genom ett uppladdningsskript. Här laddas varje enskild kompetens och yrke upp genom ett API.
      </p>

      <h3 className="text-xl mb-2">6. Sammankoppling av ID:n</h3>
      <p className="mb-8 leading-relaxed tracking-wide">
          Efter att alla kompetenser och yrken är uppladdade så tilldelas alla ett automatiskt id. För att kunna möjliggöra länkningen mellan kompetenser och yrken så går varje kompetens och yrke genom en process där deras ID adderas under relaterade kompetenser och yrken.
      </p>

      <h2 className="text-3xl mb-2">digitalskills.se är open source!</h2>
      <p className="mb-8 leading-relaxed tracking-wide">digitalskills.se är framtagen som open source och du kan hitta koden <a target="_blank" rel="noreferrer" href="https://github.com/orgs/Assedon-AB" className="text-blue-500 hover:text-blue-700 hover:underline">här</a>. API till tidsseriedata samt prognoser hittar du <a target="_blank" rel="noreferrer" href="https://dig-api-kbrvfttzua-uc.a.run.app/" className="text-blue-500 hover:text-blue-700 hover:underline">här.</a></p>

      <h2 className="text-3xl mb-2">Ansvarsfriskrivning & Viktig information </h2>
      <p className="mb-8 leading-relaxed tracking-wide">Det är viktigt att komma ihåg att prognoser i sin grund är osäkra och bör betraktas med en viss försiktighet. Det finns kvarstående utmaningar med det underliggande datasetet samt den tillämpade metoden som digitalskills.se är byggt på som kan leda till missvisande information eller direkta felaktigheter. Vi rekommenderar därför att du använder digitalskills.se som en av flera metoder i din omvärldsbevakning. Komplettera gärna datadrivna metoder som den här med kvalitativa branschrapporter och intervjuer av arbetsgivare.  Exempel på sådana kan du hitta här:</p>

      <h2 className="text-3xl mb-2">Kontakt</h2>
      <p>Har du frågor kring digitalskills.se, vill lämna förslag på förbättringar eller anmärka fel?</p>
      <p>Ta kontakt via: <a></a></p>
  </article>
    </main>
    </div>
  );
};

export default Home;
