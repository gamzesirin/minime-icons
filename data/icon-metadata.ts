import { IconMetadata } from '@/types/icon-type'

export const iconMetadata: Record<string, IconMetadata> = {
	ArrowDownIcon: {
		name: 'Arrow Down',
		category: 'Arrows',
		keywords: ['aşağı', 'ok', 'yön', 'down', 'arrow', 'direction']
	}
	// Diğer ikonlar için metadata bilgileri buraya eklenecek
}

export const getIconsByCategory = (category?: string) => {
	if (!category) return Object.values(iconMetadata)
	return Object.values(iconMetadata).filter((icon) => icon.category === category)
}

export const searchIcons = (query: string) => {
	const searchTerm = query.toLowerCase()
	return Object.values(iconMetadata).filter((icon) => {
		return (
			icon.name.toLowerCase().includes(searchTerm) ||
			icon.keywords.some((keyword) => keyword.toLowerCase().includes(searchTerm))
		)
	})
}

export const getAllCategories = () => {
	return Array.from(new Set(Object.values(iconMetadata).map((icon) => icon.category)))
}
