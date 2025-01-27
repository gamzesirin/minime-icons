import React from 'react'
import { Icon } from '@/types/Icon'

interface IconGridProps {
	icons: Icon[]
	size?: number
	color?: string
	strokeWidth?: number
}

export function IconGrid({ icons, size = 24, color = 'currentColor', strokeWidth = 2 }: IconGridProps) {
	return (
		<div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
			{icons.map((icon) => {
				const IconComponent = icon.component
				return (
					<div key={icon.id} className="flex flex-col items-center p-2">
						<div className="flex items-center justify-center w-12 h-12">
							<IconComponent size={size} color={color} strokeWidth={strokeWidth} />
						</div>
						<span className="mt-2 text-xs text-center">{icon.name}</span>
					</div>
				)
			})}
		</div>
	)
}
