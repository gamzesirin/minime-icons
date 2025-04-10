import { IconProps } from '@/types/Icon-type'

export function PlayIcon({ size = 24, color = 'currentColor', strokeWidth = 2 }: IconProps) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
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
			<polygon points="10 8 16 12 10 16 10 8" />
		</svg>
	)
}
