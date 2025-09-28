import { IconProps } from '@/lib/types/Icon-type'

export const AbIcon = ({ size = 24, color = 'currentColor', strokeWidth = 2 }: IconProps) => {
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
			<path d="M3 7V5h11v2M3 7v10a2 2 0 0 0 2 2h4M3 7h11" />
			<path d="M15 7h6M18 7v10" />
		</svg>
	)
}
