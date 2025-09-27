'use client'

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Paintbrush, Package, Sparkles, Users, ArrowRight } from 'lucide-react'
import NET, { VantaEffect } from 'vanta/dist/vanta.net.min'
import * as THREE from 'three'
import FeatureCard from '@/components/global/FeaturedCard'
import { useTheme } from 'next-themes'
import { HeartIcon } from '@/components/icons/HeartIcon'
import { StarIcon } from '@/components/icons/StarIcon'
import { PlayIcon } from '@/components/icons/PlayIcon'
import { SettingsIcon } from '@/components/icons/SettingsIcon'
import { SearchIcon } from '@/components/icons/SearchIcon'
import { HomeIcon } from '@/components/icons/HomeIcon'
import { MailIcon } from '@/components/icons/MailIcon'
import { BellIcon } from '@/components/icons/BellIcon'

const features = [
	{
		icon: <Sparkles className="h-4 w-4" />,
		title: 'Modern & Minimal',
		description: 'Her ihtiyaca uygun, modern ve minimal tasarlanmış 100+ SVG ikon.',
		area: 'md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]'
	},
	{
		icon: <Paintbrush className="h-4 w-4" />,
		title: 'Özelleştirilebilir',
		description: 'Boyut, renk ve çizgi kalınlığı gibi özellikleri kolayca özelleştirebilirsiniz.',
		area: 'md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]'
	},
	{
		icon: <Package className="h-4 w-4" />,
		title: 'Kolay Entegrasyon',
		description: "React, Next.js ve diğer modern framework'ler ile hızlıca entegre edin.",
		area: 'md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]'
	},
	{
		icon: <Users className="h-4 w-4" />,
		title: 'Açık Kaynak',
		description: 'Tamamen ücretsiz ve açık kaynak. GitHub üzerinden katkıda bulunabilirsiniz.',
		area: 'md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]'
	}
]

const popularIcons = [
	{ icon: HeartIcon, name: 'Heart', category: 'UI' },
	{ icon: StarIcon, name: 'Star', category: 'UI' },
	{ icon: PlayIcon, name: 'Play', category: 'Media' },
	{ icon: SettingsIcon, name: 'Settings', category: 'UI' },
	{ icon: SearchIcon, name: 'Search', category: 'UI' },
	{ icon: HomeIcon, name: 'Home', category: 'Navigation' },
	{ icon: MailIcon, name: 'Mail', category: 'Communication' },
	{ icon: BellIcon, name: 'Bell', category: 'UI' }
]

