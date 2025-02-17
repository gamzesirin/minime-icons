'use client'

import React from 'react'
import Link from 'next/link'
import { HomeIcon } from '@/icons/HomeIcon'

import { PackageIcon, PaintbrushIcon, UsersIcon, TreePineIcon, PaletteIcon } from 'lucide-react'

const features = [
	{
		icon: <PaintbrushIcon className="w-8 h-8 text-blue-500" />,
		title: 'Lightweight & Scalable',
		description: 'İkonlar hafif, yüksek oranda optimize edilmiş ölçeklenebilir vektör grafikleridir (SVG).'
	},
	{
		icon: <PaletteIcon className="w-8 h-8 text-green-500" />,
		title: 'Clean & Consistent',
		description: 'Stil ve okunabilirlik açısından tutarlılık için tasarlanmış tasarım kuralları.'
	},
	{
		icon: <PackageIcon className="w-8 h-8 text-purple-500" />,
		title: 'Packages Support',
		description: 'Tüm büyük paket yöneticileri için kullanılabilir.'
	},
	{
		icon: <TreePineIcon className="w-8 h-8 text-orange-500" />,
		title: 'Tree Shakable',
		description: 'İkonlar tree-shakable, böylece sadece kullandığınız ikonları içe aktarabilirsiniz.'
	},
	{
		icon: <UsersIcon className="w-8 h-8 text-red-500" />,
		title: 'Active Community',
		description: 'GitHub ve Discord üzerinde aktif bir topluluğa sahip.'
	}
]

export default function Home() {
	return (
		<div className="min-h-screen bg-background">
			<main>
				<section className="py-20 text-center">
					<div className="container mx-auto px-4">
						<h1 className="text-5xl font-bold mb-6">
							Beautiful & <br /> consistent icons
						</h1>
						<p className="text-xl text-muted-foreground mb-8">Modern ve kullanımı kolay ikon kütüphanesi.</p>
						<div className="flex justify-center gap-4">
							<Link
								href="/docs/getting-started"
								className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
							>
								Get Started
							</Link>
							<Link
								href="/icons"
								className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"
							>
								Browse Icons
							</Link>
						</div>
					</div>
				</section>

				<section className="py-20 bg-secondary/50">
					<div className="container mx-auto px-4">
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
							{features.map((feature, index) => (
								<div key={index} className="p-6 bg-background rounded-lg border hover:shadow-lg transition-shadow">
									<div className="mb-4">{feature.icon}</div>
									<h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
									<p className="text-muted-foreground">{feature.description}</p>
								</div>
							))}
						</div>
					</div>
				</section>
			</main>
		</div>
	)
}
