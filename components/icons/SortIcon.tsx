import { IconProps } from '@/lib/types/Icon-type'

export function SortIcon({ size = 24, color = 'currentColor', strokeWidth = 2, variant = 'outline' }: IconProps) {

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
				<path d="M3 6h18" stroke={color} strokeWidth={strokeWidth} strokeOpacity="0.3" />
				<path d="M6 12h12" stroke={color} strokeWidth={strokeWidth} strokeOpacity="0.6" />
				<path d="M9 18h6" stroke={color} strokeWidth={strokeWidth} />
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
			<path d="M3 6h18" />
			<path d="M6 12h12" />
			<path d="M9 18h6" />
		</svg>
	)
}