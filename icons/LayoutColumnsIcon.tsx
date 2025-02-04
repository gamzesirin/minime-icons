import { IconProps } from '@/types/Icon'

export function LayoutColumnsIcon({ size = 24, color = 'currentColor', strokeWidth = 2 }: IconProps) {
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
			<rect x="3" y="3" width="7" height="18" />
			<rect x="14" y="3" width="7" height="18" />
		</svg>
	)
}
