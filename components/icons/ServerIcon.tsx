import { IconProps } from '@/types/Icon-type'

export function ServerIcon({ size = 24, color = 'currentColor', strokeWidth = 2, variant = 'outline' }: IconProps) {

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
				<rect x="2" y="2" width="20" height="8" rx="2" ry="2" fill={color} fillOpacity="0.2" />
				<rect x="2" y="14" width="20" height="8" rx="2" ry="2" fill={color} fillOpacity="0.2" />
				<rect x="2" y="2" width="20" height="8" rx="2" ry="2" stroke={color} strokeWidth={strokeWidth} fill="none" />
				<rect x="2" y="14" width="20" height="8" rx="2" ry="2" stroke={color} strokeWidth={strokeWidth} fill="none" />
				<line x1="6" y1="6" x2="6.01" y2="6" />
				<line x1="6" y1="18" x2="6.01" y2="18" />
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
			<rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
			<rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
			<line x1="6" y1="6" x2="6.01" y2="6" />
			<line x1="6" y1="18" x2="6.01" y2="18" />
		</svg>
	)
}