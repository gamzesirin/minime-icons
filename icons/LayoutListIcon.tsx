import { IconProps } from '@/types/Icon'

export function LayoutListIcon({ size = 24, color = 'currentColor', strokeWidth = 2 }: IconProps) {
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
			<rect x="3" y="3" width="18" height="4" />
			<rect x="3" y="10" width="18" height="4" />
			<rect x="3" y="17" width="18" height="4" />
		</svg>
	)
}
