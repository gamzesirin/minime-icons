import { Icon } from '@/types/Icon'
import * as Icons from '@/icons'
import { SparklesIcon } from '@/icons/SparklesIcon'
import { LayoutGridIcon } from '@/icons/LayoutGridIcon'
import { LayoutListIcon } from '@/icons/LayoutListIcon'
import { LayoutColumnsIcon } from '@/icons/LayoutColumnsIcon'
import { ChevronUpIcon } from '@/icons/ChevronUpIcon'
import { ChevronDownIcon } from '@/icons/ChevronDownIcon'
import { CursorClickIcon } from '@/icons/CursorClickIcon'

export const categories = [
	'Temel',
	'Medya',
	'Dosya',
	'Kullanıcı',
	'İletişim',
	'Sosyal Medya',
	'Düzen',
	'Navigasyon',
	'Etkileşim',
	'Diğer'
] as const

export type Category = (typeof categories)[number]

export interface IconData {
	id: string
	name: string
	component: Icon
	category: Category
	tags: string[]
}

export const IconList: IconData[] = [
	// Temel İkonlar
	{
		id: 'home',
		name: 'HomeIcon',
		component: Icons.HomeIcon,
		category: 'Temel',
		tags: ['ev', 'ana sayfa', 'başlangıç']
	},
	{
		id: 'search',
		name: 'SearchIcon',
		component: Icons.SearchIcon,
		category: 'Temel',
		tags: ['arama', 'bul', 'ara']
	},
	{
		id: 'menu',
		name: 'MenuIcon',
		component: Icons.MenuIcon,
		category: 'Temel',
		tags: ['menü', 'hamburger', 'liste']
	},
	{
		id: 'close',
		name: 'CloseIcon',
		component: Icons.CloseIcon,
		category: 'Temel',
		tags: ['kapat', 'çarpı', 'iptal']
	},
	{
		id: 'arrow-left',
		name: 'ArrowLeftIcon',
		component: Icons.ArrowLeftIcon,
		category: 'Temel',
		tags: ['ok', 'sol', 'geri']
	},
	{
		id: 'arrow-right',
		name: 'ArrowRightIcon',
		component: Icons.ArrowRightIcon,
		category: 'Temel',
		tags: ['ok', 'sağ', 'ileri']
	},
	{
		id: 'arrow-up',
		name: 'ArrowUpIcon',
		component: Icons.ArrowUpIcon,
		category: 'Temel',
		tags: ['ok', 'yukarı', 'üst']
	},
	{
		id: 'arrow-down',
		name: 'ArrowDownIcon',
		component: Icons.ArrowDownIcon,
		category: 'Temel',
		tags: ['ok', 'aşağı', 'alt']
	},

	// Medya İkonları
	{
		id: 'image',
		name: 'ImageIcon',
		component: Icons.ImageIcon,
		category: 'Medya',
		tags: ['resim', 'fotoğraf', 'görsel']
	},
	{
		id: 'video',
		name: 'VideoIcon',
		component: Icons.VideoIcon,
		category: 'Medya',
		tags: ['video', 'film', 'medya']
	},
	{
		id: 'music',
		name: 'MusicIcon',
		component: Icons.MusicIcon,
		category: 'Medya',
		tags: ['müzik', 'ses', 'nota']
	},
	{
		id: 'play',
		name: 'PlayIcon',
		component: Icons.PlayIcon,
		category: 'Medya',
		tags: ['oynat', 'başlat', 'play']
	},
	{
		id: 'pause',
		name: 'PauseIcon',
		component: Icons.PauseIcon,
		category: 'Medya',
		tags: ['duraklat', 'beklet', 'pause']
	},
	{
		id: 'stop',
		name: 'StopIcon',
		component: Icons.StopIcon,
		category: 'Medya',
		tags: ['durdur', 'bitir', 'stop']
	},

	// Dosya İkonları
	{
		id: 'file',
		name: 'FileIcon',
		component: Icons.FileIcon,
		category: 'Dosya',
		tags: ['dosya', 'belge', 'döküman']
	},
	{
		id: 'folder',
		name: 'FolderIcon',
		component: Icons.FolderIcon,
		category: 'Dosya',
		tags: ['klasör', 'dizin', 'folder']
	},
	{
		id: 'edit',
		name: 'EditIcon',
		component: Icons.EditIcon,
		category: 'Dosya',
		tags: ['düzenle', 'kalem', 'edit']
	},
	{
		id: 'save',
		name: 'SaveIcon',
		component: Icons.SaveIcon,
		category: 'Dosya',
		tags: ['kaydet', 'save', 'diskete']
	},
	{
		id: 'trash',
		name: 'TrashIcon',
		component: Icons.TrashIcon,
		category: 'Dosya',
		tags: ['çöp', 'sil', 'delete']
	},

	// Kullanıcı İkonları
	{
		id: 'user',
		name: 'UserIcon',
		component: Icons.UserIcon,
		category: 'Kullanıcı',
		tags: ['kullanıcı', 'profil', 'hesap']
	},
	{
		id: 'users',
		name: 'UsersIcon',
		component: Icons.UsersIcon,
		category: 'Kullanıcı',
		tags: ['kullanıcılar', 'grup', 'topluluk']
	},
	{
		id: 'user-plus',
		name: 'UserPlusIcon',
		component: Icons.UserPlusIcon,
		category: 'Kullanıcı',
		tags: ['kullanıcı ekle', 'yeni üye', 'davet']
	},
	{
		id: 'user-minus',
		name: 'UserMinusIcon',
		component: Icons.UserMinusIcon,
		category: 'Kullanıcı',
		tags: ['kullanıcı çıkar', 'üye sil', 'kaldır']
	},

	// İletişim İkonları
	{
		id: 'mail',
		name: 'MailIcon',
		component: Icons.MailIcon,
		category: 'İletişim',
		tags: ['mail', 'email', 'posta']
	},
	{
		id: 'phone',
		name: 'PhoneIcon',
		component: Icons.PhoneIcon,
		category: 'İletişim',
		tags: ['telefon', 'ara', 'call']
	},
	{
		id: 'phone-call',
		name: 'PhoneCallIcon',
		component: Icons.PhoneCallIcon,
		category: 'İletişim',
		tags: ['telefon', 'arama', 'çağrı']
	},
	{
		id: 'phone-incoming',
		name: 'PhoneIncomingIcon',
		component: Icons.PhoneIncomingIcon,
		category: 'İletişim',
		tags: ['gelen arama', 'telefon', 'çağrı']
	},
	{
		id: 'phone-outgoing',
		name: 'PhoneOutgoingIcon',
		component: Icons.PhoneOutgoingIcon,
		category: 'İletişim',
		tags: ['giden arama', 'telefon', 'çağrı']
	},
	{
		id: 'phone-missed',
		name: 'PhoneMissedIcon',
		component: Icons.PhoneMissedIcon,
		category: 'İletişim',
		tags: ['cevapsız arama', 'telefon', 'çağrı']
	},

	// Sosyal Medya İkonları
	{
		id: 'twitter',
		name: 'TwitterIcon',
		component: Icons.TwitterIcon,
		category: 'Sosyal Medya',
		tags: ['twitter', 'x', 'sosyal medya']
	},
	{
		id: 'github',
		name: 'GithubIcon',
		component: Icons.GithubIcon,
		category: 'Sosyal Medya',
		tags: ['github', 'git', 'kod']
	},
	{
		id: 'linkedin',
		name: 'LinkedinIcon',
		component: Icons.LinkedinIcon,
		category: 'Sosyal Medya',
		tags: ['linkedin', 'iş', 'profesyonel']
	},

	// Düzen kategorisi için yeni ikonlar
	{
		id: 'layout-grid',
		name: 'LayoutGridIcon',
		component: LayoutGridIcon,
		category: 'Düzen',
		tags: ['grid', 'ızgara', 'düzen']
	},
	{
		id: 'layout-list',
		name: 'LayoutListIcon',
		component: LayoutListIcon,
		category: 'Düzen',
		tags: ['liste', 'düzen']
	},
	{
		id: 'layout-columns',
		name: 'LayoutColumnsIcon',
		component: LayoutColumnsIcon,
		category: 'Düzen',
		tags: ['sütunlar', 'düzen']
	},

	// Navigasyon kategorisi için yeni ikonlar
	{
		id: 'chevron-up',
		name: 'ChevronUpIcon',
		component: ChevronUpIcon,
		category: 'Navigasyon',
		tags: ['yukarı', 'ok']
	},
	{
		id: 'chevron-down',
		name: 'ChevronDownIcon',
		component: ChevronDownIcon,
		category: 'Navigasyon',
		tags: ['aşağı', 'ok']
	},

	// Etkileşim kategorisi için yeni ikonlar
	{
		id: 'sparkles',
		name: 'SparklesIcon',
		component: SparklesIcon,
		category: 'Etkileşim',
		tags: ['parıltı', 'yıldız', 'efekt']
	},
	{
		id: 'cursor-click',
		name: 'CursorClickIcon',
		component: CursorClickIcon,
		category: 'Etkileşim',
		tags: ['tıklama', 'imleç']
	},

	// Diğer İkonlar
	{
		id: 'bell',
		name: 'BellIcon',
		component: Icons.BellIcon,
		category: 'Diğer',
		tags: ['zil', 'bildirim', 'uyarı']
	},
	{
		id: 'calendar',
		name: 'CalendarIcon',
		component: Icons.CalendarIcon,
		category: 'Diğer',
		tags: ['takvim', 'tarih', 'ajanda']
	},
	{
		id: 'clock',
		name: 'ClockIcon',
		component: Icons.ClockIcon,
		category: 'Diğer',
		tags: ['saat', 'zaman', 'süre']
	},
	{
		id: 'star',
		name: 'StarIcon',
		component: Icons.StarIcon,
		category: 'Diğer',
		tags: ['yıldız', 'favori', 'beğeni']
	},
	{
		id: 'heart',
		name: 'HeartIcon',
		component: Icons.HeartIcon,
		category: 'Diğer',
		tags: ['kalp', 'beğeni', 'favori']
	},
	{
		id: 'settings',
		name: 'SettingsIcon',
		component: Icons.SettingsIcon,
		category: 'Diğer',
		tags: ['ayarlar', 'tercihler', 'yapılandırma']
	},
	{
		id: 'tag',
		name: 'TagIcon',
		component: Icons.TagIcon,
		category: 'Diğer',
		tags: ['etiket', 'fiyat', 'işaret']
	},
	{
		id: 'credit-card',
		name: 'CreditCardIcon',
		component: Icons.CreditCardIcon,
		category: 'Diğer',
		tags: ['kredi kartı', 'ödeme', 'banka']
	},
	{
		id: 'shopping-cart',
		name: 'ShoppingCartIcon',
		component: Icons.ShoppingCartIcon,
		category: 'Diğer',
		tags: ['sepet', 'alışveriş', 'market']
	}
]
