import { IconProps } from '@/types/Icon-type'

export function SkipForwardIcon({ size = 24, color = 'currentColor', strokeWidth = 2, variant = 'outline' }: IconProps) {

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
				<polygon points="5,4 15,12 5,20" fill={color} fillOpacity="0.2" />
				<line x1="19" y1="5" x2="19" y2="19" fill={color} fillOpacity="0.2" />
				<polygon points="5,4 15,12 5,20" stroke={color} strokeWidth={strokeWidth} fill="none" />
				<line x1="19" y1="5" x2="19" y2="19" stroke={color} strokeWidth={strokeWidth} />
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
			<polygon points="5,4 15,12 5,20" />
			<line x1="19" y1="5" x2="19" y2="19" />
		</svg>
	)
}
