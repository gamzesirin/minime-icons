import * as react from 'react';
import react__default, { SVGProps } from 'react';

interface IconProps extends SVGProps<SVGSVGElement> {
    size?: number;
    color?: string;
    strokeWidth?: number;
}
type Icon = React.FC<IconProps>;
type IconCategory = 'Arrows' | 'Interface' | 'Communication' | 'Business' | 'Development' | 'Media' | 'Social' | 'Weather' | 'Other';
interface IconMetadata {
    name: string;
    category: IconCategory;
    keywords: string[];
}

declare function ArrowDownIcon({ size, color, strokeWidth }: IconProps): react.JSX.Element;

declare function ArrowLeftIcon({ size, color, strokeWidth }: IconProps): react.JSX.Element;

declare function ArrowRightIcon({ size, color, strokeWidth }: IconProps): react.JSX.Element;

declare function ArrowUpIcon({ size, color, strokeWidth }: IconProps): react.JSX.Element;

declare function ChevronDownIcon({ size, color, strokeWidth }: IconProps): react.JSX.Element;

declare function ChevronUpIcon({ size, color, strokeWidth }: IconProps): react.JSX.Element;

declare const AbIcon: ({ size, color, strokeWidth }: IconProps) => react.JSX.Element;

declare const BookmarkIcon: ({ size, color, strokeWidth }: IconProps) => react.JSX.Element;

declare const CheckIcon: ({ size, color, strokeWidth }: IconProps) => react.JSX.Element;

declare const CloseIcon: ({ size, color, strokeWidth }: IconProps) => react.JSX.Element;

declare const CodeIcon: react__default.FC<IconProps>;

declare function CursorClickIcon({ size, color, strokeWidth }: IconProps): react.JSX.Element;

declare const DropletIcon: ({ size, color, strokeWidth }: IconProps) => react.JSX.Element;

declare const ExternalLinkIcon: ({ size, color, strokeWidth }: IconProps) => react.JSX.Element;

declare const HelpCircleIcon: ({ size, color, strokeWidth }: IconProps) => react.JSX.Element;

declare const HexagonIcon: ({ size, color, strokeWidth }: IconProps) => react.JSX.Element;

declare function HomeIcon({ size, color, strokeWidth }: IconProps): react.JSX.Element;

declare const InfoIcon: ({ size, color, strokeWidth }: IconProps) => react.JSX.Element;

declare const InputCursorMoveIcon: ({ size, color, strokeWidth }: IconProps) => react.JSX.Element;

declare function LayoutColumnsIcon({ size, color, strokeWidth }: IconProps): react.JSX.Element;

declare function LayoutGridIcon({ size, color, strokeWidth }: IconProps): react.JSX.Element;

declare const LayoutIcon: ({ size, color, strokeWidth }: IconProps) => react.JSX.Element;

declare function LayoutListIcon({ size, color, strokeWidth }: IconProps): react.JSX.Element;

declare const LayersIcon: ({ size, color, strokeWidth }: IconProps) => react.JSX.Element;

declare const Link2Icon: ({ size, color, strokeWidth }: IconProps) => react.JSX.Element;

declare const LinkIcon: ({ size, color, strokeWidth }: IconProps) => react.JSX.Element;

declare const ListIcon: ({ size, color, strokeWidth }: IconProps) => react.JSX.Element;

declare const LoaderIcon: ({ size, color, strokeWidth }: IconProps) => react.JSX.Element;

declare const MenuIcon: ({ size, color, strokeWidth }: IconProps) => react.JSX.Element;

declare const MinusIcon: ({ size, color, strokeWidth }: IconProps) => react.JSX.Element;

declare const PlusIcon: ({ size, color, strokeWidth }: IconProps) => react.JSX.Element;

declare function SearchIcon({ size, color, strokeWidth }: IconProps): react.JSX.Element;

declare function SparklesIcon({ size, color, strokeWidth }: IconProps): react.JSX.Element;

declare const HeadphonesIcon: ({ size, color, strokeWidth }: IconProps) => react.JSX.Element;

declare const MusicIcon: ({ size, color, strokeWidth }: IconProps) => react.JSX.Element;

declare const PauseIcon: ({ size, color, strokeWidth }: IconProps) => react.JSX.Element;

declare function PlayIcon({ size, color, strokeWidth }: IconProps): react.JSX.Element;

declare const StopIcon: ({ size, color, strokeWidth }: IconProps) => react.JSX.Element;

declare const VideoIcon: ({ size, color, strokeWidth }: IconProps) => react.JSX.Element;

declare const DownloadCloudIcon: ({ size, color, strokeWidth }: IconProps) => react.JSX.Element;

declare const DownloadIcon: ({ size, color, strokeWidth }: IconProps) => react.JSX.Element;

declare const EditIcon: ({ size, color, strokeWidth }: IconProps) => react.JSX.Element;

declare const Edit2Icon: ({ size, color, strokeWidth }: IconProps) => react.JSX.Element;

declare const Edit3Icon: ({ size, color, strokeWidth }: IconProps) => react.JSX.Element;

declare const FileIcon: ({ size, color, strokeWidth }: IconProps) => react.JSX.Element;

