import { IconProps } from '@/lib/types/Icon-type'

export function ChevronUpIcon({ size = 24, color = 'currentColor', strokeWidth = 2 }: IconProps) {
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
			<polyline points="18 15 12 9 6 15" />
		</svg>
	)
}
