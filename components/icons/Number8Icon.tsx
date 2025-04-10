import { IconProps } from '@/types/Icon-type'

export const Number8Icon = ({ size = 24, color = 'currentColor', strokeWidth = 2 }: IconProps) => {
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
			<path d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
			<path d="M12 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
		</svg>
	)
}
