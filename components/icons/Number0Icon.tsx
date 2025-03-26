import { IconProps } from '@/types/Icon-type'

export const Number0Icon = ({ size = 24, color = 'currentColor', strokeWidth = 2 }: IconProps) => {
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
			<ellipse cx="12" cy="12" rx="8" ry="6" />
		</svg>
	)
}
