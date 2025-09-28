import { IconProps } from '@/types/Icon-type'

export function TabletIcon({ size = 24, color = 'currentColor', strokeWidth = 2, variant = 'outline' }: IconProps) {

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
				<rect x="4" y="3" width="16" height="18" rx="2" ry="2" fill={color} fillOpacity="0.2" />
				<rect x="4" y="3" width="16" height="18" rx="2" ry="2" stroke={color} strokeWidth={strokeWidth} fill="none" />
				<line x1="12" y1="17" x2="12.01" y2="17" />
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
			<rect x="4" y="3" width="16" height="18" rx="2" ry="2" />
			<line x1="12" y1="17" x2="12.01" y2="17" />
		</svg>
	)
}
