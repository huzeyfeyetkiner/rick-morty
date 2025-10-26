import * as React from "react"
const HamburgerIcon = (props: React.SVGProps<SVGSVGElement>) => (
	<svg
		width={18}
		height={12}
		viewBox="0 0 18 12"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M0 2V0H18V2H0ZM0 7H18V5H0V7ZM0 12H18V10H0V12Z"
			fill="black"
			fillOpacity={0.54}
		/>
	</svg>
)
export default HamburgerIcon
