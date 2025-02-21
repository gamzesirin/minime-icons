import * as React from 'react'
import { Input } from '@/components/ui/input'
import { Slider } from '@/components/ui/slider'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { ChevronLeft, ChevronRight, Menu, Settings } from 'lucide-react'
import { cn } from '@/lib/utils'

interface IconSidebarProps {
	size: number
	setSize: (size: number) => void
	color: string
	setColor: (color: string) => void
	strokeWidth: number
	setStrokeWidth: (width: number) => void
}

function SidebarContent({ size, setSize, color, setColor, strokeWidth, setStrokeWidth }: IconSidebarProps) {
	return (
		<div className="space-y-6">
			<div className="space-y-2">
				<label className="text-xs text-muted-foreground">Boyut ({size}px)</label>
				<Slider
					value={[size]}
					onValueChange={(value) => setSize(value[0])}
					min={16}
					max={48}
					step={1}
					className="w-full"
				/>
			</div>

			<div className="space-y-2">
				<label className="text-xs text-muted-foreground">Renk</label>
				<Input type="color" value={color} onChange={(e) => setColor(e.target.value)} className="w-full h-8 p-1" />
			</div>

			<div className="space-y-2">
				<label className="text-xs text-muted-foreground">Çizgi Kalınlığı ({strokeWidth})</label>
				<Slider
					value={[strokeWidth]}
					onValueChange={(value) => setStrokeWidth(value[0])}
					min={1}
					max={4}
					step={0.5}
					className="w-full"
				/>
			</div>
		</div>
	)
}

export function IconSidebar(props: IconSidebarProps) {
	const [isOpen, setIsOpen] = React.useState(true)

	return (
		<div
			className={cn('fixed left-0 top-0 h-screen transition-all duration-300 z-[51]', isOpen ? 'w-[240px]' : 'w-12')}
		>
			{/* Mobil Görünüm */}
			<div className="lg:hidden fixed top-4 left-4 z-50">
				<Sheet>
					<SheetTrigger asChild>
						<Button variant="outline" size="icon" className="rounded-lg shadow-lg">
							<Settings className="h-4 w-4" />
						</Button>
					</SheetTrigger>
					<SheetContent side="left" className="w-[240px]">
						<div className="py-6">
							<h3 className="text-sm font-medium mb-4">İkon Ayarları</h3>
							<SidebarContent {...props} />
						</div>
					</SheetContent>
				</Sheet>
			</div>

			{/* Masaüstü Görünüm */}
			<div className="hidden lg:flex flex-col h-full border-r bg-background/80 backdrop-blur-sm">
				<Button
					variant="ghost"
					size="icon"
					className="absolute -right-4 top-6 rounded-full bg-background border shadow-md"
					onClick={() => setIsOpen(!isOpen)}
				>
					{isOpen ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
				</Button>

				<div className={cn('p-6 space-y-6', !isOpen && 'hidden')}>
					<h3 className="text-sm font-medium">İkon Ayarları</h3>
					<SidebarContent {...props} />
				</div>
			</div>
		</div>
	)
}
