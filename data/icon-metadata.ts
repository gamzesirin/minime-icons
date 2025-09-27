import { IconMetadata } from '@/lib'

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
	},

	// Interface - Yeni ikonlar
	EyeIcon: {
		name: 'Eye',
		category: 'Interface',
		keywords: ['göz', 'görünür', 'görüntüle', 'eye', 'view', 'visible', 'show']
	},
	EyeOffIcon: {
		name: 'Eye Off',
		category: 'Interface',
		keywords: ['göz', 'gizle', 'görünmez', 'eye', 'hide', 'invisible', 'hidden']
	},
	FilterIcon: {
		name: 'Filter',
		category: 'Interface',
		keywords: ['filtre', 'süz', 'seç', 'filter', 'sort', 'select']
	},
	SortIcon: {
		name: 'Sort',
		category: 'Interface',
		keywords: ['sırala', 'düzen', 'sort', 'order', 'arrange']
	},
	RefreshIcon: {
		name: 'Refresh',
		category: 'Interface',
		keywords: ['yenile', 'güncelle', 'tekrar', 'refresh', 'reload', 'update']
	},
	MoreHorizontalIcon: {
		name: 'More Horizontal',
		category: 'Interface',
		keywords: ['daha fazla', 'menü', 'seçenekler', 'more', 'menu', 'options']
	},
	MoreVerticalIcon: {
		name: 'More Vertical',
		category: 'Interface',
		keywords: ['daha fazla', 'menü', 'seçenekler', 'more', 'menu', 'options']
	},
	GridIcon: {
		name: 'Grid',
		category: 'Interface',
		keywords: ['grid', 'ızgara', 'tablo', 'düzen', 'layout']
	},

	// Business - Yeni ikonlar
	BriefcaseIcon: {
		name: 'Briefcase',
		category: 'Business',
		keywords: ['çanta', 'iş', 'evrak', 'briefcase', 'work', 'business']
	},
	TrendingUpIcon: {
		name: 'Trending Up',
		category: 'Business',
		keywords: ['artış', 'yükseliş', 'trend', 'up', 'growth', 'increase']
	},
	TrendingDownIcon: {
		name: 'Trending Down',
		category: 'Business',
		keywords: ['düşüş', 'azalış', 'trend', 'down', 'decrease', 'decline']
	},
	BarChartIcon: {
		name: 'Bar Chart',
		category: 'Business',
		keywords: ['grafik', 'çubuk', 'istatistik', 'chart', 'statistics', 'data']
	},
	PieChartIcon: {
		name: 'Pie Chart',
		category: 'Business',
		keywords: ['pasta grafik', 'istatistik', 'veri', 'pie', 'chart', 'statistics']
	},
	AwardIcon: {
		name: 'Award',
		category: 'Business',
		keywords: ['ödül', 'başarı', 'madalya', 'award', 'achievement', 'medal']
	},

	// Weather - Yeni ikonlar
	SunIcon: {
		name: 'Sun',
		category: 'Weather',
		keywords: ['güneş', 'aydınlık', 'gündüz', 'sun', 'sunny', 'day']
	},
	MoonIcon: {
		name: 'Moon',
		category: 'Weather',
		keywords: ['ay', 'gece', 'karanlık', 'moon', 'night', 'dark']
	},
	CloudIcon: {
		name: 'Cloud',
		category: 'Weather',
		keywords: ['bulut', 'hava', 'bulutlu', 'cloud', 'weather', 'cloudy']
	},
	CloudRainIcon: {
		name: 'Cloud Rain',
		category: 'Weather',
		keywords: ['yağmur', 'bulut', 'sağanak', 'rain', 'shower', 'weather']
	},
	ZapIcon: {
		name: 'Zap',
		category: 'Weather',
		keywords: ['şimşek', 'elektrik', 'enerji', 'zap', 'lightning', 'energy']
	},

	// Development - Yeni ikonlar
	TerminalIcon: {
		name: 'Terminal',
		category: 'Development',
		keywords: ['terminal', 'konsol', 'komut', 'command', 'console', 'cli']
	},
	DatabaseIcon: {
		name: 'Database',
		category: 'Development',
		keywords: ['veritabanı', 'veri', 'depolama', 'database', 'data', 'storage']
	},
	GitBranchIcon: {
		name: 'Git Branch',
		category: 'Development',
		keywords: ['git', 'dal', 'branch', 'version', 'control']
	},
	BugIcon: {
		name: 'Bug',
		category: 'Development',
		keywords: ['hata', 'böcek', 'debug', 'bug', 'error', 'issue']
	},
	ServerIcon: {
		name: 'Server',
		category: 'Development',
		keywords: ['sunucu', 'server', 'host', 'network', 'infrastructure']
	},

	// Communication - Yeni ikonlar
	MessageCircleIcon: {
		name: 'Message Circle',
		category: 'Communication',
		keywords: ['mesaj', 'sohbet', 'konuşma', 'message', 'chat', 'conversation']
	},
	MessageSquareIcon: {
		name: 'Message Square',
		category: 'Communication',
		keywords: ['mesaj', 'sohbet', 'konuşma', 'message', 'chat', 'conversation']
	},
	SendIcon: {
		name: 'Send',
		category: 'Communication',
		keywords: ['gönder', 'ilet', 'send', 'submit', 'deliver']
	},
	WifiIcon: {
		name: 'Wifi',
		category: 'Communication',
		keywords: ['wifi', 'internet', 'bağlantı', 'wireless', 'connection']
	},

	// Other - Yeni ikonlar
	LockIcon: {
		name: 'Lock',
		category: 'Other',
		keywords: ['kilit', 'güvenlik', 'koruma', 'lock', 'security', 'protection']
	},
	UnlockIcon: {
		name: 'Unlock',
		category: 'Other',
		keywords: ['kilit aç', 'güvenlik', 'erişim', 'unlock', 'access', 'open']
	},
	ShieldIcon: {
		name: 'Shield',
		category: 'Other',
		keywords: ['kalkan', 'koruma', 'güvenlik', 'shield', 'protection', 'security']
	},
	MapPinIcon: {
		name: 'Map Pin',
		category: 'Other',
		keywords: ['konum', 'pin', 'harita', 'location', 'map', 'position']
	},
	GlobeIcon: {
		name: 'Globe',
		category: 'Other',
		keywords: ['dünya', 'küre', 'global', 'globe', 'world', 'earth']
	},
	CameraIcon: {
		name: 'Camera',
		category: 'Other',
		keywords: ['kamera', 'fotoğraf', 'çek', 'camera', 'photo', 'picture']
	},

	// Arrows - Yeni ikonlar
	CornerDownLeftIcon: {
		name: 'Corner Down Left',
		category: 'Arrows',
		keywords: ['köşe', 'sol', 'aşağı', 'corner', 'left', 'down']
	},
	CornerDownRightIcon: {
		name: 'Corner Down Right',
		category: 'Arrows',
		keywords: ['köşe', 'sağ', 'aşağı', 'corner', 'right', 'down']
	},
	RotateCwIcon: {
		name: 'Rotate Clockwise',
		category: 'Arrows',
		keywords: ['döndür', 'saat yönü', 'rotate', 'clockwise', 'turn']
	},

	// Development - Yeni ikonlar
	ApiIcon: {
		name: 'API',
		category: 'Development',
		keywords: ['api', 'arayüz', 'programlama', 'interface', 'integration']
	},
	CpuIcon: {
		name: 'CPU',
		category: 'Development',
		keywords: ['cpu', 'işlemci', 'donanım', 'hardware', 'processor']
	},
	MonitorIcon: {
		name: 'Monitor',
		category: 'Development',
		keywords: ['monitör', 'ekran', 'bilgisayar', 'screen', 'display']
	},
	SmartphoneIcon: {
		name: 'Smartphone',
		category: 'Development',
		keywords: ['telefon', 'akıllı telefon', 'mobil', 'mobile', 'device']
	},
	TabletIcon: {
		name: 'Tablet',
		category: 'Development',
		keywords: ['tablet', 'mobil', 'cihaz', 'device', 'touchscreen']
	},
	HardHatIcon: {
		name: 'Hard Hat',
		category: 'Development',
		keywords: ['baret', 'inşaat', 'güvenlik', 'construction', 'safety']
	},
	WrenchIcon: {
		name: 'Wrench',
		category: 'Development',
		keywords: ['anahtar', 'tamir', 'araç', 'tool', 'repair']
	},
	Package2Icon: {
		name: 'Package 2',
		category: 'Development',
		keywords: ['paket', 'kutu', 'teslimat', 'box', 'delivery']
	},

	// Interface - Yeni ikonlar
	ToggleLeftIcon: {
		name: 'Toggle Left',
		category: 'Interface',
		keywords: ['aç kapat', 'sol', 'toggle', 'switch', 'off']
	},
	ToggleRightIcon: {
		name: 'Toggle Right',
		category: 'Interface',
		keywords: ['aç kapat', 'sağ', 'toggle', 'switch', 'on']
	},
	SlidersIcon: {
		name: 'Sliders',
		category: 'Interface',
		keywords: ['kaydırıcı', 'ayar', 'kontrol', 'settings', 'control']
	},
	AlertTriangleIcon: {
		name: 'Alert Triangle',
		category: 'Interface',
		keywords: ['uyarı', 'dikkat', 'tehlike', 'warning', 'danger']
	},
	AlertCircleIcon: {
		name: 'Alert Circle',
		category: 'Interface',
		keywords: ['uyarı', 'bilgi', 'dikkat', 'alert', 'warning']
	},
	CheckCircleIcon: {
		name: 'Check Circle',
		category: 'Interface',
		keywords: ['onay', 'başarılı', 'tik', 'success', 'approved']
	},
	XCircleIcon: {
		name: 'X Circle',
		category: 'Interface',
		keywords: ['hata', 'kapat', 'iptal', 'error', 'cancel']
	},

	// Media - Yeni ikonlar
	VolumeIcon: {
		name: 'Volume',
		category: 'Media',
		keywords: ['ses', 'hoparlör', 'volume', 'speaker', 'sound']
	},
	VolumeXIcon: {
		name: 'Volume X',
		category: 'Media',
		keywords: ['sessiz', 'kapalı', 'mute', 'silent', 'off']
	},
	SkipBackIcon: {
		name: 'Skip Back',
		category: 'Media',
		keywords: ['geri', 'önceki', 'previous', 'back', 'rewind']
	},
	SkipForwardIcon: {
		name: 'Skip Forward',
		category: 'Media',
		keywords: ['ileri', 'sonraki', 'next', 'forward', 'skip']
	},
	MicIcon: {
		name: 'Microphone',
		category: 'Media',
		keywords: ['mikrofon', 'ses', 'kayıt', 'record', 'voice']
	},
	MicOffIcon: {
		name: 'Microphone Off',
		category: 'Media',
		keywords: ['mikrofon kapalı', 'sessiz', 'mute', 'silent']
	},

	// Transportation - Yeni ikonlar
	CarIcon: {
		name: 'Car',
		category: 'Other',
		keywords: ['araba', 'otomobil', 'araç', 'vehicle', 'transport']
	},
	PlaneIcon: {
		name: 'Plane',
		category: 'Other',
		keywords: ['uçak', 'havayolu', 'seyahat', 'flight', 'travel']
	},
	TrainIcon: {
		name: 'Train',
		category: 'Other',
		keywords: ['tren', 'ray', 'ulaşım', 'railway', 'transport']
	},
	BusIcon: {
		name: 'Bus',
		category: 'Other',
		keywords: ['otobüs', 'toplu taşıma', 'ulaşım', 'public', 'transport']
	},
	BikeIcon: {
		name: 'Bike',
		category: 'Other',
		keywords: ['bisiklet', 'pedal', 'spor', 'cycle', 'exercise']
	},
	NavigationIcon: {
		name: 'Navigation',
		category: 'Other',
		keywords: ['navigasyon', 'yön', 'konum', 'direction', 'location']
	},

	// Shopping - Yeni ikonlar
	WalletIcon: {
		name: 'Wallet',
		category: 'Business',
		keywords: ['cüzdan', 'para', 'ödeme', 'money', 'payment']
	},
	PercentIcon: {
		name: 'Percent',
		category: 'Business',
		keywords: ['yüzde', 'indirim', 'oran', 'discount', 'rate']
	},
	ReceiptIcon: {
		name: 'Receipt',
		category: 'Business',
		keywords: ['fiş', 'makbuz', 'fatura', 'invoice', 'bill']
	},
	StoreIcon: {
		name: 'Store',
		category: 'Business',
		keywords: ['mağaza', 'dükkân', 'alışveriş', 'shop', 'retail']
	},
	TruckIcon: {
		name: 'Truck',
		category: 'Business',
		keywords: ['kamyon', 'nakliye', 'teslimat', 'delivery', 'shipping']
	},

	// Food & Health - Yeni ikonlar
	CoffeeIcon: {
		name: 'Coffee',
		category: 'Other',
		keywords: ['kahve', 'içecek', 'fincan', 'drink', 'beverage']
	},
	PizzaIcon: {
		name: 'Pizza',
		category: 'Other',
		keywords: ['pizza', 'yemek', 'italyan', 'food', 'italian']
	},
	AppleIcon: {
		name: 'Apple',
		category: 'Other',
		keywords: ['elma', 'meyve', 'sağlık', 'fruit', 'healthy']
	},
	HeartPulseIcon: {
		name: 'Heart Pulse',
		category: 'Other',
		keywords: ['kalp', 'nabız', 'sağlık', 'health', 'medical']
	},

	// Editor & Text - Yeni ikonlar
	BoldIcon: {
		name: 'Bold',
		category: 'Development',
		keywords: ['kalın', 'yazı', 'metin', 'text', 'formatting']
	},
	UnderlineIcon: {
		name: 'Underline',
		category: 'Development',
		keywords: ['altı çizili', 'yazı', 'metin', 'text', 'formatting']
	},
	AlignLeftIcon: {
		name: 'Align Left',
		category: 'Development',
		keywords: ['sola hizala', 'metin', 'düzen', 'text', 'alignment']
	},
	AlignCenterIcon: {
		name: 'Align Center',
		category: 'Development',
		keywords: ['ortaya hizala', 'metin', 'düzen', 'text', 'alignment']
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
