import { IconProps } from '@/lib/types/Icon-type'

export function SlidersIcon({ size = 24, color = 'currentColor', strokeWidth = 2, variant = 'outline' }: IconProps) {

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
				<line x1="4" y1="21" x2="4" y2="14" />
				<line x1="4" y1="10" x2="4" y2="3" />
				<line x1="12" y1="21" x2="12" y2="12" />
				<line x1="12" y1="8" x2="12" y2="3" />
				<line x1="20" y1="21" x2="20" y2="16" />
				<line x1="20" y1="12" x2="20" y2="3" />
				<circle cx="4" cy="12" r="2" fill={color} fillOpacity="0.2" />
				<circle cx="12" cy="10" r="2" fill={color} fillOpacity="0.2" />
				<circle cx="20" cy="14" r="2" fill={color} fillOpacity="0.2" />
				<circle cx="4" cy="12" r="2" stroke={color} strokeWidth={strokeWidth} fill="none" />
				<circle cx="12" cy="10" r="2" stroke={color} strokeWidth={strokeWidth} fill="none" />
				<circle cx="20" cy="14" r="2" stroke={color} strokeWidth={strokeWidth} fill="none" />
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
			<line x1="4" y1="21" x2="4" y2="14" />
			<line x1="4" y1="10" x2="4" y2="3" />
			<line x1="12" y1="21" x2="12" y2="12" />
			<line x1="12" y1="8" x2="12" y2="3" />
			<line x1="20" y1="21" x2="20" y2="16" />
			<line x1="20" y1="12" x2="20" y2="3" />
			<circle cx="4" cy="12" r="2" />
			<circle cx="12" cy="10" r="2" />
			<circle cx="20" cy="14" r="2" />
		</svg>
	)
}
