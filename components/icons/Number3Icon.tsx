import { IconProps } from '@/types/Icon-type'

export const Number3Icon = ({ size = 24, color = 'currentColor', strokeWidth = 2 }: IconProps) => {
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
			<path d="M8 8h8M12 8v8M8 16h8" />
		</svg>
	)
}
