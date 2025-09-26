import { IconProps } from '@/types/Icon-type'

export const SwapBoxIcon = ({ size = 24, color = 'currentColor', strokeWidth = 2 }: IconProps) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			stroke={color}
			strokeWidth={strokeWidth}
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<rect x="2" y="2" width="20" height="20" rx="2" />
			<path d="M7 15l5-5 5 5M7 9l5 5 5-5" />
		</svg>
	)
}
