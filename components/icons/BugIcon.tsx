import { IconProps } from '@/types/Icon-type'

export function BugIcon({ size = 24, color = 'currentColor', strokeWidth = 2 }: IconProps) {
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
			<rect x="8" y="6" width="8" height="14" rx="4" />
			<path d="M19 7s-1-2-7-2-7 2-7 2v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2z" />
			<line x1="1" y1="9" x2="4" y2="9" />
			<line x1="20" y1="9" x2="23" y2="9" />
			<line x1="1" y1="15" x2="4" y2="15" />
			<line x1="20" y1="15" x2="23" y2="15" />
		</svg>
	)
}