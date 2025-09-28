import { IconProps } from '@/types/Icon-type'

export function TrainIcon({ size = 24, color = 'currentColor', strokeWidth = 2, variant = 'outline' }: IconProps) {

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
				<rect x="4" y="4" width="16" height="16" rx="2" fill={color} fillOpacity="0.2" />
				<rect x="4" y="4" width="16" height="16" rx="2" stroke={color} strokeWidth={strokeWidth} fill="none" />
				<line x1="4" y1="12" x2="20" y2="12" />
				<line x1="12" y1="4" x2="12" y2="20" />
				<circle cx="8.5" cy="8.5" r="0.5" fill={color} />
				<circle cx="15.5" cy="8.5" r="0.5" fill={color} />
				<circle cx="8.5" cy="15.5" r="0.5" fill={color} />
				<circle cx="15.5" cy="15.5" r="0.5" fill={color} />
				<path d="m8.5 21 1.5-1.5L8.5 18" />
				<path d="m15.5 21-1.5-1.5 1.5-1.5" />
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
			<rect x="4" y="4" width="16" height="16" rx="2" />
			<line x1="4" y1="12" x2="20" y2="12" />
			<line x1="12" y1="4" x2="12" y2="20" />
			<circle cx="8.5" cy="8.5" r="0.5" fill={color} />
			<circle cx="15.5" cy="8.5" r="0.5" fill={color} />
			<circle cx="8.5" cy="15.5" r="0.5" fill={color} />
			<circle cx="15.5" cy="15.5" r="0.5" fill={color} />
			<path d="m8.5 21 1.5-1.5L8.5 18" />
			<path d="m15.5 21-1.5-1.5 1.5-1.5" />
		</svg>
	)
}
