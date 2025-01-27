import { CSSProperties } from 'react'

export interface IconProps {
	size?: number
	color?: string
	style?: CSSProperties
}

export type Icon = React.FC<IconProps>
