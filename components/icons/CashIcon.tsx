import { IconProps } from '@/lib/types/Icon-type'

export const CashIcon = ({ size = 24, color = 'currentColor', strokeWidth = 2 }: IconProps) => {
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
			<rect x="2" y="6" width="20" height="12" rx="2" />
			<circle cx="12" cy="12" r="4" />
			<path d="M6 10v4" />
			<path d="M18 10v4" />
		</svg>
	)
}
