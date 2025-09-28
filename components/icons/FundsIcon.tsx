import { IconProps } from '@/lib/types/Icon-type'

export const FundsIcon = ({ size = 24, color = 'currentColor', strokeWidth = 2 }: IconProps) => {
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
			<path d="M2 20h20M5 20V8h4m5 12V4h4" />
		</svg>
	)
}