declare const FolderIcon: ({ size, color, strokeWidth }: IconProps) => react.JSX.Element;

declare const HardDriveIcon: ({ size, color, strokeWidth }: IconProps) => react.JSX.Element;

declare const ImageIcon: ({ size, color, strokeWidth }: IconProps) => react.JSX.Element;

declare const InboxIcon: ({ size, color, strokeWidth }: IconProps) => react.JSX.Element;

declare const SaveIcon: ({ size, color, strokeWidth }: IconProps) => react.JSX.Element;

declare const TrashIcon: ({ size, color, strokeWidth }: IconProps) => react.JSX.Element;

declare const CashIcon: ({ size, color, strokeWidth }: IconProps) => react.JSX.Element;

declare const CoinIcon: ({ size, color, strokeWidth }: IconProps) => react.JSX.Element;

declare const CreditCardIcon: ({ size, color, strokeWidth }: IconProps) => react.JSX.Element;

declare const DiscountIcon: ({ size, color, strokeWidth }: IconProps) => react.JSX.Element;

declare const DollarSignIcon: ({ size, color, strokeWidth }: IconProps) => react.JSX.Element;

declare const FundsIcon: ({ size, color, strokeWidth }: IconProps) => react.JSX.Element;

declare const GiftIcon: ({ size, color, strokeWidth }: IconProps) => react.JSX.Element;

declare const MoneyDollarBoxIcon: ({ size, color, strokeWidth }: IconProps) => react.JSX.Element;

declare const MoneyDollarCircleIcon: ({ size, color, strokeWidth }: IconProps) => react.JSX.Element;

declare const MoneyEuroBoxIcon: ({ size, color, strokeWidth }: IconProps) => react.JSX.Element;

declare const MoneyEuroCircleIcon: ({ size, color, strokeWidth }: IconProps) => react.JSX.Element;

declare const PackageIcon: ({ size, color, strokeWidth }: IconProps) => react.JSX.Element;

declare function ShoppingCartIcon({ size, color, strokeWidth }: IconProps): react.JSX.Element;

declare const TagIcon: ({ size, color, strokeWidth }: IconProps) => react.JSX.Element;

declare function BellIcon({ size, color, strokeWidth }: IconProps): react.JSX.Element;

declare function MailIcon({ size, color, strokeWidth }: IconProps): react.JSX.Element;

declare const PhoneCallIcon: ({ size, color, strokeWidth }: IconProps) => react__default.JSX.Element;

declare const PhoneIcon: ({ size, color, strokeWidth }: IconProps) => react.JSX.Element;

declare const PhoneIncomingIcon: ({ size, color, strokeWidth }: IconProps) => react__default.JSX.Element;

declare const PhoneMissedIcon: ({ size, color, strokeWidth }: IconProps) => react__default.JSX.Element;

declare const PhoneOutgoingIcon: ({ size, color, strokeWidth }: IconProps) => react__default.JSX.Element;

declare const UserIcon: ({ size, color, strokeWidth }: IconProps) => react__default.JSX.Element;

declare const UserMinusIcon: ({ size, color, strokeWidth }: IconProps) => react__default.JSX.Element;

declare const UserPlusIcon: ({ size, color, strokeWidth }: IconProps) => react__default.JSX.Element;

declare const UsersIcon: ({ size, color, strokeWidth }: IconProps) => react__default.JSX.Element;

declare const DribbbleIcon: ({ size, color, strokeWidth }: IconProps) => react.JSX.Element;

declare const GithubIcon: ({ size, color, strokeWidth }: IconProps) => react.JSX.Element;

declare const InstagramIcon: ({ size, color, strokeWidth }: IconProps) => react.JSX.Element;

declare const LinkedinIcon: ({ size, color, strokeWidth }: IconProps) => react.JSX.Element;

declare const TwitterIcon: ({ size, color, strokeWidth }: IconProps) => react.JSX.Element;

declare const EnglishInputIcon: ({ size, color, strokeWidth }: IconProps) => react.JSX.Element;

declare const PinyinInputIcon: ({ size, color, strokeWidth }: IconProps) => react.JSX.Element;

declare const WubiInputIcon: ({ size, color, strokeWidth }: IconProps) => react.JSX.Element;

declare const TranslateIcon: ({ size, color, strokeWidth }: IconProps) => react.JSX.Element;

declare const TranslateAiIcon: ({ size, color, strokeWidth }: IconProps) => react.JSX.Element;

declare const Translate2Icon: ({ size, color, strokeWidth }: IconProps) => react.JSX.Element;

declare const TranslateAi2Icon: ({ size, color, strokeWidth }: IconProps) => react.JSX.Element;

declare const Exchange2Icon: ({ size, color, strokeWidth }: IconProps) => react.JSX.Element;

declare const SwapIcon: ({ size, color, strokeWidth }: IconProps) => react.JSX.Element;

declare const SwapBoxIcon: ({ size, color, strokeWidth }: IconProps) => react.JSX.Element;

declare const WaterFlashIcon: ({ size, color, strokeWidth }: IconProps) => react.JSX.Element;

