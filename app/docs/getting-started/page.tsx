'use client'

import * as React from 'react'
import { HomeIcon } from '@/icons/HomeIcon'
import { Search } from 'lucide-react'
import Link from 'next/link'
import { ThemeToggle } from '@/components/theme-toggle'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function GettingStartedPage() {
	const [mounted, setMounted] = React.useState(false)

	React.useEffect(() => {
		setMounted(true)
		// cz-shortcut-listen özelliğini kaldır
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
							<Link href="/docs/getting-started" className="transition-colors text-foreground">
								Başlangıç Kılavuzu
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
				<div className="max-w-4xl mx-auto space-y-12">
					<section className="space-y-4">
						<h1 className="text-4xl font-bold">Başlangıç Kılavuzu</h1>
						<p className="text-lg text-muted-foreground leading-relaxed">
							Bu kılavuz, Minime Icons kütüphanesini projenizde nasıl kullanacağınızı adım adım açıklar.
						</p>
					</section>

					<Tabs defaultValue="react" className="space-y-8">
						<TabsList>
							<TabsTrigger value="react">React</TabsTrigger>
							<TabsTrigger value="nextjs">Next.js</TabsTrigger>
							<TabsTrigger value="vue">Vue</TabsTrigger>
							<TabsTrigger value="svelte">Svelte</TabsTrigger>
						</TabsList>

						<TabsContent value="react" className="space-y-8">
							<section className="space-y-4">
								<h2 className="text-2xl font-semibold">React Projesinde Kullanım</h2>
								<div className="space-y-6">
									<div>
										<h3 className="text-xl font-medium mb-2">1. Kurulum</h3>
										<p className="text-muted-foreground mb-4">İlk olarak, Minime Icons paketini projenize ekleyin:</p>
										<pre className="p-4 rounded-lg bg-muted font-mono text-sm">npm install @minime/icons</pre>
									</div>

									<div>
										<h3 className="text-xl font-medium mb-2">2. İkon İçe Aktarma</h3>
										<p className="text-muted-foreground mb-4">
											İkonları doğrudan içe aktarın ve bileşen olarak kullanın:
										</p>
										<pre className="p-4 rounded-lg bg-muted font-mono text-sm whitespace-pre">{`import { HomeIcon, SearchIcon } from '@minime/icons'

function App() {
  return (
    <div>
      <HomeIcon size={24} color="currentColor" strokeWidth={2} />
      <SearchIcon size={24} color="#000000" strokeWidth={2} />
    </div>
  )
}`}</pre>
									</div>

									<div>
										<h3 className="text-xl font-medium mb-2">3. Özelleştirme</h3>
										<p className="text-muted-foreground mb-4">
											İkonları özelleştirmek için aşağıdaki props&apos;ları kullanabilirsiniz:
										</p>
										<ul className="space-y-2 text-muted-foreground list-disc pl-6">
											<li>
												<code className="text-sm bg-muted px-1.5 py-0.5 rounded">size</code>: İkonun boyutu (piksel
												cinsinden)
											</li>
											<li>
												<code className="text-sm bg-muted px-1.5 py-0.5 rounded">color</code>: İkonun rengi (hex, rgb,
												css renk adı)
											</li>
											<li>
												<code className="text-sm bg-muted px-1.5 py-0.5 rounded">strokeWidth</code>: Çizgi kalınlığı
												(1-4 arası)
											</li>
											<li>
												<code className="text-sm bg-muted px-1.5 py-0.5 rounded">className</code>: CSS sınıfları
											</li>
										</ul>
									</div>

									<div>
										<h3 className="text-xl font-medium mb-2">4. Tema Desteği</h3>
										<p className="text-muted-foreground mb-4">
											Tema renklerini kullanmak için{' '}
											<code className="text-sm bg-muted px-1.5 py-0.5 rounded">currentColor</code> değerini kullanın:
										</p>
										<pre className="p-4 rounded-lg bg-muted font-mono text-sm whitespace-pre">{`<HomeIcon color="currentColor" className="text-primary" />`}</pre>
									</div>

									<div>
										<h3 className="text-xl font-medium mb-2">5. Performans Optimizasyonu</h3>
										<p className="text-muted-foreground mb-4">
											Tree-shaking özelliği sayesinde sadece kullandığınız ikonlar bundle&apos;a dahil edilir:
										</p>
										<pre className="p-4 rounded-lg bg-muted font-mono text-sm whitespace-pre">{`// Sadece HomeIcon bundle'a dahil edilir
import { HomeIcon } from '@minime/icons'`}</pre>
									</div>
								</div>
							</section>
						</TabsContent>

						<TabsContent value="nextjs" className="space-y-8">
							<section className="space-y-4">
								<h2 className="text-2xl font-semibold">Next.js Projesinde Kullanım</h2>
								<div className="space-y-6">
									<div>
										<h3 className="text-xl font-medium mb-2">1. Kurulum</h3>
										<p className="text-muted-foreground mb-4">Next.js projenize Minime Icons&apos;u ekleyin:</p>
										<pre className="p-4 rounded-lg bg-muted font-mono text-sm">npm install @minime/icons</pre>
									</div>

									<div>
										<h3 className="text-xl font-medium mb-2">2. Client Component&apos;lerde Kullanım</h3>
										<p className="text-muted-foreground mb-4">İkonları client component&apos;lerde kullanmak için:</p>
										<pre className="p-4 rounded-lg bg-muted font-mono text-sm whitespace-pre">{`'use client'

import { HomeIcon } from '@minime/icons'

export default function Header() {
  return (
    <header>
      <HomeIcon size={24} color="currentColor" />
    </header>
  )
}`}</pre>
									</div>

									<div>
										<h3 className="text-xl font-medium mb-2">3. Server Component&apos;lerde Kullanım</h3>
										<p className="text-muted-foreground mb-4">
											Server component&apos;lerde de ikonları doğrudan kullanabilirsiniz:
										</p>
										<pre className="p-4 rounded-lg bg-muted font-mono text-sm whitespace-pre">{`import { HomeIcon } from '@minime/icons'

export default function Page() {
  return (
    <main>
      <HomeIcon size={24} color="currentColor" />
    </main>
  )
}`}</pre>
									</div>

									<div>
										<h3 className="text-xl font-medium mb-2">4. Tailwind CSS ile Kullanım</h3>
										<p className="text-muted-foreground mb-4">
											Tailwind CSS sınıflarını doğrudan ikonlara uygulayabilirsiniz:
										</p>
										<pre className="p-4 rounded-lg bg-muted font-mono text-sm whitespace-pre">{`<HomeIcon className="w-6 h-6 text-primary hover:text-primary/80" />`}</pre>
									</div>
								</div>
							</section>
						</TabsContent>

						<TabsContent value="vue" className="space-y-8">
							<section className="space-y-4">
								<h2 className="text-2xl font-semibold">Vue Projesinde Kullanım</h2>
								<div className="space-y-6">
									<div>
										<h3 className="text-xl font-medium mb-2">1. Kurulum</h3>
										<p className="text-muted-foreground mb-4">Vue projenize Minime Icons&apos;u ekleyin:</p>
										<pre className="p-4 rounded-lg bg-muted font-mono text-sm">npm install @minime/icons-vue</pre>
									</div>

									<div>
										<h3 className="text-xl font-medium mb-2">2. Kullanım</h3>
										<p className="text-muted-foreground mb-4">Vue bileşenlerinde ikonları kullanmak için:</p>
										<pre className="p-4 rounded-lg bg-muted font-mono text-sm whitespace-pre">{`<script setup>
import { HomeIcon } from '@minime/icons-vue'
</script>

<template>
  <HomeIcon :size="24" color="currentColor" :stroke-width="2" />
</template>`}</pre>
									</div>
								</div>
							</section>
						</TabsContent>

						<TabsContent value="svelte" className="space-y-8">
							<section className="space-y-4">
								<h2 className="text-2xl font-semibold">Svelte Projesinde Kullanım</h2>
								<div className="space-y-6">
									<div>
										<h3 className="text-xl font-medium mb-2">1. Kurulum</h3>
										<p className="text-muted-foreground mb-4">Svelte projenize Minime Icons&apos;u ekleyin:</p>
										<pre className="p-4 rounded-lg bg-muted font-mono text-sm">npm install @minime/icons-svelte</pre>
									</div>

									<div>
										<h3 className="text-xl font-medium mb-2">2. Kullanım</h3>
										<p className="text-muted-foreground mb-4">Svelte bileşenlerinde ikonları kullanmak için:</p>
										<pre className="p-4 rounded-lg bg-muted font-mono text-sm whitespace-pre">{`<script>
import { HomeIcon } from '@minime/icons-svelte'
</script>

<HomeIcon size={24} color="currentColor" strokeWidth={2} />`}</pre>
									</div>
								</div>
							</section>
						</TabsContent>
					</Tabs>

					<section className="space-y-4">
						<h2 className="text-2xl font-semibold">İyi Pratikler</h2>
						<div className="space-y-4">
							<div>
								<h3 className="text-xl font-medium mb-2">1. İkon Boyutları</h3>
								<p className="text-muted-foreground">İkonları genellikle şu boyutlarda kullanmanızı öneririz:</p>
								<ul className="mt-2 space-y-2 text-muted-foreground list-disc pl-6">
									<li>Küçük: 16px (butonlar, metin yanı)</li>
									<li>Orta: 20-24px (genel kullanım)</li>
									<li>Büyük: 32px (vurgu gerektiren yerler)</li>
								</ul>
							</div>

							<div>
								<h3 className="text-xl font-medium mb-2">2. Erişilebilirlik</h3>
								<p className="text-muted-foreground">Dekoratif olmayan ikonlar için aria-label kullanın:</p>
								<pre className="mt-2 p-4 rounded-lg bg-muted font-mono text-sm whitespace-pre">{`<button aria-label="Ana sayfa">
  <HomeIcon />
</button>`}</pre>
							</div>

							<div>
								<h3 className="text-xl font-medium mb-2">3. Performans</h3>
								<ul className="space-y-2 text-muted-foreground list-disc pl-6">
									<li>İkonları toplu import etmek yerine tek tek import edin</li>
									<li>Dinamik import&apos;ları lazy loading için kullanın</li>
									<li>SSR uyumluluğu için hydration hatalarına dikkat edin</li>
								</ul>
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
	)
}
