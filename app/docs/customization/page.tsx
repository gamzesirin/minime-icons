'use client'

import { HomeIcon } from '@/icons/HomeIcon'
import { useState } from 'react'
import { Slider } from '@/components/ui/slider'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Copy, Search } from 'lucide-react'
import { toast } from 'sonner'
import Link from 'next/link'
import { ThemeToggle } from '@/components/theme-toggle'

export default function CustomizationPage() {
	const [size, setSize] = useState(24)
	const [color, setColor] = useState('#000000')
	const [strokeWidth, setStrokeWidth] = useState(2)

	const handleCopyCode = async (code: string) => {
		try {
			await navigator.clipboard.writeText(code)
			toast.success('Kod kopyalandı')
		} catch {
			toast.error('Kopyalama başarısız oldu')
		}
	}

	const code = `import { HomeIcon } from '@/icons/HomeIcon'

<HomeIcon
  size={${size}}
  color="${color}"
  strokeWidth={${strokeWidth}}
/>`

	return (
		<div className="min-h-screen bg-background">
			{/* Header */}
			<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
				<div className="container flex h-14 items-center justify-between">
					<div className="flex items-center gap-4">
						<Link href="/" className="flex items-center space-x-2">
							<HomeIcon className="h-6 w-6" />
							<span className="font-bold inline-block">Minime Icon</span>
						</Link>
						<nav className="flex items-center space-x-6 text-sm font-medium">
							<Link href="/docs/about" className="transition-colors hover:text-foreground/80 text-foreground/60">
								Hakkında
							</Link>
							<Link href="/docs/installation" className="transition-colors hover:text-foreground/80 text-foreground/60">
								Kurulum
							</Link>
							<Link href="/docs/customization" className="transition-colors text-foreground">
								Özelleştirme
							</Link>
						</nav>
					</div>

					<div className="flex items-center gap-4">
						<div className="relative w-full max-w-[300px]">
							<Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
							<Input placeholder="İkon ara..." className="pl-8" />
						</div>
						<ThemeToggle />
					</div>
				</div>
			</header>

			{/* Main Content */}
			<div className="container py-10">
				<div className="grid gap-10 lg:grid-cols-2">
					{/* Controls */}
					<div className="space-y-8">
						<div>
							<h2 className="text-lg font-semibold mb-6">İkon Özelleştirme</h2>
							<div className="space-y-6">
								<div className="space-y-4">
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

								<div className="space-y-4">
									<div className="flex items-center justify-between">
										<label className="text-sm font-medium">Renk</label>
										<span className="text-sm text-muted-foreground">{color}</span>
									</div>
									<Input
										type="color"
										value={color}
										onChange={(e) => setColor(e.target.value)}
										className="h-10 w-full"
									/>
								</div>

								<div className="space-y-4">
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

					{/* Preview */}
					<div className="space-y-8">
						<div className="flex items-center justify-center p-8 rounded-lg border bg-card">
							<HomeIcon size={size} color={color} strokeWidth={strokeWidth} />
						</div>

						<div>
							<div className="flex items-center justify-between mb-4">
								<span className="text-sm font-medium">Kod Örneği</span>
								<Button variant="ghost" size="sm" onClick={() => handleCopyCode(code)}>
									<Copy className="h-4 w-4 mr-2" />
									Kopyala
								</Button>
							</div>
							<pre className="p-4 rounded-lg bg-muted font-mono text-sm whitespace-pre overflow-x-auto">{code}</pre>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
