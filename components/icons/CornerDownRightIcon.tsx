import { IconProps } from '@/types/Icon-type'

export function CornerDownRightIcon({ size = 24, color = 'currentColor', strokeWidth = 2 }: IconProps) {
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
			<polyline points="15 10 20 15 15 20" />
			<path d="M4 4v7a4 4 0 0 0 4 4h12" />
		</svg>
	)
}