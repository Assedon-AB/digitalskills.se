const AttentionCard = () => {
	return (
		<div className="flex flex-col p-4 bg-white shadow rounded-lg h-full">
			<div className="flex items-center justify-between">
				<div className="flex flex-col ml-3 mr-8">
					<h2 className="font-medium text-sm leading-relaxed">
						Data hämtad senast
					</h2>
					<p className="text-xs text-gray-600 leading-relaxed mt-1">
						Ingående data kommer från Arbetsförmedlingens dataset
						för{" "}
						<a
							href="https://jobtechdev.se/sv/komponenter/historical-ads"
							rel="noreferrer"
							target="_blank"
							className="text-[#004A98] hover:text-blue-900 underline"
						>
							historiska jobbannonser från Platsbanken
						</a>
						. Hämtades senast 2022-11-10 och sträcker sig mellan
						2006-01-01 till 2022-09-30.
					</p>
					<h2 className="font-medium text-sm leading-relaxed pt-4">
						Så tolkar du tabellen
					</h2>
					<p className="text-xs text-gray-600 leading-relaxed mt-1">
						<span className="font-bold">Annonser: </span> Antal
						unika annonser där kompetensen eller yrkestiteln
						förekommer under senast uppmätta månad i ingående data.
					</p>
					<p className="text-xs text-gray-600 leading-relaxed mt-1">
						<span className="font-bold">Trend: </span> Den
						historiska förändringen, i procent, över valt
						tidsintervall jämfört med senast uppmätta månadsvärde i
						ingående data.
					</p>
					<p className="text-xs text-gray-600 leading-relaxed mt-1">
						<span className="font-bold">Prognos: </span> En beräknad
						framskrivning i procent, över valt tidsintervall, med
						start från senast uppmätta månadsvärde i ingående data.
						Framtagen med metoden exponentiell utjämning.
					</p>
				</div>
			</div>
		</div>
	);
};

export default AttentionCard;
