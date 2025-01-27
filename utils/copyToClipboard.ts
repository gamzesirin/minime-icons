export const copyToClipboard = async (text: string) => {
	try {
		// writeText kullanarak varsayılan bildirimi engelliyoruz
		await navigator.clipboard.writeText(text)
		return true
	} catch (err) {
		console.error('Kopyalama başarısız oldu:', err)
		return false
	}
}
