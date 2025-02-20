'use client'

import * as React from 'react'

import { Copy } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Slider } from '@/components/ui/slider'
import { IconList } from '@/data/icons'
import { toast } from 'sonner'
import { IconData } from '@/data/icons'
import { IconSidebar } from '@/components/sidebar/IconSidebar'
import { IconCard } from '@/components/ui/icon-card'

export default function IconsPage() {
	const [mounted, setMounted] = React.useState(false)
	const [searchQuery, setSearchQuery] = React.useState('')
	const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null)
	const [selectedIcon, setSelectedIcon] = React.useState<IconData | null>(null)
	const [size, setSize] = React.useState(24)
	const [color, setColor] = React.useState('#000000')
	const [strokeWidth, setStrokeWidth] = React.useState(2)

	React.useEffect(() => {
		setMounted(true)
		document.documentElement.removeAttribute('cz-shortcut-listen')
	}, [])

	if (!mounted) {
		return (
			<div className="min-h-screen bg-background">
				<div className="container py-10">
					<div className="max-w-4xl mx-auto space-y-12">
						<div className="h-8 bg-muted rounded animate-pulse" />
					</div>
				</div>
			</div>
		)
	}

	const filteredIcons = IconList.filter((icon) => {
		const matchesSearch =
			icon.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
			icon.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
		const matchesCategory = !selectedCategory || icon.category === selectedCategory
		return matchesSearch && matchesCategory
	})

	const handleCopyCode = async (code: string) => {
		try {
			await navigator.clipboard.writeText(code)
			toast.success('Kod kopyalandı')
		} catch {
			toast.error('Kopyalama başarısız oldu')
		}
	}

	const getIconCode = (icon: IconData, withProps: boolean = false) => {
		if (withProps) {
			return `import { ${icon.name} } from '@minime/icons'\n\n<${icon.name}\n  size={${size}}\n  color="${color}"\n  strokeWidth={${strokeWidth}}\n/>`
		}
		return `import { ${icon.name} } from '@minime/icons'`
	}

	// Tüm ikonları etkileyen global stil
	const globalIconStyle = {
		strokeWidth: strokeWidth
	}

	return (
		<>
			<IconSidebar
				size={size}
				setSize={setSize}
				color={color}
				setColor={setColor}
				strokeWidth={strokeWidth}
				setStrokeWidth={setStrokeWidth}
			/>

			{/* Main Content */}
			<div className="flex-1 overflow-y-auto scrollbar-hide">
				<div className="container py-8">
					<div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
						{filteredIcons.map((icon) => (
							<IconCard
								key={icon.id}
								icon={icon.component}
								name={icon.name}
								onClick={() => setSelectedIcon(icon)}
								size={size}
								color={color}
								strokeWidth={strokeWidth}
							/>
						))}
					</div>
				</div>
			</div>

			{/* Icon Detail Modal */}
			<Dialog open={!!selectedIcon} onOpenChange={() => setSelectedIcon(null)}>
				<DialogContent className="max-w-xl">
					<DialogHeader>
						<DialogTitle>{selectedIcon?.name}</DialogTitle>
					</DialogHeader>
					{selectedIcon && (
						<div className="space-y-6">
							<div className="flex items-center justify-center p-8 bg-accent/50 rounded-lg">
								<selectedIcon.component size={48} color={color} strokeWidth={strokeWidth} />
							</div>

							<div className="space-y-4">
								<div>
									<div className="flex items-center justify-between mb-2">
										<span className="text-sm font-medium">Basit Kullanım</span>
										<Button size="sm" variant="ghost" onClick={() => handleCopyCode(getIconCode(selectedIcon))}>
											<Copy className="h-4 w-4 mr-2" />
											Kopyala
										</Button>
									</div>
									<pre className="p-4 rounded-lg bg-muted font-mono text-sm overflow-x-auto">
										{getIconCode(selectedIcon)}
									</pre>
								</div>

								<div>
									<div className="flex items-center justify-between mb-2">
										<span className="text-sm font-medium">Özelleştirilmiş Kullanım</span>
										<Button size="sm" variant="ghost" onClick={() => handleCopyCode(getIconCode(selectedIcon, true))}>
											<Copy className="h-4 w-4 mr-2" />
											Kopyala
										</Button>
									</div>
									<pre className="p-4 rounded-lg bg-muted font-mono text-sm overflow-x-auto whitespace-pre">
										{getIconCode(selectedIcon, true)}
									</pre>
								</div>
							</div>

							<div className="flex gap-4">
								<div>
									<span className="text-sm font-medium block mb-2">Kategori</span>
									<div className="inline-block px-2 py-1 rounded-md bg-accent text-xs">{selectedIcon.category}</div>
								</div>
								<div className="flex-1">
									<span className="text-sm font-medium block mb-2">Etiketler</span>
									<div className="flex flex-wrap gap-1">
										{selectedIcon.tags.map((tag: string) => (
											<span key={tag} className="inline-block px-2 py-1 rounded-md bg-accent text-xs">
												{tag}
											</span>
										))}
									</div>
								</div>
							</div>
						</div>
					)}
				</DialogContent>
			</Dialog>
		</>
	)
}
