'use client'

import { IconProps } from '@/types/Icon-type'
import { GlowingEffect } from './glowing-effect'

interface IconCardProps {
	icon: React.ComponentType<IconProps>
	name: string
	onClick?: () => void
	size?: number
	color?: string
	strokeWidth?: number
}

export function IconCard({
	icon: Icon,
	name,
	onClick,
	size = 24,
	color = 'currentColor',
	strokeWidth = 2
}: IconCardProps) {
	return (
		<button
			onClick={onClick}
			className="group relative p-4 rounded-lg border bg-card hover:bg-accent/50 transition-all duration-300"
		>
			<GlowingEffect
				glow={true}
				disabled={false}
				blur={20}
				spread={60}
				proximity={100}
				inactiveZone={0.5}
				movementDuration={0.5}
				borderWidth={2}
				variant="default"
				className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
			/>
			<div className="flex flex-col items-center relative z-10">
				<div className="mb-2 transition-transform duration-300 group-hover:scale-110">
					<Icon size={size} color={color} strokeWidth={strokeWidth} />
				</div>
				<span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-300">
					{name}
				</span>
			</div>
		</button>
	)
}
