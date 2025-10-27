import { Location } from "@/types/location"
import Link from "next/link"

function LocationCard({ location }: { location: Location }) {
	return (
		<Link
			href={`/location/${location?.id}`}
			className="p-10 bg-[#FAFAFA] shadow-card-3 flex flex-col items-center justify-center cursor-pointer"
		>
			<h2 className="text-lg text-[#000000DE] font-medium text-center">
				{location?.name}
			</h2>
			<p className="text-sm text-[#00000099] font-medium text-center">
				{location?.type}
			</p>
		</Link>
	)
}

export default LocationCard
