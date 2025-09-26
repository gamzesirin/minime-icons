import { IconProps } from '@/types/Icon-type'

export const Number9Icon = ({ size = 24, color = 'currentColor', strokeWidth = 2 }: IconProps) => {
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
			<path d="M8 4h8l4 8-4 8H8l-4-8 4-8z" />
			<path d="M12 8v8" />
		</svg>
	)
}
