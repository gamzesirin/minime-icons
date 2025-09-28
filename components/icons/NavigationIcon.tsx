import { IconProps } from '@/lib/types/Icon-type'

export function NavigationIcon({ size = 24, color = 'currentColor', strokeWidth = 2 }: IconProps) {
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
			<polygon points="3 11 22 2 13 21 11 13 3 11" />
		</svg>
	)
}