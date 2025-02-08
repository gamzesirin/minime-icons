import { CSSProperties } from 'react'

export interface IconProps {
	size?: number
	color?: string
	strokeWidth?: number
	style?: CSSProperties
	className?: string
}

export type Icon = React.FC<IconProps>
