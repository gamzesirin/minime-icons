'use client'

import Link from 'next/link'
import { ThemeToggle } from '@/components/theme-toggle'

interface HeaderProps {
	showSearch?: boolean
}

export function Header({ showSearch = true }: HeaderProps) {
	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex h-14 items-center justify-between">
				<div className="flex items-center gap-4">
					<Link href="/" className="flex items-center space-x-2">
						<span className="font-bold inline-block">Minime Icon</span>
					</Link>
					<nav className="flex items-center space-x-6 text-sm font-medium">
						<Link href="/docs/about" className="transition-colors hover:text-foreground/80 text-foreground/60">
							Hakkında
						</Link>
						<Link href="/docs/installation" className="transition-colors hover:text-foreground/80 text-foreground/60">
							Kurulum
						</Link>
						<Link href="/docs/customization" className="transition-colors hover:text-foreground/80 text-foreground/60">
							Özelleştirme
						</Link>
					</nav>
				</div>

				<div className="flex items-center gap-4">
					<Link href="/icons" className="hover:text-primary">
						İkonlar
					</Link>
					<ThemeToggle />
				</div>
			</div>
		</header>
	)
}
