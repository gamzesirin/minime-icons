import { IconProps } from '@/types/Icon-type'

export function ApiIcon({ size = 24, color = 'currentColor', strokeWidth = 2 }: IconProps) {
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
			<path d="M14 12l-4 4" />
			<path d="M10 8l4 4" />
			<path d="M5 12h1.5" />
			<path d="M17.5 12H19" />
			<circle cx="12" cy="12" r="10" />
		</svg>
	)
}