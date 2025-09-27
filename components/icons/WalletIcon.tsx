import { IconProps } from '@/types/Icon-type'

export function WalletIcon({ size = 24, color = 'currentColor', strokeWidth = 2 }: IconProps) {
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
			<path d="M17 14h.01" />
			<path d="M7 7h12a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4 0z" />
			<path d="M5 7V6a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v1" />
		</svg>
	)
}