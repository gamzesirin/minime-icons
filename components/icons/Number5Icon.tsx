import { IconProps } from '@/types/Icon-type'

export const Number5Icon = ({ size = 24, color = 'currentColor', strokeWidth = 2 }: IconProps) => {
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
			<path d="M16 4H8v8c3.333-2 6.667-2 10 0M8 16a4 4 0 1 0 8 0v-4" />
		</svg>
	)
}
