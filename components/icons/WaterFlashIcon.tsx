import { IconProps } from '@/lib/types/Icon-type'

export const WaterFlashIcon = ({ size = 24, color = 'currentColor', strokeWidth = 2 }: IconProps) => {
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
			<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
			<path d="M13 10l-3 5h4l-3 5" />
		</svg>
	)
}
