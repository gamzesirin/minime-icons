import { IconProps } from '@/types/Icon-type'

export function HardHatIcon({ size = 24, color = 'currentColor', strokeWidth = 2 }: IconProps) {
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
			<path d="M2 18h20" />
			<path d="M10 18V5a6 6 0 0 1 12 0v13" />
			<path d="M4 15s-1-1-1-5 1-5 1-5" />
			<path d="M6 10h.01" />
		</svg>
	)
}