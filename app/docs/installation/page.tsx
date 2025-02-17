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
