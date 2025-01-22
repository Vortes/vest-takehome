import { Search, Bell } from "lucide-react"
import { CarotDown } from "../icons"

const Navbar = () => {
	return (
		<div className="h-12 flex gap-x-2 items-center">
			<div className="bg-black_secondary w-full flex items-center gap-x-2 px-2 py-4 rounded-sm">
				<Search className="w-4 h-4 text-gray" />
				<p className="uppercase text-gray">search</p>
			</div>
			<div>
				<Bell className="w-5 h-5 text-gray" />
			</div>
			<div className="flex gap-x-2 items-center">
				<p className="uppercase">0xfC...E63d1</p>
				<CarotDown />
			</div>
		</div>
	)
}

export default Navbar
