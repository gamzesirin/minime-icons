import { cn } from '@/lib/utils'
import { GlowingEffect } from '../ui/glowing-effect'

interface FeatureCardProps {
	area: string
	icon: React.ReactNode
	title: string
	description: React.ReactNode
}

const FeatureCard = ({ area, icon, title, description }: FeatureCardProps) => {
	return (
		<div className="min-h-[12rem] sm:min-h-[14rem]">
			<div className="relative h-full rounded-xl sm:rounded-[1.25rem] md:rounded-[1.5rem] border-[0.75px] border-border p-1.5 sm:p-2 md:p-3">
				<GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={3} />
				<div className="relative flex h-full flex-col justify-between gap-4 sm:gap-6 overflow-hidden rounded-lg sm:rounded-xl border-[0.75px] bg-background p-4 sm:p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)]">
					<div className="relative flex flex-1 flex-col justify-between gap-3">
						<div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2">{icon}</div>
						<div className="space-y-2 sm:space-y-3">
							<h3 className="pt-0.5 text-lg sm:text-xl md:text-2xl leading-tight font-semibold font-sans tracking-[-0.04em] text-balance text-foreground">
								{title}
							</h3>
							<p className="font-sans text-sm sm:text-base leading-relaxed text-muted-foreground">
								{description}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default FeatureCard
