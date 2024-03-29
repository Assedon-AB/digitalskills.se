import { LinkIcon } from "@heroicons/react/outline";
import { useEffect, useState, MouseEvent } from "react";

import { DigspecData } from "../interfaces/Digspec";
import { transformLink } from "../lib/helpers";

interface FullTableListRowProps {
	category: string;
	data: DigspecData;
	callback: (arg: any) => void;
	compareList: string[];
	showModal: () => void;
}

const Checkbox = ({
	onClick,
	checked,
	label,
}: {
	onClick: (event: MouseEvent<HTMLInputElement>) => void;
	checked: boolean;
	label: string;
}) => {
	return (
		<input
			type="checkbox"
			className="h-6 w-6 border-2 border-blue-500 rounded-md focus:outline-none focus:ring"
			aria-label={label}
			onClick={onClick}
			checked={checked}
		/>
	);
};

const FullTableListRow = ({
	data,
	category,
	callback,
	compareList,
	showModal,
}: FullTableListRowProps) => {
	const [checked, setChecked] = useState<boolean>(false);

	useEffect(() => {
		setChecked(false);
	}, [compareList]);

	if (data.num) {
		return (
			<tr
				key={data._id}
				className="focus:outline-none focus:ring focus:ring-violet-300"
			>
				<td className="px-6 py-4">
					<div className="flex items-center">
						<div className="ml-0">
							<div className="text-xs font-medium text-gray-900 w-28 capitalize hover:text-blue-500">
								<a
									target="_blank"
									rel="noreferrer"
									href={`/${category}/${transformLink(
										data.name,
										data._id
									)}`}
								>
									<div className="flex flex row">
										{data.name}
										<div className="flex items-center">
											<div>
												<LinkIcon
													className="ml-1  h-3 w-3 "
													aria-hidden="true"
												></LinkIcon>
											</div>
										</div>
									</div>
								</a>
							</div>
						</div>
					</div>
				</td>
				<td className="px-6 py-4 whitespace-nowrap">
					<div className="text-xs text-gray-900">{data.num}</div>
				</td>
				<td className="px-6 py-4 whitespace-nowrap">
					<span
						className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
							data.trend_percentages.month_6 > 0
								? "bg-green-100 text-green-800"
								: "bg-red-100 text-red-800"
						}`}
					>
						{data.trend_percentages?.month_6 != null
							? `${data.trend_percentages.month_6.toFixed(1)} %`
							: null}
					</span>
				</td>
				<td className="px-6 py-4 whitespace-nowrap">
					<span
						className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
							data.trend_percentages?.month_12 > 0
								? "bg-green-100 text-green-800"
								: "bg-red-100 text-red-800"
						}`}
					>
						{data.trend_percentages?.month_12 != null
							? `${data.trend_percentages.month_12.toFixed(1)} %`
							: null}
					</span>
				</td>
				<td className="px-6 py-4 whitespace-nowrap">
					<span
						className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
							data.trend_percentages.month_18 > 0
								? "bg-green-100 text-green-800"
								: "bg-red-100 text-red-800"
						}`}
					>
						{data.trend_percentages?.month_18 != null
							? `${data.trend_percentages.month_18.toFixed(1)} %`
							: null}
					</span>
				</td>
				<td className="px-6 py-4 whitespace-nowrap">
					<span
						className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
							data.prediction_percentages.month_6 > 0
								? "bg-green-100 text-green-800"
								: "bg-red-100 text-red-800"
						}`}
					>
						{data.prediction_percentages.month_6 != null
							? `${data.prediction_percentages.month_6.toFixed(
									1
							  )}%`
							: null}
					</span>
				</td>
				<td className="px-6 py-4 whitespace-nowrap">
					<span
						className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
							data.prediction_percentages.month_12 > 0
								? "bg-green-100 text-green-800"
								: "bg-red-100 text-red-800"
						}`}
					>
						{data.prediction_percentages.month_12 != null
							? `${data.prediction_percentages.month_12.toFixed(
									1
							  )}%`
							: null}
					</span>
				</td>
				<td className="px-6 py-4 whitespace-nowrap">
					<span
						className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
							data.prediction_percentages.month_18 > 0
								? "bg-green-100 text-green-800"
								: "bg-red-100 text-red-800"
						}`}
					>
						{data.prediction_percentages.month_18 != null
							? `${data.prediction_percentages.month_18.toFixed(
									1
							  )} %`
							: null}
					</span>
				</td>
				<td className="px-6 py-4 whitespace-nowrap">
					<Checkbox
						onClick={() => {
							if (
								compareList.length < 5 ||
								(compareList.length == 5 && checked)
							) {
								if (checked) {
									setChecked(false);
									const index: number = compareList.indexOf(
										data._id,
										0
									);
									if (index > -1) {
										compareList.splice(index, 1);
									}
									callback(compareList);
								} else {
									setChecked(true);
									compareList.push(data._id);
									callback(compareList);
								}
							} else {
								showModal();
							}
						}}
						checked={checked}
						label={`Jämför ${data.name} som kompetens`}
					></Checkbox>
				</td>
			</tr>
		);
	} else {
		return null;
	}
};

export default FullTableListRow;
