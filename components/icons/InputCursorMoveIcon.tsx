import { IconProps } from '@/lib/types/Icon-type'

export const InputCursorMoveIcon = ({ size = 24, color = 'currentColor', strokeWidth = 2 }: IconProps) => {
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
			<path d="M5 9h14M5 15h14" />
			<path d="M13 5l4 4-4 4M11 19l-4-4 4-4" />
		</svg>
	)
}
