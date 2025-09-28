import { IconProps } from '@/lib/types/Icon-type'

export function BusIcon({ size = 24, color = 'currentColor', strokeWidth = 2 }: IconProps) {
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
			<path d="M8 6v6" />
			<path d="M15 6v6" />
			<path d="M2 12h19.6" />
			<path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2V10H2v4.2c0 .4.1.8.2 1.2L3 18h3" />
			<circle cx="7" cy="18" r="2" />
			<path d="M9 18h5" />
			<circle cx="16" cy="18" r="2" />
		</svg>
	)
}