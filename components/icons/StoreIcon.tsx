import { IconProps } from '@/types/Icon-type'

export function StoreIcon({ size = 24, color = 'currentColor', strokeWidth = 2, variant = 'outline' }: IconProps) {

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
				<path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
				<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
				<path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" fill={color} fillOpacity="0.2" />
				<path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" stroke={color} strokeWidth={strokeWidth} fill="none" />
				<path d="M2 7h20" />
				<path d="M22 7v3a2 2 0 0 1-2 2v0a2.07 2.07 0 0 1-2.17 0 2.07 2.07 0 0 0-2.16 0v0a2.07 2.07 0 0 1-2.17 0 2.07 2.07 0 0 0-2.16 0v0a2.07 2.07 0 0 1-2.17 0 2.07 2.07 0 0 0-2.16 0v0a2.07 2.07 0 0 1-2.17 0A2 2 0 0 1 2 10V7" />
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
			<path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
			<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
			<path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
			<path d="M2 7h20" />
			<path d="M22 7v3a2 2 0 0 1-2 2v0a2.07 2.07 0 0 1-2.17 0 2.07 2.07 0 0 0-2.16 0v0a2.07 2.07 0 0 1-2.17 0 2.07 2.07 0 0 0-2.16 0v0a2.07 2.07 0 0 1-2.17 0 2.07 2.07 0 0 0-2.16 0v0a2.07 2.07 0 0 1-2.17 0A2 2 0 0 1 2 10V7" />
		</svg>
	)
}
