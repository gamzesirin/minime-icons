import { IconProps } from '@/lib/types/Icon-type'

export const MoneyEuroCircleIcon = ({ size = 24, color = 'currentColor', strokeWidth = 2 }: IconProps) => {
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
			<circle cx="12" cy="12" r="10" />
			<path d="M15 8a4 4 0 0 0-4-4M7 12h8M7 12h2a4 4 0 0 0 4 4" />
		</svg>
	)
}
