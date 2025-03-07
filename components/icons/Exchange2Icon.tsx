import { IconProps } from '@/types/Icon-type'

export const Exchange2Icon = ({ size = 24, color = 'currentColor', strokeWidth = 2 }: IconProps) => {
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
			<path d="M4 17h16M4 17l4-4M4 17l4 4M20 7H4m16 0l-4-4m4 4l-4 4" />
		</svg>
	)
}
