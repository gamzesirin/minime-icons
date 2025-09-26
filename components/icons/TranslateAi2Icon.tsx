import { IconProps } from '@/types/Icon-type'

export const TranslateAi2Icon = ({ size = 24, color = 'currentColor', strokeWidth = 2 }: IconProps) => {
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
			<path d="M2 5h12M2 5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2M2 5v10a2 2 0 0 0 2 2h3" />
			<path d="M15 15l3 3m0 0l3-3m-3 3v-6" />
			<path d="M6 8h.01M10 8h.01M14 8h.01" />
		</svg>
	)
}
