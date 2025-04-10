import { IconProps } from '@/types/Icon-type'

export const TranslateIcon = ({ size = 24, color = 'currentColor', strokeWidth = 2 }: IconProps) => {
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
			<path d="M12 2h8a2 2 0 0 1 2 2v8M4 14l8 8M4 14h6m0 0l-2-2m2 2l-2 2" />
			<path d="M8 8h.01M12 8h.01M16 8h.01M7 4h10" />
		</svg>
	)
}
