'use client'

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Paintbrush, Package, Sparkles, Zap, Users } from 'lucide-react'
import NET, { VantaEffect } from 'vanta/dist/vanta.net.min'
import * as THREE from 'three'
import FeatureCard from '@/components/global/FeaturedCard'
import { useTheme } from 'next-themes'

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
		icon: <Zap className="h-4 w-4" />,
		title: 'Yüksek Performans',
		description: 'Optimize edilmiş SVG ikonlar ile projelerinizde maksimum performans.',
		area: 'md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]'
	},
	{
		icon: <Users className="h-4 w-4" />,
		title: 'Açık Kaynak',
		description: 'Tamamen ücretsiz ve açık kaynak. GitHub üzerinden katkıda bulunabilirsiniz.',
		area: 'md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]'
	}
]

export default function Home() {
	const [vantaEffect, setVantaEffect] = useState<VantaEffect | null>(null)
	const vantaRef = useRef<HTMLDivElement>(null)
	const { resolvedTheme } = useTheme()

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
					className="relative min-h-[500px] md:min-h-[600px] flex items-center justify-center bg-background dark:bg-background"
				>
					<div className="absolute inset-0 z-0 opacity-50" />
					<div className="container relative z-10 mx-auto px-4 text-center">
						<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50 leading-tight">
							Güzel & <br /> minimal ikonlar
						</h1>
						<p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">Modern ve kullanımı kolay ikon kütüphanesi.</p>
						<div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto">
							<Button
								size="lg"
								className="bg-primary/90 hover:bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
								asChild
							>
								<Link href="/docs/getting-started">Başlarken</Link>
							</Button>
							<Button
								size="lg"
								variant="outline"
								className="backdrop-blur-sm bg-background/50 hover:bg-background/80 shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
								asChild
							>
								<Link href="/icons">İkonları Keşfet</Link>
							</Button>
						</div>
					</div>
				</section>

				<section className="py-12 sm:py-16 md:py-20">
					<div className="container mx-auto px-4">
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
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
