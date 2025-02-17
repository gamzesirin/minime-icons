'use client'

import { HomeIcon } from '@/icons/HomeIcon'
import { Search } from 'lucide-react'
import Link from 'next/link'
import { ThemeToggle } from '@/components/theme-toggle'
import { Input } from '@/components/ui/input'

export default function AboutPage() {
	return (
		<div className="min-h-screen bg-background">
			{/* Main Content */}
			<div className="container py-10">
				<div className="max-w-3xl mx-auto space-y-12">
					<section className="space-y-4">
						<h1 className="text-4xl font-bold">Minime Icons Nedir?</h1>
						<p className="text-lg text-muted-foreground leading-relaxed">
							Minime Icons, dijital ve dijital olmayan projelerde kullanılmak üzere 1000+ vektör (svg) dosyası sağlayan
							açık kaynaklı bir ikon kütüphanesidir. Kütüphane, tasarımcıların ve geliştiricilerin projelerine ikonları
							kolayca entegre etmelerini sağlamak için çeşitli resmi paketler sunmaktadır.
						</p>
					</section>

					<section className="space-y-4">
						<h2 className="text-2xl font-semibold">Mevcut İkonlar</h2>
						<p className="text-muted-foreground leading-relaxed">
							Minime Icons, kullanıcıların ihtiyaçlarına en uygun ikonu seçmelerine olanak tanıyan farklı varyant ve
							durumlarla birlikte ikonlar içerir. İstenen bir ikon henüz mevcut değilse, kullanıcılar bir tasarım isteği
							açabilir ve Minime Icons topluluğu katkıda bulunanları yeni ikonlar sağlamaya yardımcı olur. Daha fazla
							ikon seçeneğiyle kullanıcılar projelerinde daha fazla seçeneğe sahip olur.
						</p>
					</section>

					<section className="space-y-4">
						<h2 className="text-2xl font-semibold">Eksiksiz İkon Seti</h2>
						<p className="text-muted-foreground leading-relaxed">
							Özel özelliklere sahip yeni uygulamalar ortaya çıktıkça, Minime Icons her proje için eksiksiz bir ikon
							seti sağlamayı amaçlar. Topluluk, yeni ikonlar tasarlarken bir dizi tasarım kuralını takip eder. Bu
							kurallar, ikonların tanınabilirliği, stil tutarlılığı ve tüm boyutlarda okunabilirlik gibi standartları
							korur. Yeni ikonlarda yaratıcılık değerli olmakla birlikte, ikonların kullanıcılar tarafından kolayca
							tanımlanabilmesini sağlamak için tanınabilir tasarım kurallarına uymak önemlidir.
						</p>
					</section>

					<section className="space-y-4">
						<h2 className="text-2xl font-semibold">Kod Optimizasyonu</h2>
						<p className="text-muted-foreground leading-relaxed">
							Tasarımın yanı sıra kod da önemlidir. İkonlar gibi varlıklar web projelerinde bant genişliği kullanımını
							önemli ölçüde artırabilir. İnternetin büyümesiyle birlikte, Minime Icons&apos;un kullanıcılarına optimize
							edilmiş varlıklar sağlama sorumluluğu vardır. Bu nedenle tüm ikonlar, performanstan ödün vermeden en iyi
							kullanıcı deneyimini sağlamak için optimize edilmiştir.
						</p>
					</section>

					<section className="space-y-4">
						<h2 className="text-2xl font-semibold">Özellikler</h2>
						<ul className="space-y-3 text-muted-foreground list-disc pl-6">
							<li>1000+ SVG ikonu</li>
							<li>Tamamen özelleştirilebilir (boyut, renk, kalınlık)</li>
							<li>Tree-shaking desteği</li>
							<li>TypeScript desteği</li>
							<li>ESM ve CommonJS desteği</li>
							<li>Tema desteği (aydınlık/karanlık mod)</li>
							<li>React, Vue ve diğer framework&apos;ler için destek</li>
							<li>Düzenli güncellemeler ve yeni ikonlar</li>
						</ul>
					</section>
				</div>
			</div>
		</div>
	)
}
