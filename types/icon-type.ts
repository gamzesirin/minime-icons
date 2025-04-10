import { SVGProps } from 'react'

export interface IconProps extends SVGProps<SVGSVGElement> {
	size?: number
	color?: string
	strokeWidth?: number
}

export type Icon = React.FC<IconProps>

export type IconCategory =
	| 'Arrows'
	| 'Interface'
	| 'Communication'
	| 'Business'
	| 'Development'
	| 'Media'
	| 'Social'
	| 'Weather'
	| 'Other'

export interface IconMetadata {
	name: string
	category: IconCategory
	keywords: string[]
}
