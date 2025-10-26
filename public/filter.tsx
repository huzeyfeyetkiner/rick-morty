import * as React from "react"
const FilterIcon = (props: React.SVGProps<SVGSVGElement>) => (
	<svg
		width={19}
		height={12}
		viewBox="0 0 19 12"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M0 0V2H18.5902V0H0ZM7.22951 12H11.3607V10H7.22951V12ZM15.4918 7H3.09836V5H15.4918V7Z"
			fill="black"
			fillOpacity={0.54}
		/>
	</svg>
)
export default FilterIcon
