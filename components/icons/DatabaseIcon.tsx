import { IconProps } from '@/lib/types/Icon-type'

export function DatabaseIcon({ size = 24, color = 'currentColor', strokeWidth = 2 }: IconProps) {
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
			<ellipse cx="12" cy="5" rx="9" ry="3" />
			<path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
			<path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
		</svg>
	)
}