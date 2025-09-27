import { IconProps } from '@/types/Icon-type'

export function BikeIcon({ size = 24, color = 'currentColor', strokeWidth = 2 }: IconProps) {
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
			<circle cx="18.5" cy="17.5" r="3.5" />
			<circle cx="5.5" cy="17.5" r="3.5" />
			<circle cx="15" cy="5" r="1" />
			<path d="M12 17.5V14l-3-3 4-3 2 3h2" />
		</svg>
	)
}