declare const Number0Icon: ({ size, color, strokeWidth }: IconProps) => react.JSX.Element;

declare const Number1Icon: ({ size, color, strokeWidth }: IconProps) => react.JSX.Element;

declare const Number2Icon: ({ size, color, strokeWidth }: IconProps) => react.JSX.Element;

declare const Number3Icon: ({ size, color, strokeWidth }: IconProps) => react.JSX.Element;

declare const Number4Icon: ({ size, color, strokeWidth }: IconProps) => react.JSX.Element;

declare const Number5Icon: ({ size, color, strokeWidth }: IconProps) => react.JSX.Element;

declare const Number6Icon: ({ size, color, strokeWidth }: IconProps) => react.JSX.Element;

declare const Number7Icon: ({ size, color, strokeWidth }: IconProps) => react.JSX.Element;

declare const Number8Icon: ({ size, color, strokeWidth }: IconProps) => react.JSX.Element;

declare const Number9Icon: ({ size, color, strokeWidth }: IconProps) => react.JSX.Element;

declare function CalendarIcon({ size, color, strokeWidth }: IconProps): react.JSX.Element;

declare function ClockIcon({ size, color, strokeWidth }: IconProps): react.JSX.Element;

declare const HashIcon: ({ size, color, strokeWidth }: IconProps) => react.JSX.Element;

declare const HeartIcon: ({ size, color, strokeWidth }: IconProps) => react.JSX.Element;

declare const ItalicIcon: ({ size, color, strokeWidth }: IconProps) => react.JSX.Element;

declare const KeyIcon: ({ size, color, strokeWidth }: IconProps) => react.JSX.Element;

declare const LifeBuoyIcon: ({ size, color, strokeWidth }: IconProps) => react.JSX.Element;

declare function SettingsIcon({ size, color, strokeWidth }: IconProps): react.JSX.Element;

declare function StarIcon({ size, color, strokeWidth }: IconProps): react.JSX.Element;

declare const categories: readonly ["Temel", "Medya", "Dosya", "Kullanıcı", "İletişim", "Sosyal Medya", "Düzen", "Navigasyon", "Etkileşim", "E-ticaret", "Düzenleme", "Diğer", "Güvenlik"];
type Category = (typeof categories)[number];
interface IconData {
    id: string;
    name: string;
    component: Icon;
    category: Category;
    tags: string[];
}
declare const IconList: IconData[];

declare const iconMetadata: Record<string, IconMetadata>;
declare const getIconsByCategory: (category?: string) => IconMetadata[];
declare const searchIcons: (query: string) => IconMetadata[];
declare const getAllCategories: () => IconCategory[];

export { AbIcon, ArrowDownIcon, ArrowLeftIcon, ArrowRightIcon, ArrowUpIcon, BellIcon, BookmarkIcon, CalendarIcon, CashIcon, type Category, CheckIcon, ChevronDownIcon, ChevronUpIcon, ClockIcon, CloseIcon, CodeIcon, CoinIcon, CreditCardIcon, CursorClickIcon, DiscountIcon, DollarSignIcon, DownloadCloudIcon, DownloadIcon, DribbbleIcon, DropletIcon, Edit2Icon, Edit3Icon, EditIcon, EnglishInputIcon, Exchange2Icon, ExternalLinkIcon, FileIcon, FolderIcon, FundsIcon, GiftIcon, GithubIcon, HardDriveIcon, HashIcon, HeadphonesIcon, HeartIcon, HelpCircleIcon, HexagonIcon, HomeIcon, type Icon, type IconCategory, type IconData, IconList, type IconMetadata, type IconProps, ImageIcon, InboxIcon, InfoIcon, InputCursorMoveIcon, InstagramIcon, ItalicIcon, KeyIcon, LayersIcon, LayoutColumnsIcon, LayoutGridIcon, LayoutIcon, LayoutListIcon, LifeBuoyIcon, Link2Icon, LinkIcon, LinkedinIcon, ListIcon, LoaderIcon, MailIcon, MenuIcon, MinusIcon, MoneyDollarBoxIcon, MoneyDollarCircleIcon, MoneyEuroBoxIcon, MoneyEuroCircleIcon, MusicIcon, Number0Icon, Number1Icon, Number2Icon, Number3Icon, Number4Icon, Number5Icon, Number6Icon, Number7Icon, Number8Icon, Number9Icon, PackageIcon, PauseIcon, PhoneCallIcon, PhoneIcon, PhoneIncomingIcon, PhoneMissedIcon, PhoneOutgoingIcon, PinyinInputIcon, PlayIcon, PlusIcon, SaveIcon, SearchIcon, SettingsIcon, ShoppingCartIcon, SparklesIcon, StarIcon, StopIcon, SwapBoxIcon, SwapIcon, TagIcon, Translate2Icon, TranslateAi2Icon, TranslateAiIcon, TranslateIcon, TrashIcon, TwitterIcon, UserIcon, UserMinusIcon, UserPlusIcon, UsersIcon, VideoIcon, WaterFlashIcon, WubiInputIcon, categories, getAllCategories, getIconsByCategory, iconMetadata, searchIcons };
