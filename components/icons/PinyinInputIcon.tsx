import { IconProps } from '@/types/Icon-type'

export const PinyinInputIcon = ({ size = 24, color = 'currentColor', strokeWidth = 2 }: IconProps) => {
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
			<rect x="2" y="4" width="20" height="16" rx="2" />
			<path d="M8 10h8M12 10v6" />
		</svg>
	)
}
