import { ModeToggle } from "@/lib/mode-toggler";
import { ArrowUpDown } from "lucide-react";

const Topnav = () => {
	return (
		<section className="sticky top-0 flex justify-between items-center pt-3 lg:pt-5">
			<p className="text-left text-sm lg:text-base inline-flex items-center">
				<ArrowUpDown className="mr-1 w-4 h-auto" /> Internet Speed Checker
			</p>

			<ModeToggle />
		</section>
	);
};

export default Topnav;
