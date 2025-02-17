import { ArrowDownIcon } from '@/components/icons/ArrowDownIcon'
import { ArrowLeftIcon } from '@/components/icons/ArrowLeftIcon'
import { ArrowRightIcon } from '@/components/icons/ArrowRightIcon'
import { ArrowUpIcon } from '@/components/icons/ArrowUpIcon'
import { BellIcon } from '@/components/icons/BellIcon'
import { CalendarIcon } from '@/components/icons/CalendarIcon'
import { ChevronDownIcon } from '@/components/icons/ChevronDownIcon'
import { ChevronUpIcon } from '@/components/icons/ChevronUpIcon'
import { ClockIcon } from '@/components/icons/ClockIcon'
import { CloseIcon } from '@/components/icons/CloseIcon'
import { CreditCardIcon } from '@/components/icons/CreditCardIcon'
import { CursorClickIcon } from '@/components/icons/CursorClickIcon'
import { EditIcon } from '@/components/icons/EditIcon'
import { FileIcon } from '@/components/icons/FileIcon'
import { FolderIcon } from '@/components/icons/FolderIcon'
import { GithubIcon } from '@/components/icons/GithubIcon'
import { HeartIcon } from '@/components/icons/HeartIcon'
import { HomeIcon } from '@/components/icons/HomeIcon'
import { ImageIcon } from '@/components/icons/ImageIcon'
import { LayoutColumnsIcon } from '@/components/icons/LayoutColumnsIcon'
import { LayoutGridIcon } from '@/components/icons/LayoutGridIcon'
import { LayoutListIcon } from '@/components/icons/LayoutListIcon'
import { LinkedinIcon } from '@/components/icons/LinkedinIcon'
import { MailIcon } from '@/components/icons/MailIcon'
import { MenuIcon } from '@/components/icons/MenuIcon'
import { MusicIcon } from '@/components/icons/MusicIcon'
import { PauseIcon } from '@/components/icons/PauseIcon'
import { PhoneCallIcon } from '@/components/icons/PhoneCallIcon'
import { PhoneIcon } from '@/components/icons/PhoneIcon'
import { PhoneIncomingIcon } from '@/components/icons/PhoneIncomingIcon'
import { PhoneMissedIcon } from '@/components/icons/PhoneMissedIcon'
import { PhoneOutgoingIcon } from '@/components/icons/PhoneOutgoingIcon'
import { PlayIcon } from '@/components/icons/PlayIcon'
import { SaveIcon } from '@/components/icons/SaveIcon'
import { SearchIcon } from '@/components/icons/SearchIcon'
import { SettingsIcon } from '@/components/icons/SettingsIcon'
import { ShoppingCartIcon } from '@/components/icons/ShoppingCartIcon'
import { SparklesIcon } from '@/components/icons/SparklesIcon'
import { StarIcon } from '@/components/icons/StarIcon'
import { StopIcon } from '@/components/icons/StopIcon'
import { TagIcon } from '@/components/icons/TagIcon'
import { TrashIcon } from '@/components/icons/TrashIcon'
import { TwitterIcon } from '@/components/icons/TwitterIcon'
import { UserIcon } from '@/components/icons/UserIcon'
import { UserMinusIcon } from '@/components/icons/UserMinusIcon'
import { UserPlusIcon } from '@/components/icons/UserPlusIcon'
import { UsersIcon } from '@/components/icons/UsersIcon'
import { VideoIcon } from '@/components/icons/VideoIcon'
import { Icon } from '@/types/Icon-type'

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
		component: HomeIcon,
		category: 'Temel',
		tags: ['ev', 'ana sayfa', 'başlangıç']
	},
	{
		id: 'search',
		name: 'SearchIcon',
		component: SearchIcon,
		category: 'Temel',
		tags: ['arama', 'bul', 'ara']
	},
	{
		id: 'menu',
		name: 'MenuIcon',
		component: MenuIcon,
		category: 'Temel',
		tags: ['menü', 'hamburger', 'liste']
	},
	{
		id: 'close',
		name: 'CloseIcon',
		component: CloseIcon,
		category: 'Temel',
		tags: ['kapat', 'çarpı', 'iptal']
	},
	{
		id: 'arrow-left',
		name: 'ArrowLeftIcon',
		component: ArrowLeftIcon,
		category: 'Temel',
		tags: ['ok', 'sol', 'geri']
	},
	{
		id: 'arrow-right',
		name: 'ArrowRightIcon',
		component: ArrowRightIcon,
		category: 'Temel',
		tags: ['ok', 'sağ', 'ileri']
	},
	{
		id: 'arrow-up',
		name: 'ArrowUpIcon',
		component: ArrowUpIcon,
		category: 'Temel',
		tags: ['ok', 'yukarı', 'üst']
	},
	{
		id: 'arrow-down',
		name: 'ArrowDownIcon',
		component: ArrowDownIcon,
		category: 'Temel',
		tags: ['ok', 'aşağı', 'alt']
	},

	// Medya İkonları
	{
		id: 'image',
		name: 'ImageIcon',
		component: ImageIcon,
		category: 'Medya',
		tags: ['resim', 'fotoğraf', 'görsel']
	},
	{
		id: 'video',
		name: 'VideoIcon',
		component: VideoIcon,
		category: 'Medya',
		tags: ['video', 'film', 'medya']
	},
	{
		id: 'music',
		name: 'MusicIcon',
		component: MusicIcon,
		category: 'Medya',
		tags: ['müzik', 'ses', 'nota']
	},
	{
		id: 'play',
		name: 'PlayIcon',
		component: PlayIcon,
		category: 'Medya',
		tags: ['oynat', 'başlat', 'play']
	},
	{
		id: 'pause',
		name: 'PauseIcon',
		component: PauseIcon,
		category: 'Medya',
		tags: ['duraklat', 'beklet', 'pause']
	},
	{
		id: 'stop',
		name: 'StopIcon',
		component: StopIcon,
		category: 'Medya',
		tags: ['durdur', 'bitir', 'stop']
	},

	// Dosya İkonları
	{
		id: 'file',
		name: 'FileIcon',
		component: FileIcon,
		category: 'Dosya',
		tags: ['dosya', 'belge', 'döküman']
	},
	{
		id: 'folder',
		name: 'FolderIcon',
		component: FolderIcon,
		category: 'Dosya',
		tags: ['klasör', 'dizin', 'folder']
	},
	{
		id: 'edit',
		name: 'EditIcon',
		component: EditIcon,
		category: 'Dosya',
		tags: ['düzenle', 'kalem', 'edit']
	},
	{
		id: 'save',
		name: 'SaveIcon',
		component: SaveIcon,
		category: 'Dosya',
		tags: ['kaydet', 'save', 'diskete']
	},
	{
		id: 'trash',
		name: 'TrashIcon',
		component: TrashIcon,
		category: 'Dosya',
		tags: ['çöp', 'sil', 'delete']
	},

	// Kullanıcı İkonları
	{
		id: 'user',
		name: 'UserIcon',
		component: UserIcon,
		category: 'Kullanıcı',
		tags: ['kullanıcı', 'profil', 'hesap']
	},
	{
		id: 'users',
		name: 'UsersIcon',
		component: UsersIcon,
		category: 'Kullanıcı',
		tags: ['kullanıcılar', 'grup', 'topluluk']
	},
	{
		id: 'user-plus',
		name: 'UserPlusIcon',
		component: UserPlusIcon,
		category: 'Kullanıcı',
		tags: ['kullanıcı ekle', 'yeni üye', 'davet']
	},
	{
		id: 'user-minus',
		name: 'UserMinusIcon',
		component: UserMinusIcon,
		category: 'Kullanıcı',
		tags: ['kullanıcı çıkar', 'üye sil', 'kaldır']
	},

	// İletişim İkonları
	{
		id: 'mail',
		name: 'MailIcon',
		component: MailIcon,
		category: 'İletişim',
		tags: ['mail', 'email', 'posta']
	},
	{
		id: 'phone',
		name: 'PhoneIcon',
		component: PhoneIcon,
		category: 'İletişim',
		tags: ['telefon', 'ara', 'call']
	},
	{
		id: 'phone-call',
		name: 'PhoneCallIcon',
		component: PhoneCallIcon,
		category: 'İletişim',
		tags: ['telefon', 'arama', 'çağrı']
	},
	{
		id: 'phone-incoming',
		name: 'PhoneIncomingIcon',
		component: PhoneIncomingIcon,
		category: 'İletişim',
		tags: ['gelen arama', 'telefon', 'çağrı']
	},
	{
		id: 'phone-outgoing',
		name: 'PhoneOutgoingIcon',
		component: PhoneOutgoingIcon,
		category: 'İletişim',
		tags: ['giden arama', 'telefon', 'çağrı']
	},
	{
		id: 'phone-missed',
		name: 'PhoneMissedIcon',
		component: PhoneMissedIcon,
		category: 'İletişim',
		tags: ['cevapsız arama', 'telefon', 'çağrı']
	},

	// Sosyal Medya İkonları
	{
		id: 'twitter',
		name: 'TwitterIcon',
		component: TwitterIcon,
		category: 'Sosyal Medya',
		tags: ['twitter', 'x', 'sosyal medya']
	},
	{
		id: 'github',
		name: 'GithubIcon',
		component: GithubIcon,
		category: 'Sosyal Medya',
		tags: ['github', 'git', 'kod']
	},
	{
		id: 'linkedin',
		name: 'LinkedinIcon',
		component: LinkedinIcon,
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
		component: BellIcon,
		category: 'Diğer',
		tags: ['zil', 'bildirim', 'uyarı']
	},
	{
		id: 'calendar',
		name: 'CalendarIcon',
		component: CalendarIcon,
		category: 'Diğer',
		tags: ['takvim', 'tarih', 'ajanda']
	},
	{
		id: 'clock',
		name: 'ClockIcon',
		component: ClockIcon,
		category: 'Diğer',
		tags: ['saat', 'zaman', 'süre']
	},
	{
		id: 'star',
		name: 'StarIcon',
		component: StarIcon,
		category: 'Diğer',
		tags: ['yıldız', 'favori', 'beğeni']
	},
	{
		id: 'heart',
		name: 'HeartIcon',
		component: HeartIcon,
		category: 'Diğer',
		tags: ['kalp', 'beğeni', 'favori']
	},
	{
		id: 'settings',
		name: 'SettingsIcon',
		component: SettingsIcon,
		category: 'Diğer',
		tags: ['ayarlar', 'tercihler', 'yapılandırma']
	},
	{
		id: 'tag',
		name: 'TagIcon',
		component: TagIcon,
		category: 'Diğer',
		tags: ['etiket', 'fiyat', 'işaret']
	},
	{
		id: 'credit-card',
		name: 'CreditCardIcon',
		component: CreditCardIcon,
		category: 'Diğer',
		tags: ['kredi kartı', 'ödeme', 'banka']
	},
	{
		id: 'shopping-cart',
		name: 'ShoppingCartIcon',
		component: ShoppingCartIcon,
		category: 'Diğer',
		tags: ['sepet', 'alışveriş', 'market']
	}
]
