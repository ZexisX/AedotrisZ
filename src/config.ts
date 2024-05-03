import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: 'Aedotris | Blog',
  subtitle: 'Aedotris | Blog',
  lang: 'en',
  themeHue: 250,
  banner: {
    enable: false,
    src: 'assets/images/demo-banner.png',
  },
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About,
    {
      name: 'GitHub',
      url: 'https://github.com/levinhkhangzz/AedotrisZ',
      external: true,
    },
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'https://i.ibb.co/QnnHWWW/IMG-8490.jpg',
  name: 'Aedotris',
  bio: 'I am a guy passionate about software creativity.',
  links: [
    {
      name: 'Twitter',
      icon: 'fa6-brands:twitter',
      url: 'https://twitter.com/A3d0tr1sZ',
    },
    {
      name: 'Github',
      icon: 'fa6-brands:steam',
      url: 'https://github.com/levinhkhangzz',
    },
    {
      name: 'Facebook',
      icon: 'fa6-brands:facebook',
      url: 'https://www.facebook.com/profile.php?id=199717642',
    },
    {
      name: 'Instagram',
      icon: 'fa6-brands:instagram',
      url: 'https://www.instagram.com/williamcachamwri',
    },
        {
      name: 'Telegram',
      icon: 'fa6-brands:telegram',
      url: 'https://t.me/NotYourParentsX',
    },
    
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}
