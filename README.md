# @gamzesirin/minime-icons

Modern ve minimal tasarlanmış SVG ikon kütüphanesi. React ve Next.js projelerinizde kolayca kullanabileceğiniz 100+ güzel ikon.

[![npm version](https://img.shields.io/npm/v/@gamzesirin/minime-icons)](https://www.npmjs.com/package/@gamzesirin/minime-icons)
[![npm downloads](https://img.shields.io/npm/dm/@gamzesirin/minime-icons)](https://www.npmjs.com/package/@gamzesirin/minime-icons)
[![license](https://img.shields.io/github/license/gamzesirin/minime-icons)](https://github.com/gamzesirin/minime-icons/blob/main/LICENSE)

## ✨ Özellikler

- **🎨 Modern & Minimal**: Her ihtiyaca uygun, temiz ve minimal tasarlanmış SVG ikonlar
- **⚡ Yüksek Performans**: Optimize edilmiş SVG dosyalar ile maksimum performans
- **🎛️ Özelleştirilebilir**: Boyut, renk ve çizgi kalınlığı gibi özellikleri kolayca değiştirin
- **📦 Kolay Entegrasyon**: React, Next.js ve diğer modern framework'ler ile hızlı entegrasyon
- **🔍 Arama Destekli**: Kategoriler ve anahtar kelimeler ile kolayca ikon arayın
- **📱 Responsive**: Tüm ekran boyutlarında mükemmel görünüm
- **🌙 Dark Mode**: Karanlık tema desteği
- **💯 TypeScript**: Tam TypeScript desteği

## 📦 Kurulum

```bash
npm install @gamzesirin/minime-icons
```

```bash
yarn add @gamzesirin/minime-icons
```

```bash
pnpm add @gamzesirin/minime-icons
```

## 🚀 Kullanım

### Temel Kullanım

```tsx
import { HomeIcon, SearchIcon, UserIcon } from '@gamzesirin/minime-icons'

function App() {
  return (
    <div>
      <HomeIcon />
      <SearchIcon size={24} />
      <UserIcon color="#3B82F6" strokeWidth={1.5} />
    </div>
  )
}
```

### Icon Props

Tüm ikonlar aşağıdaki props'ları destekler:

```tsx
interface IconProps {
  size?: number        // İkon boyutu (varsayılan: 24)
  color?: string       // İkon rengi (varsayılan: currentColor)  
  strokeWidth?: number // Çizgi kalınlığı (varsayılan: 2)
  className?: string   // CSS sınıfı
  style?: CSSProperties // Inline stil
  // ...diğer SVG props'ları
}
```

### Kullanım Örnekleri

```tsx
// Boyut özelleştirme
<HomeIcon size={32} />

// Renk özelleştirme  
<SearchIcon color="#10B981" />

// Çizgi kalınlığı
<UserIcon strokeWidth={1.5} />

// CSS sınıfı ile
<HeartIcon className="text-red-500 hover:scale-110 transition-transform" />

// Inline stil ile
<StarIcon style={{ color: '#F59E0B', fontSize: '2rem' }} />
```

### Mevcut İkonlar

#### 🏠 Temel İkonlar
- `HomeIcon` - Ana sayfa
- `SearchIcon` - Arama
- `MenuIcon` - Menü  
- `CloseIcon` - Kapat
- `SettingsIcon` - Ayarlar

#### ➡️ Ok İkonları
- `ArrowLeftIcon`, `ArrowRightIcon`, `ArrowUpIcon`, `ArrowDownIcon`
- `ChevronUpIcon`, `ChevronDownIcon`

#### 🎵 Medya İkonları
- `PlayIcon`, `PauseIcon`, `StopIcon`
- `MusicIcon`, `VideoIcon`, `HeadphonesIcon`

#### 📁 Dosya İkonları
- `FileIcon`, `FolderIcon`, `SaveIcon`
- `DownloadIcon`, `DownloadCloudIcon`, `TrashIcon`

#### 👤 Kullanıcı İkonları
- `UserIcon`, `UsersIcon`
- `UserPlusIcon`, `UserMinusIcon`

#### 📞 İletişim İkonları
- `MailIcon`, `PhoneIcon`, `PhoneCallIcon`
- `PhoneIncomingIcon`, `PhoneOutgoingIcon`, `PhoneMissedIcon`

#### 🌐 Sosyal Medya İkonları
- `TwitterIcon`, `GithubIcon`, `LinkedinIcon`
- `InstagramIcon`, `DribbbleIcon`

#### 🛒 E-ticaret İkonları
- `ShoppingCartIcon`, `CreditCardIcon`, `TagIcon`
- `PackageIcon`, `GiftIcon`, `DiscountIcon`

Ve daha fazlası! [Tüm ikonları görmek için demo siteyi ziyaret edin](https://minime-icons.vercel.app/icons).

**Toplam:** 100+ ikon mevcut

### Kategori ve Arama

```tsx
import { 
  IconList, 
  categories,
  getIconsByCategory, 
  searchIcons 
} from '@gamzesirin/minime-icons'

// Tüm ikonları listele
console.log(IconList)

// Kategorileri listele  
console.log(categories)

// Medya kategorisindeki ikonları al
const mediaIcons = getIconsByCategory('Media')

// İkon ara
const searchResults = searchIcons('home')
```

## 🎨 Demo ve Dökümantasyon

[**🌐 Demo Sitesi**](https://minime-icons.vercel.app) - Tüm ikonları keşfedin ve interaktif olarak test edin

- 📋 [Kurulum](https://minime-icons.vercel.app/docs/installation)
- 🚀 [Başlangıç](https://minime-icons.vercel.app/docs/getting-started)
- 🎨 [Özelleştirme](https://minime-icons.vercel.app/docs/customization)
- ℹ️ [Hakkında](https://minime-icons.vercel.app/docs/about)

## 💻 Geliştirme

```bash
# Projeyi klonlayın
git clone https://github.com/gamzesirin/minime-icons.git

# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev

# Kütüphaneyi derleyin
npm run build:lib
```

## 🤝 Katkıda Bulunma

Katkılarınızı memnuniyetle karşılıyoruz! 

1. Bu repository'yi fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'feat: add amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request açın

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasını inceleyin.

## 👤 Yazar

**Gamze Şirin**

- GitHub: [@gamzesirin](https://github.com/gamzesirin)
- Website: [gamzesirin.com](https://gamzesirin.com)

## 🙏 Teşekkürler

- Tüm katkıda bulunan geliştiricilere
- React ve Next.js ekiplerine
- Açık kaynak topluluğuna

---

❤️ Made with love by [Gamze Şirin](https://gamzesirin.com)
