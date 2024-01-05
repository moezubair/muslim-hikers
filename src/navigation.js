import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'Waiver',
      href: 'https://forms.gle/FHFrn1w41DoCPJGD9',
    },
    {
      text: 'Join the Team',
      links:[
        {
          text: 'Social Media Coordinator',
          href: getPermalink('/roles/social-media'),
        },
        {
          text: 'Website Developer',
          href: getPermalink('/roles/webdev'),
        },
      ]
    }
    
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/muslim.hikers.ontario' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://fb.com/groups/muslim.hikers.ontario' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  actions: [{ text: 'Events', href: 'https://fb.com/groups/muslim.hikers.ontario', target: '_blank' }],
};

export const footerData = {
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/muslim.hikers.ontario' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://fb.com/groups/muslim.hikers.ontario' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: ``
};
