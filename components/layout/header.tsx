'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { ThemeToggle } from '@/components/theme-toggle'
import { MenuIcon, X } from 'lucide-react'

interface HeaderProps {
	showSearch?: boolean
}

export function Header({ showSearch = true }: HeaderProps) {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex h-14 items-center justify-between">
				{/* Logo */}
				<div className="flex items-center">
					<Link href="/" className="flex items-center space-x-2">
						<span className="font-bold inline-block text-lg">Minime Icons</span>
					</Link>
				</div>

				{/* Desktop Navigation */}
				<nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
					<Link href="/docs/about" className="transition-colors hover:text-foreground/80 text-foreground/60">
						Hakkında
					</Link>
					<Link href="/docs/installation" className="transition-colors hover:text-foreground/80 text-foreground/60">
						Kurulum
					</Link>
					<Link href="/docs/getting-started" className="transition-colors hover:text-foreground/80 text-foreground/60">
						Başlangıç
					</Link>
					<Link href="/docs/customization" className="transition-colors hover:text-foreground/80 text-foreground/60">
						Özelleştirme
					</Link>
					<Link href="/icons" className="text-primary hover:text-primary/80 font-medium">
						İkonlar
					</Link>
				</nav>

				{/* Desktop Actions */}
				<div className="hidden md:flex items-center gap-2">
					<ThemeToggle />
				</div>

				{/* Mobile Actions */}
				<div className="flex md:hidden items-center gap-2">
					<ThemeToggle />
					<Sheet open={isOpen} onOpenChange={setIsOpen}>
						<SheetTrigger asChild>
							<Button variant="ghost" size="sm" className="px-2">
								<MenuIcon className="h-5 w-5" />
								<span className="sr-only">Menu</span>
							</Button>
						</SheetTrigger>
						<SheetContent side="right" className="w-[280px] sm:w-[300px]">
							<div className="flex flex-col space-y-6 mt-6">
								<Link 
									href="/icons" 
									className="text-lg font-medium text-primary hover:text-primary/80"
									onClick={() => setIsOpen(false)}
								>
									İkonlar
								</Link>
								<div className="border-b" />
								<div className="flex flex-col space-y-4">
									<h4 className="font-medium text-sm text-muted-foreground">DOKÜMANTASYON</h4>
									<Link 
										href="/docs/about" 
										className="text-sm transition-colors hover:text-foreground text-muted-foreground"
										onClick={() => setIsOpen(false)}
									>
										Hakkında
									</Link>
									<Link 
										href="/docs/installation" 
										className="text-sm transition-colors hover:text-foreground text-muted-foreground"
										onClick={() => setIsOpen(false)}
									>
										Kurulum
									</Link>
									<Link 
										href="/docs/getting-started" 
										className="text-sm transition-colors hover:text-foreground text-muted-foreground"
										onClick={() => setIsOpen(false)}
									>
										Başlangıç
									</Link>
									<Link 
										href="/docs/customization" 
										className="text-sm transition-colors hover:text-foreground text-muted-foreground"
										onClick={() => setIsOpen(false)}
									>
										Özelleştirme
									</Link>
								</div>
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	)
}
