import { IconProps } from '@/types/Icon-type'

export const MoneyEuroBoxIcon = ({ size = 24, color = 'currentColor', strokeWidth = 2 }: IconProps) => {
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
			<path d="M15 8a4 4 0 0 0-4-4M7 12h8M7 12h2a4 4 0 0 0 4 4" />
		</svg>
	)
}
