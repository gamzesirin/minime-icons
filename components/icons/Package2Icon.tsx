import { IconProps } from '@/types/Icon-type'

export function Package2Icon({ size = 24, color = 'currentColor', strokeWidth = 2 }: IconProps) {
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
			<path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
			<path d="M3 9V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2" />
			<line x1="12" y1="5" x2="12" y2="9" />
		</svg>
	)
}