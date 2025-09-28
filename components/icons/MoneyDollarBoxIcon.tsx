import { IconProps } from '@/lib/types/Icon-type'

export const MoneyDollarBoxIcon = ({ size = 24, color = 'currentColor', strokeWidth = 2 }: IconProps) => {
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
			<path d="M12 7v10M8 13h8M15 10H9c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2z" />
		</svg>
	)
}
