import { IconProps } from '@/lib/types/Icon-type'

export function ToggleRightIcon({ size = 24, color = 'currentColor', strokeWidth = 2, variant = 'outline' }: IconProps) {

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
				<rect x="1" y="5" width="22" height="14" rx="7" ry="7" fill={color} fillOpacity="0.2" />
				<circle cx="16" cy="12" r="3" fill={color} fillOpacity="0.3" />
				<rect x="1" y="5" width="22" height="14" rx="7" ry="7" stroke={color} strokeWidth={strokeWidth} fill="none" />
				<circle cx="16" cy="12" r="3" stroke={color} strokeWidth={strokeWidth} fill="none" />
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
			<rect x="1" y="5" width="22" height="14" rx="7" ry="7" />
			<circle cx="16" cy="12" r="3" />
		</svg>
	)
}