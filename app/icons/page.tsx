'use client'

import * as React from 'react'
import { HomeIcon } from '@/icons/HomeIcon'
import { Search, Copy } from 'lucide-react'
import Link from 'next/link'
import { ThemeToggle } from '@/components/theme-toggle'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Slider } from '@/components/ui/slider'
import { IconList, categories } from '@/data/icons'
import { toast } from 'sonner'
import { IconData } from '@/data/icons'

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

	return (
		<div className="flex h-screen overflow-hidden">
			{/* Sidebar */}
			<div className="w-64 border-r bg-background flex flex-col">
				<div className="p-4 border-b sticky top-0 bg-background z-10">
					<div className="flex items-center justify-between mb-4">
						<Link href="/" className="flex items-center space-x-2">
							<HomeIcon className="h-6 w-6" />
							<span className="font-bold inline-block">Minime Icon</span>
						</Link>
						<ThemeToggle />
					</div>
					<div className="relative">
						<Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
						<Input
							placeholder="İkon ara..."
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							className="pl-8"
						/>
					</div>
				</div>
				<div className="p-4 space-y-1 overflow-auto">
					<button
						onClick={() => setSelectedCategory(null)}
						className={`w-full text-left px-2 py-1.5 rounded-md text-sm transition-colors ${
							!selectedCategory ? 'bg-secondary text-foreground' : 'text-muted-foreground hover:bg-secondary/50'
						}`}
					>
						Tüm İkonlar ({IconList.length})
					</button>
					{categories.map((category) => {
						const count = IconList.filter((icon) => icon.category === category).length
						return (
							<button
								key={category}
								onClick={() => setSelectedCategory(category)}
								className={`w-full text-left px-2 py-1.5 rounded-md text-sm transition-colors ${
									selectedCategory === category
										? 'bg-secondary text-foreground'
										: 'text-muted-foreground hover:bg-secondary/50'
								}`}
							>
								{category} ({count})
							</button>
						)
					})}
				</div>
			</div>

			{/* Main Content */}
			<div className="flex-1 overflow-auto">
				<div className="sticky top-0 bg-background border-b z-10">
					<div className="container py-4 space-y-4">
						<div className="flex items-center gap-8">
							<div className="flex-1 space-y-2">
								<div className="flex items-center justify-between">
									<label className="text-sm font-medium">Boyut</label>
									<span className="text-sm text-muted-foreground">{size}px</span>
								</div>
								<Slider
									value={[size]}
									onValueChange={(value) => setSize(value[0])}
									min={16}
									max={48}
									step={1}
									className="w-full"
								/>
							</div>
							<div className="flex items-center gap-2">
								<label className="text-sm font-medium">Renk</label>
								<Input type="color" value={color} onChange={(e) => setColor(e.target.value)} className="w-20 h-8 p-1" />
							</div>
							<div className="flex-1 space-y-2">
								<div className="flex items-center justify-between">
									<label className="text-sm font-medium">Çizgi Kalınlığı</label>
									<span className="text-sm text-muted-foreground">{strokeWidth}</span>
								</div>
								<Slider
									value={[strokeWidth]}
									onValueChange={(value) => setStrokeWidth(value[0])}
									min={1}
									max={4}
									step={0.5}
									className="w-full"
								/>
							</div>
						</div>
					</div>
				</div>

				<div className="container py-8">
					<div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
						{filteredIcons.map((icon) => {
							const IconComponent = icon.component
							return (
								<button
									key={icon.id}
									onClick={() => setSelectedIcon(icon)}
									className="group p-4 rounded-lg border bg-card hover:bg-accent transition-colors"
								>
									<div className="flex flex-col items-center">
										<div className="mb-2">
											<IconComponent size={size} color={color} style={{ strokeWidth }} />
										</div>
										<span className="text-xs text-muted-foreground group-hover:text-foreground">{icon.name}</span>
									</div>
								</button>
							)
						})}
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
								<selectedIcon.component size={48} color={color} style={{ strokeWidth }} />
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
		</div>
	)
}
