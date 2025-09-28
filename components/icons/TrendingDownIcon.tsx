import { IconProps } from '@/types/Icon-type'

export function TrendingDownIcon({ size = 24, color = 'currentColor', strokeWidth = 2, variant = 'outline' }: IconProps) {

	if (variant === 'duotone') {
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
				<polyline points="22,17 13.5,8.5 8.5,13.5 2,7" />
				<polyline points="16,17 22,17 22,11" fill={color} fillOpacity="0.2" />
				<polyline points="16,17 22,17 22,11" stroke={color} strokeWidth={strokeWidth} fill="none" />
			</svg>
		)
	}

	// Default outline variant
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
			<polyline points="22,17 13.5,8.5 8.5,13.5 2,7" />
			<polyline points="16,17 22,17 22,11" />
		</svg>
	)
}
