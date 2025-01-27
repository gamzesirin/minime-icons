import React from 'react'

interface ToolbarProps {
	searchTerm: string
	onSearchChange: (value: string) => void
	categories: string[]
	selectedCategory: string | null
	onCategoryChange: (category: string | null) => void
}

export const Toolbar: React.FC<ToolbarProps> = ({
	searchTerm,
	onSearchChange,
	categories,
	selectedCategory,
	onCategoryChange
}) => {
	return (
		<div className="flex flex-col md:flex-row gap-4 p-4 bg-white dark:bg-gray-800 shadow-sm rounded-lg mb-6">
			<input
				type="text"
				value={searchTerm}
				onChange={(e) => onSearchChange(e.target.value)}
				placeholder="İkon ara..."
				className="flex-1 px-4 py-2 border dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
			/>
			<select
				value={selectedCategory || ''}
				onChange={(e) => onCategoryChange(e.target.value || null)}
				className="px-4 py-2 border dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
			>
				<option value="">Tüm Kategoriler</option>
				{categories.map((category) => (
					<option key={category} value={category}>
						{category}
					</option>
				))}
			</select>
		</div>
	)
}
