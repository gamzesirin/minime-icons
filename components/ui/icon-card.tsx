'use client'

import { useState } from 'react'
import { Icon } from '@/types/Icon-type'
import { copyToClipboard } from '@/utils/copyToClipboard'

interface IconCardProps {
	name: string
	icon: Icon
	size?: number
	color?: string
	strokeWidth?: number
	onClick?: () => void
}

export function IconCard({
	name,
	icon: IconComponent,
	size = 24,
	color = 'currentColor',
	strokeWidth = 2,
	onClick
}: IconCardProps) {
	const [copied, setCopied] = useState(false)

	const handleClick = async () => {
		if (onClick) {
			onClick()
		} else {
			await copyToClipboard(`import { ${name} } from 'minime-icons'`)
			setCopied(true)
			setTimeout(() => setCopied(false), 2000)
		}
	}

	return (
		<div
			className="p-4 border rounded-lg flex flex-col items-center justify-center hover:border-primary transition-colors dark:border-gray-700 cursor-pointer group"
			onClick={handleClick}
		>
			<div className="relative">
				<IconComponent
					size={size}
					color={color}
					strokeWidth={strokeWidth}
					className="mb-2 group-hover:text-primary transition-colors"
				/>
				{copied && (
					<div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-primary text-white px-2 py-1 rounded text-xs">
						Kopyalandı!
					</div>
				)}
			</div>
			<span className="text-sm text-center group-hover:text-primary transition-colors w-full truncate px-1" title={name}>{name}</span>
		</div>
	)
}
