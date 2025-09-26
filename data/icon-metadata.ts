import { IconMetadata } from '@/types/icon-type'

export const iconMetadata: Record<string, IconMetadata> = {
	// Temel İkonlar
	HomeIcon: {
		name: 'Home',
		category: 'Interface',
		keywords: ['ev', 'ana sayfa', 'başlangıç', 'home', 'house', 'main']
	},
	SearchIcon: {
		name: 'Search',
		category: 'Interface',
		keywords: ['arama', 'bul', 'ara', 'search', 'find', 'magnifier']
	},
	MenuIcon: {
		name: 'Menu',
		category: 'Interface',
		keywords: ['menü', 'hamburger', 'liste', 'menu', 'navigation', 'bars']
	},
	CloseIcon: {
		name: 'Close',
		category: 'Interface',
		keywords: ['kapat', 'çarpı', 'iptal', 'close', 'cancel', 'x']
	},
	
	// Ok İkonları
	ArrowLeftIcon: {
		name: 'Arrow Left',
		category: 'Arrows',
		keywords: ['ok', 'sol', 'geri', 'arrow', 'left', 'back']
	},
	ArrowRightIcon: {
		name: 'Arrow Right',
		category: 'Arrows',
		keywords: ['ok', 'sağ', 'ileri', 'arrow', 'right', 'forward']
	},
	ArrowUpIcon: {
		name: 'Arrow Up',
		category: 'Arrows',
		keywords: ['ok', 'yukarı', 'üst', 'arrow', 'up', 'top']
	},
	ArrowDownIcon: {
		name: 'Arrow Down',
		category: 'Arrows',
		keywords: ['ok', 'aşağı', 'alt', 'arrow', 'down', 'bottom']
	},
	ChevronUpIcon: {
		name: 'Chevron Up',
		category: 'Arrows',
		keywords: ['yukarı', 'ok', 'chevron', 'up', 'expand']
	},
	ChevronDownIcon: {
		name: 'Chevron Down',
		category: 'Arrows',
		keywords: ['aşağı', 'ok', 'chevron', 'down', 'collapse']
	},

	// Medya İkonları
	ImageIcon: {
		name: 'Image',
		category: 'Media',
		keywords: ['resim', 'fotoğraf', 'görsel', 'image', 'photo', 'picture']
	},
	VideoIcon: {
		name: 'Video',
		category: 'Media',
		keywords: ['video', 'film', 'medya', 'play', 'movie', 'cinema']
	},
	MusicIcon: {
		name: 'Music',
		category: 'Media',
		keywords: ['müzik', 'ses', 'nota', 'music', 'audio', 'sound']
	},
	PlayIcon: {
		name: 'Play',
		category: 'Media',
		keywords: ['oynat', 'başlat', 'play', 'start', 'resume']
	},
	PauseIcon: {
		name: 'Pause',
		category: 'Media',
		keywords: ['duraklat', 'beklet', 'pause', 'stop', 'halt']
	},
	StopIcon: {
		name: 'Stop',
		category: 'Media',
		keywords: ['durdur', 'bitir', 'stop', 'end', 'finish']
	},
	HeadphonesIcon: {
		name: 'Headphones',
		category: 'Media',
		keywords: ['kulaklık', 'ses', 'müzik', 'dinle', 'headphones', 'audio']
	},

	// Dosya İkonları
	FileIcon: {
		name: 'File',
		category: 'Other',
		keywords: ['dosya', 'belge', 'döküman', 'file', 'document', 'paper']
	},
	FolderIcon: {
		name: 'Folder',
		category: 'Other',
		keywords: ['klasör', 'dizin', 'folder', 'directory', 'storage']
	},
	EditIcon: {
		name: 'Edit',
		category: 'Other',
		keywords: ['düzenle', 'kalem', 'edit', 'modify', 'write']
	},
	SaveIcon: {
		name: 'Save',
		category: 'Other',
		keywords: ['kaydet', 'save', 'diskete', 'store', 'backup']
	},
	TrashIcon: {
		name: 'Trash',
		category: 'Other',
		keywords: ['çöp', 'sil', 'delete', 'remove', 'bin']
	},
	DownloadIcon: {
		name: 'Download',
		category: 'Other',
		keywords: ['indir', 'kaydet', 'dosya', 'download', 'save', 'get']
	},
	DownloadCloudIcon: {
		name: 'Download Cloud',
		category: 'Other',
		keywords: ['indir', 'bulut', 'depolama', 'cloud', 'download', 'storage']
	},
	HardDriveIcon: {
		name: 'Hard Drive',
		category: 'Other',
		keywords: ['disk', 'depolama', 'sürücü', 'bellek', 'storage', 'drive']
	},
	InboxIcon: {
		name: 'Inbox',
		category: 'Other',
		keywords: ['gelen kutusu', 'mesaj', 'posta', 'inbox', 'mail', 'messages']
	},

	// Kullanıcı İkonları
	UserIcon: {
		name: 'User',
		category: 'Business',
		keywords: ['kullanıcı', 'profil', 'hesap', 'user', 'profile', 'account']
	},
	UsersIcon: {
		name: 'Users',
		category: 'Business',
		keywords: ['kullanıcılar', 'grup', 'topluluk', 'users', 'group', 'team']
	},
	UserPlusIcon: {
		name: 'User Plus',
		category: 'Business',
		keywords: ['kullanıcı ekle', 'yeni üye', 'davet', 'add user', 'invite', 'new member']
	},
	UserMinusIcon: {
		name: 'User Minus',
		category: 'Business',
		keywords: ['kullanıcı çıkar', 'üye sil', 'kaldır', 'remove user', 'delete member']
	},

	// İletişim İkonları
	MailIcon: {
		name: 'Mail',
		category: 'Communication',
		keywords: ['mail', 'email', 'posta', 'message', 'envelope', 'letter']
	},
	PhoneIcon: {
		name: 'Phone',
		category: 'Communication',
		keywords: ['telefon', 'ara', 'call', 'mobile', 'contact']
	},
	PhoneCallIcon: {
		name: 'Phone Call',
		category: 'Communication',
		keywords: ['telefon', 'arama', 'çağrı', 'call', 'ring', 'contact']
	},
	PhoneIncomingIcon: {
		name: 'Phone Incoming',
		category: 'Communication',
		keywords: ['gelen arama', 'telefon', 'çağrı', 'incoming', 'receive']
	},
	PhoneOutgoingIcon: {
		name: 'Phone Outgoing',
		category: 'Communication',
		keywords: ['giden arama', 'telefon', 'çağrı', 'outgoing', 'make call']
	},
	PhoneMissedIcon: {
		name: 'Phone Missed',
		category: 'Communication',
		keywords: ['cevapsız arama', 'telefon', 'çağrı', 'missed', 'unanswered']
	},

	// Sosyal Medya İkonları
	TwitterIcon: {
		name: 'Twitter',
		category: 'Social',
		keywords: ['twitter', 'x', 'sosyal medya', 'social media', 'tweet']
	},
	GithubIcon: {
		name: 'Github',
		category: 'Social',
		keywords: ['github', 'git', 'kod', 'code', 'repository', 'programming']
	},
	LinkedinIcon: {
		name: 'Linkedin',
		category: 'Social',
		keywords: ['linkedin', 'iş', 'profesyonel', 'business', 'career', 'work']
	},
	DribbbleIcon: {
		name: 'Dribbble',
		category: 'Social',
		keywords: ['dribbble', 'sosyal medya', 'tasarım', 'design', 'creative']
	},
	InstagramIcon: {
		name: 'Instagram',
		category: 'Social',
		keywords: ['instagram', 'sosyal medya', 'fotoğraf', 'photo', 'social']
	},

	// Düzen İkonları
	LayoutGridIcon: {
		name: 'Layout Grid',
		category: 'Interface',
		keywords: ['grid', 'ızgara', 'düzen', 'layout', 'arrange', 'organize']
	},
	LayoutListIcon: {
		name: 'Layout List',
		category: 'Interface',
		keywords: ['liste', 'düzen', 'list', 'layout', 'organize']
	},
	LayoutColumnsIcon: {
		name: 'Layout Columns',
		category: 'Interface',
		keywords: ['sütunlar', 'düzen', 'columns', 'layout', 'organize']
	},
	LayersIcon: {
		name: 'Layers',
		category: 'Interface',
		keywords: ['katmanlar', 'seviyeler', 'düzen', 'layers', 'levels', 'stack']
	},
	LayoutIcon: {
		name: 'Layout',
		category: 'Interface',
		keywords: ['düzen', 'tasarım', 'şablon', 'layout', 'design', 'template']
	},

	// Etkileşim İkonları
	SparklesIcon: {
		name: 'Sparkles',
		category: 'Interface',
		keywords: ['parıltı', 'yıldız', 'efekt', 'sparkles', 'magic', 'shine']
	},
	CursorClickIcon: {
		name: 'Cursor Click',
		category: 'Interface',
		keywords: ['tıklama', 'imleç', 'cursor', 'click', 'pointer', 'select']
	},

	// E-ticaret İkonları
	ShoppingCartIcon: {
		name: 'Shopping Cart',
		category: 'Business',
		keywords: ['sepet', 'alışveriş', 'market', 'satın al', 'cart', 'buy', 'purchase']
	},
	CreditCardIcon: {
		name: 'Credit Card',
		category: 'Business',
		keywords: ['kredi kartı', 'ödeme', 'banka', 'para', 'payment', 'money', 'finance']
	},
	TagIcon: {
		name: 'Tag',
		category: 'Business',
		keywords: ['etiket', 'fiyat', 'ürün', 'işaret', 'tag', 'price', 'label']
	},
	PackageIcon: {
		name: 'Package',
		category: 'Business',
		keywords: ['paket', 'kargo', 'teslimat', 'kutu', 'package', 'delivery', 'box']
	},
	DiscountIcon: {
		name: 'Discount',
		category: 'Business',
		keywords: ['indirim', 'kampanya', 'fırsat', 'satış', 'discount', 'sale', 'offer']
	},
	GiftIcon: {
		name: 'Gift',
		category: 'Business',
		keywords: ['hediye', 'kutlama', 'özel', 'paket', 'gift', 'present', 'celebration']
	},
	DollarSignIcon: {
		name: 'Dollar Sign',
		category: 'Business',
		keywords: ['dolar', 'para', 'ödeme', 'fiyat', 'dollar', 'money', 'payment', 'price']
	},

	// Düzenleme İkonları
	Edit2Icon: {
		name: 'Edit 2',
		category: 'Development',
		keywords: ['düzenle', 'kalem', 'yazı', 'not', 'edit', 'write', 'modify']
	},
	Edit3Icon: {
		name: 'Edit 3',
		category: 'Development',
		keywords: ['düzenle', 'kalem', 'yazı', 'not', 'edit', 'write', 'modify']
	},
	ItalicIcon: {
		name: 'Italic',
		category: 'Development',
		keywords: ['italik', 'yazı tipi', 'metin', 'italic', 'font', 'text']
	},

	// Diğer İkonlar
	BellIcon: {
		name: 'Bell',
		category: 'Other',
		keywords: ['zil', 'bildirim', 'uyarı', 'bell', 'notification', 'alert']
	},
	CalendarIcon: {
		name: 'Calendar',
		category: 'Other',
		keywords: ['takvim', 'tarih', 'ajanda', 'calendar', 'date', 'schedule']
	},
	ClockIcon: {
		name: 'Clock',
		category: 'Other',
		keywords: ['saat', 'zaman', 'süre', 'clock', 'time', 'duration']
	},
	StarIcon: {
		name: 'Star',
		category: 'Other',
		keywords: ['yıldız', 'favori', 'beğeni', 'star', 'favorite', 'rating']
	},
	HeartIcon: {
		name: 'Heart',
		category: 'Other',
		keywords: ['kalp', 'beğeni', 'favori', 'heart', 'like', 'love']
	},
	SettingsIcon: {
		name: 'Settings',
		category: 'Other',
		keywords: ['ayarlar', 'tercihler', 'yapılandırma', 'settings', 'preferences', 'config']
	},
	HashIcon: {
		name: 'Hash',
		category: 'Other',
		keywords: ['diyez', 'kare', 'etiket', 'numara', 'hash', 'hashtag', 'number']
	},
	LifeBuoyIcon: {
		name: 'Life Buoy',
		category: 'Other',
		keywords: ['can simidi', 'yardım', 'destek', 'help', 'support', 'assistance']
	},
	BookmarkIcon: {
		name: 'Bookmark',
		category: 'Interface',
		keywords: ['yer imi', 'kaydet', 'işaretle', 'bookmark', 'save', 'mark']
	},

	// Temel İkonlar - Ek
	ExternalLinkIcon: {
		name: 'External Link',
		category: 'Interface',
		keywords: ['bağlantı', 'link', 'dış bağlantı', 'external', 'url', 'website']
	},
	DropletIcon: {
		name: 'Droplet',
		category: 'Other',
		keywords: ['damla', 'su', 'renk', 'droplet', 'water', 'color']
	},
	HelpCircleIcon: {
		name: 'Help Circle',
		category: 'Interface',
		keywords: ['yardım', 'soru', 'bilgi', 'destek', 'help', 'question', 'info', 'support']
	},
	InfoIcon: {
		name: 'Info',
		category: 'Interface',
		keywords: ['bilgi', 'yardım', 'açıklama', 'info', 'information', 'help']
	},
	HexagonIcon: {
		name: 'Hexagon',
		category: 'Other',
		keywords: ['altıgen', 'şekil', 'geometri', 'hexagon', 'shape', 'geometry']
	},

	// Güvenlik
	KeyIcon: {
		name: 'Key',
		category: 'Other',
		keywords: ['anahtar', 'şifre', 'güvenlik', 'key', 'password', 'security']
	}
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
