import { IconProps } from '@/types/Icon-type'

export const MoneyDollarCircleIcon = ({ size = 24, color = 'currentColor', strokeWidth = 2 }: IconProps) => {
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
			<path d="M12 7v10M8 13h8M15 10H9c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2z" />
		</svg>
	)
}
