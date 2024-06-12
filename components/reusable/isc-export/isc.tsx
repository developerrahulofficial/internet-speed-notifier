"use client";

import React, { useEffect, useState } from "react";
import { ArrowDownToLine, ArrowUpToLine, Wifi, LocateFixed, Tablet } from "lucide-react";
import speedChecker from "internet-speed-checker";

const Isc = () => {
	const [uploadSpeed, setUploadSpeed] = useState<string | null>(null);
	const [downloadSpeed, setDownloadSpeed] = useState<string | null>(null);

	useEffect(() => {
		const download = setInterval(() => {
			const formattedDownloadSpeedString = speedChecker.getFormattedDownloadSpeed();

			setDownloadSpeed(formattedDownloadSpeedString);
		}, 1000);

		const upload = setInterval(() => {
			const formattedUploadSpeedString = speedChecker.getFormattedUploadSpeed();

			setUploadSpeed(formattedUploadSpeedString);
		}, 1000);

		// Cleanup the interval when the component is unmounted
		return () => {
			clearInterval(download);
			clearInterval(upload);
		};
	}, []); // Empty dependency array to run the effect only once on mount

	return (
		<div className="grid lg:flex lg:justify-between gap-10">
			<p className="inline-flex items-center">
				<ArrowDownToLine className="mr-1 w-3 h-auto" />
				{downloadSpeed}
			</p>
			<p className="inline-flex items-center">
				<ArrowUpToLine className="mr-1 w-3 h-auto" />
				{uploadSpeed}
			</p>
			<p className="inline-flex items-center">
				<Wifi className="mr-1 w-3 h-auto" />
				ISP
			</p>

			<p className="inline-flex items-center">
				<LocateFixed className="mr-1 w-3 h-auto" />
				IP
			</p>
			<p className="inline-flex items-center">
				<Tablet className="mr-1 w-3 h-auto" />
				Device
			</p>
		</div>
	);
};

export default Isc;
