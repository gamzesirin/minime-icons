import { IconProps } from '@/lib/types/Icon-type'

export const Number2Icon = ({ size = 24, color = 'currentColor', strokeWidth = 2 }: IconProps) => {
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
			<path d="M8 8a4 4 0 0 1 8 0c0 4-8 3-8 8h8" />
		</svg>
	)
}
