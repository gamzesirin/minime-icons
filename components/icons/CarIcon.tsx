import { IconProps } from '@/lib/types/Icon-type'

export function CarIcon({ size = 24, color = 'currentColor', strokeWidth = 2 }: IconProps) {
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
			<path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L18 11V8a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v3l-3.16 1.86a1 1 0 0 0-.84.99V16h3m16 0a2 2 0 1 1-4 0m4 0a2 2 0 1 0-4 0M6 16a2 2 0 1 1-4 0m4 0a2 2 0 1 0-4 0" />
		</svg>
	)
}