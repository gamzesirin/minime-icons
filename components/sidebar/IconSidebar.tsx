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
	sidebarOpen?: boolean
	setSidebarOpen?: (open: boolean) => void
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

interface IconSidebarMobileProps extends IconSidebarProps {
	// Mobile sidebar component
}

export function IconSidebarMobile(props: IconSidebarMobileProps) {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="outline" size="sm" className="px-2">
					<Settings className="h-4 w-4" />
					<span className="sr-only">İkon Ayarları</span>
				</Button>
			</SheetTrigger>
			<SheetContent side="left" className="w-[280px]">
				<div className="py-6">
					<h3 className="text-lg font-medium mb-6">İkon Ayarları</h3>
					<SidebarContent {...props} />
				</div>
			</SheetContent>
		</Sheet>
	)
}

export function IconSidebar(props: IconSidebarProps) {
	const { sidebarOpen = true, setSidebarOpen } = props
	const isOpen = sidebarOpen
	const setIsOpen = setSidebarOpen || (() => {})

	return (
		<div
			className={cn(
				'fixed left-0 top-14 h-[calc(100vh-3.5rem)] transition-all duration-300 z-30 hidden lg:flex',
				isOpen ? 'w-[300px]' : 'w-[50px]'
			)}
		>
			{/* Masaüstü Görünüm */}
			<div
				className={cn(
					'flex flex-col h-full border-r bg-background/80 backdrop-blur-sm',
					isOpen ? 'w-[450px]' : 'w-[80px]'
				)}
			>
				<Button
					variant="ghost"
					size="icon"
					className={cn(
						'rounded-full bg-background border shadow-md z-10 transition-all duration-300',
						isOpen ? 'absolute -right-4 top-6' : 'absolute right-[-16px] top-6'
					)}
					onClick={() => setIsOpen(!isOpen)}
				>
					{isOpen ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
				</Button>

				{isOpen ? (
					<div className="p-6 space-y-6">
						<h3 className="text-sm font-medium">İkon Ayarları</h3>
						<SidebarContent {...props} />
					</div>
				) : null}
			</div>
		</div>
	)
}
