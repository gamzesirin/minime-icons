import { IconProps } from '@/types/Icon-type'

export function TruckIcon({ size = 24, color = 'currentColor', strokeWidth = 2 }: IconProps) {
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
			<path d="M10 17h4V5H2v12h3" />
			<path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5" />
			<path d="M14 17h1" />
			<circle cx="7.5" cy="17.5" r="2.5" />
			<circle cx="17.5" cy="17.5" r="2.5" />
		</svg>
	)
}