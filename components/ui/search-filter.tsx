import { useState } from 'react'
import { SearchIcon } from '@/components/icons/SearchIcon'
import { getAllCategories } from '@/data/icon-metadata'

interface SearchFilterProps {
	onSearch: (query: string) => void
	onCategoryChange: (category: string | undefined) => void
}

export function SearchFilter({ onSearch, onCategoryChange }: SearchFilterProps) {
	const [selectedCategory, setSelectedCategory] = useState<string | undefined>()
	const categories = getAllCategories()

	return (
		<div className="flex flex-col md:flex-row gap-4 mb-8">
			<div className="relative flex-1">
				<SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
				<input
					type="text"
					placeholder="İkon ara..."
					className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:border-gray-700"
					onChange={(e) => onSearch(e.target.value)}
				/>
			</div>
			<div className="flex-shrink-0">
				<select
					className="w-full md:w-48 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:border-gray-700"
					value={selectedCategory}
					onChange={(e) => {
						const value = e.target.value || undefined
						setSelectedCategory(value)
						onCategoryChange(value)
					}}
				>
					<option value="">Tüm Kategoriler</option>
					{categories.map((category) => (
						<option key={category} value={category}>
							{category}
						</option>
					))}
				</select>
			</div>
		</div>
	)
}
