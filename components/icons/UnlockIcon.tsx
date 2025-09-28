import { IconProps } from '@/lib/types/Icon-type'

export function UnlockIcon({ size = 24, color = 'currentColor', strokeWidth = 2 }: IconProps) {
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
			<rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
			<circle cx="12" cy="16" r="1" />
			<path d="M7 11V7a5 5 0 0 1 7.76-4.07" />
		</svg>
	)
}