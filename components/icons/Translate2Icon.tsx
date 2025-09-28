import { IconProps } from '@/lib/types/Icon-type'

export const Translate2Icon = ({ size = 24, color = 'currentColor', strokeWidth = 2 }: IconProps) => {
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
			<path d="M4 5h7M4 5c0-1 .5-2 2-2h5c1.5 0 2 1 2 2M4 5v2" />
			<path d="M14 11.5c0 .685-.55 1.5-1 1.5M9 11.5c0 .685.55 1.5 1 1.5M10 13v4M9 17h2" />
			<path d="M5 9h.01M8 9h.01M11 9h.01" />
		</svg>
	)
}
