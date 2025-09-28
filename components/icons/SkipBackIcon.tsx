import { IconProps } from '@/lib/types/Icon-type'

export function SkipBackIcon({ size = 24, color = 'currentColor', strokeWidth = 2, variant = 'outline' }: IconProps) {

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
				<polygon points="19,20 9,12 19,4" fill={color} fillOpacity="0.2" />
				<line x1="5" y1="19" x2="5" y2="5" fill={color} fillOpacity="0.2" />
				<polygon points="19,20 9,12 19,4" stroke={color} strokeWidth={strokeWidth} fill="none" />
				<line x1="5" y1="19" x2="5" y2="5" stroke={color} strokeWidth={strokeWidth} />
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
			<polygon points="19,20 9,12 19,4" />
			<line x1="5" y1="19" x2="5" y2="5" />
		</svg>
	)
}
