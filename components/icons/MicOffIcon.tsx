import { IconProps } from '@/types/Icon-type'

export function MicOffIcon({ size = 24, color = 'currentColor', strokeWidth = 2 }: IconProps) {
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
			<line x1="1" y1="1" x2="23" y2="23" />
			<path d="M9 9v3a3 3 0 0 0 5.12 2.12L9 9z" />
			<path d="M12 2a3 3 0 0 1 3 3v7.34L12 9.34V2z" />
			<path d="M5 12v2a7 7 0 0 0 14 0v-2" />
			<line x1="12" y1="19" x2="12" y2="23" />
			<line x1="8" y1="23" x2="16" y2="23" />
		</svg>
	)
}