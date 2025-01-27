'use client'

import { HomeIcon } from '@/icons/HomeIcon'
import { Button } from '@/components/ui/button'
import { Copy, Search } from 'lucide-react'
import { toast } from 'sonner'
import Link from 'next/link'
import { ThemeToggle } from '@/components/theme-toggle'
import { Input } from '@/components/ui/input'

export default function InstallationPage() {
	const handleCopyCode = async (code: string) => {
		try {
			await navigator.clipboard.writeText(code)
			toast.success('Kod kopyalandı')
		} catch {
			toast.error('Kopyalama başarısız oldu')
		}
	}

	const npmCode = 'npm install @minime/icons'
	const yarnCode = 'yarn add @minime/icons'
	const pnpmCode = 'pnpm add @minime/icons'

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
							<Link href="/docs/installation" className="transition-colors text-foreground">
								Kurulum
							</Link>
							<Link
								href="/docs/customization"
								className="transition-colors hover:text-foreground/80 text-foreground/60"
							>
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
				<div className="max-w-3xl mx-auto space-y-8">
					<div>
						<h1 className="text-3xl font-bold mb-4">Kurulum</h1>
						<p className="text-muted-foreground">
							Minime Icon kütüphanesini projenize eklemek için tercih ettiğiniz paket yöneticisini kullanabilirsiniz.
						</p>
					</div>

					<div className="space-y-6">
						<div>
							<div className="flex items-center justify-between mb-2">
								<span className="text-sm font-medium">npm ile kurulum</span>
								<Button variant="ghost" size="sm" onClick={() => handleCopyCode(npmCode)}>
									<Copy className="h-4 w-4 mr-2" />
									Kopyala
								</Button>
							</div>
							<pre className="p-4 rounded-lg bg-muted font-mono text-sm">{npmCode}</pre>
						</div>

						<div>
							<div className="flex items-center justify-between mb-2">
								<span className="text-sm font-medium">yarn ile kurulum</span>
								<Button variant="ghost" size="sm" onClick={() => handleCopyCode(yarnCode)}>
									<Copy className="h-4 w-4 mr-2" />
									Kopyala
								</Button>
							</div>
							<pre className="p-4 rounded-lg bg-muted font-mono text-sm">{yarnCode}</pre>
						</div>

						<div>
							<div className="flex items-center justify-between mb-2">
								<span className="text-sm font-medium">pnpm ile kurulum</span>
								<Button variant="ghost" size="sm" onClick={() => handleCopyCode(pnpmCode)}>
									<Copy className="h-4 w-4 mr-2" />
									Kopyala
								</Button>
							</div>
							<pre className="p-4 rounded-lg bg-muted font-mono text-sm">{pnpmCode}</pre>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
