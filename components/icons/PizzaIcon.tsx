import { IconProps } from '@/types/Icon-type'

export function PizzaIcon({ size = 24, color = 'currentColor', strokeWidth = 2 }: IconProps) {
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
			<path d="M15 11h.01" />
			<path d="M11 15h.01" />
			<path d="M16 16h.01" />
			<path d="M2 16l20-6-6 20A2 2 0 0 1 14 32l-12-12a2 2 0 0 1 0-4z" />
		</svg>
	)
}