export default function Home() {
	const [vantaEffect, setVantaEffect] = useState<VantaEffect | null>(null)
	const [currentText, setCurrentText] = useState('')
	const [iconSizes, setIconSizes] = useState(Array(8).fill(24))
	const [iconColors, setIconColors] = useState(Array(8).fill('#000000'))
	const vantaRef = useRef<HTMLDivElement>(null)
	const { resolvedTheme } = useTheme()

	const texts = ['Güzel & minimal ikonlar', 'Modern tasarım sistemi', '100+ SVG ikon', 'Kolay entegrasyon']
	const [textIndex, setTextIndex] = useState(0)
	const [charIndex, setCharIndex] = useState(0)
	const [isDeleting, setIsDeleting] = useState(false)

	// Typing animation
	useEffect(() => {
		const currentFullText = texts[textIndex]
		const timeout = setTimeout(
			() => {
				if (!isDeleting) {
					if (charIndex < currentFullText.length) {
						setCurrentText(currentFullText.slice(0, charIndex + 1))
						setCharIndex(charIndex + 1)
					} else {
						setTimeout(() => setIsDeleting(true), 2000)
					}
				} else {
					if (charIndex > 0) {
						setCurrentText(currentFullText.slice(0, charIndex - 1))
						setCharIndex(charIndex - 1)
					} else {
						setIsDeleting(false)
						setTextIndex((textIndex + 1) % texts.length)
					}
				}
			},
			isDeleting ? 50 : 100
		)

		return () => clearTimeout(timeout)
	}, [charIndex, isDeleting, textIndex, texts])

	// Icon animations
	useEffect(() => {
		const interval = setInterval(() => {
			setIconSizes((prev) => prev.map(() => Math.random() * 16 + 16))
			setIconColors((prev) => prev.map((currentColor) => {
				// Eğer mevcut renk siyah/beyaz ise, tema'ya uygun renk ver
				if (currentColor === '#000000' || currentColor === 'black' || currentColor === 'rgb(0, 0, 0)') {
					return resolvedTheme === 'dark' ? '#ffffff' : '#000000'
				} else if (currentColor === '#ffffff' || currentColor === 'white' || currentColor === 'rgb(255, 255, 255)') {
					return resolvedTheme === 'dark' ? '#ffffff' : '#000000'
				} else {
					// Renkli ikonlar için random renk
					const hue = Math.random() * 360
					const saturation = Math.random() * 50 + 50 // 50-100%
					const lightness = Math.random() * 40 + 30 // 30-70%
					return `hsl(${hue}, ${saturation}%, ${lightness}%)`
				}
			}))
		}, 3000)

		return () => clearInterval(interval)
	}, [resolvedTheme])

	// Tema değiştiğinde icon renklerini hemen güncelle
	useEffect(() => {
		setIconColors(prev => prev.map(color => {
			// Siyah renkler için kontrol
			if (color === '#000000' || color === 'black' || color === 'rgb(0, 0, 0)') {
				return resolvedTheme === 'dark' ? '#ffffff' : '#000000'
			}
			// Beyaz renkler için kontrol
			if (color === '#ffffff' || color === 'white' || color === 'rgb(255, 255, 255)') {
				return resolvedTheme === 'dark' ? '#ffffff' : '#000000'
			}
			// Diğer renkler değişmez
			return color
		}))
	}, [resolvedTheme])

	useEffect(() => {
		if (!vantaEffect) {
			setVantaEffect(
				NET({
					el: vantaRef.current,
					THREE,
					mouseControls: true,
					touchControls: true,
					gyroControls: false,
					minHeight: 600,
					minWidth: 200,
					scale: 1.0,
					scaleMobile: 1.0,
					color: resolvedTheme === 'dark' ? '#ffffff' : '#000000',
					backgroundColor: resolvedTheme === 'dark' ? '#000000' : '#ffffff',
					points: resolvedTheme === 'dark' ? 12 : 8,
					maxDistance: resolvedTheme === 'dark' ? 0 : 25,
					spacing: resolvedTheme === 'dark' ? 15 : 18,
					showDots: true,
					lineWidth: resolvedTheme === 'dark' ? 0 : 2
				})
			)
		}

		return () => {
			if (vantaEffect) vantaEffect.destroy()
		}
	}, [vantaEffect, resolvedTheme])

	useEffect(() => {
		if (vantaEffect) {
			vantaEffect.destroy()
			setVantaEffect(null)
		}
	}, [resolvedTheme])

	return (
		<div className="min-h-screen bg-background overflow-x-hidden">
			<main>
				<section
					ref={vantaRef}
					className="relative min-h-[700px] md:min-h-[800px] flex items-center justify-center bg-background dark:bg-background overflow-hidden"
				>
					<div className="absolute inset-0 z-0 opacity-50" />

					<div className="container relative z-10 mx-auto px-4 text-center">
						<div className="mb-8">
							<h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-primary/50 leading-tight min-h-[120px] flex items-center justify-center">
								{currentText}
								<span className="animate-ping text-primary">|</span>
							</h1>
						</div>

						<p className="text-xl sm:text-2xl text-muted-foreground mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
							Modern projeleriniz için <span className="text-primary font-semibold">100+</span> özenle tasarlanmış SVG
							ikon
						</p>

						<div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 max-w-md sm:max-w-none mx-auto mb-12">
							<Button
								size="lg"
								className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto px-8 py-4 text-lg"
								asChild
							>
								<Link href="/docs/getting-started" className="flex items-center gap-2">
									Başlarken
									<ArrowRight className="h-5 w-5" />
								</Link>
							</Button>
							<Button
								size="lg"
								variant="outline"
								className="backdrop-blur-sm bg-background/50 hover:bg-background/80 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto px-8 py-4 text-lg border-2"
								asChild
							>
								<Link href="/icons" className="flex items-center gap-2">
									İkonları Keşfet
									<Sparkles className="h-5 w-5" />
								</Link>
							</Button>
						</div>
					</div>
				</section>

				{/* Popular Icons Preview */}
				<section className="py-20 bg-gradient-to-br from-background via-accent/5 to-background">
					<div className="container mx-auto px-4">
						<div className="text-center mb-16">
							<h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
								Popüler İkonlar
							</h2>
							<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
								En çok kullanılan ikonlarımızı keşfedin ve canlı önizleme yapın
							</p>
						</div>

						<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6 mb-12">
							{popularIcons.map((item, index) => {
								const IconComponent = item.icon
								return (
									<div
										key={index}
										className="group relative bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 transform hover:scale-105 cursor-pointer"
									>
										<div className="flex flex-col items-center space-y-4">
											<div className="relative">
												<div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
												<div className="relative bg-accent/50 group-hover:bg-accent rounded-full p-4 transition-all duration-300">
													<IconComponent
														size={32}
														className="text-foreground group-hover:text-primary transition-colors duration-300"
													/>
												</div>
											</div>
											<div className="text-center">
												<h4 className="font-semibold text-sm group-hover:text-primary transition-colors">
													{item.name}
												</h4>
												<p className="text-xs text-muted-foreground mt-1">{item.category}</p>
											</div>
										</div>

										{/* Hover overlay */}
										<div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
									</div>
								)
							})}
						</div>

						<div className="text-center">
							<Button
								size="lg"
								variant="outline"
								className="bg-background/50 backdrop-blur-sm hover:bg-accent hover:border-primary/50 transition-all duration-300"
								asChild
							>
								<Link href="/icons" className="flex items-center gap-2">
									Tüm İkonları Görüntüle
									<ArrowRight className="h-4 w-4" />
								</Link>
							</Button>
						</div>
					</div>
				</section>

				{/* Features Section */}
				<section className="py-20">
					<div className="container mx-auto px-4">
						<div className="text-center mb-16">
							<h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
								Özellikler
							</h2>
							<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
								Modern projeleriniz için ihtiyacınız olan her şey
							</p>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
							{features.map((feature, index) => (
								<FeatureCard
									key={index}
									icon={feature.icon}
									title={feature.title}
									description={feature.description}
									area=""
								/>
							))}
						</div>
					</div>
				</section>
			</main>
		</div>
	)
}
