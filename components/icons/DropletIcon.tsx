import { IconProps } from '@/types/Icon-type'

export const DropletIcon = ({ size = 24, color = 'currentColor', strokeWidth = 2 }: IconProps) => {
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
			<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0L12 2.69z" />
		</svg>
	)
}
