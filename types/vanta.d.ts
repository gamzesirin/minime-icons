import * as THREE from 'three'

declare module 'vanta/dist/vanta.net.min' {
	export interface VantaNetOptions {
		el: HTMLElement | null
		THREE: any
		mouseControls: boolean
		touchControls: boolean
		gyroControls: boolean
		minHeight: number
		minWidth: number
		scale: number
		scaleMobile: number
		color: string
		backgroundColor: string
		points: number
		maxDistance: number
		spacing: number
		showDots: boolean
		lineWidth: number
	}

	export interface VantaEffect {
		destroy: () => void
	}

	const NET: (options: VantaNetOptions) => VantaEffect
	export default NET
}

// Ayrıca global tanımlama ekleyelim
declare global {
	interface Window {
		VANTA: any
	}
}
