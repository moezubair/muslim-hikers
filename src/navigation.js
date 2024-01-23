import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'About Us',
      href: getPermalink('/about')
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'Resources',
      links: [
        {
          text: 'Rules and Etiquettes',
          href: getPermalink('/rules')
        },
        {
          text: 'Harrasement Policy',
          href: getPermalink('/harassment')
        },
        {
          text: 'Waiver',
          href: 'https://forms.gle/FHFrn1w41DoCPJGD9',
        }
      ]
    },
    {
      text: 'Survey',
      href: getPermalink('/survey')
    },

    // {
    //   text: 'Join the Team',
    //   links:[
    //     {
    //       text: 'Website Developer',
    //       href: getPermalink('/roles/webdev'),
    //     },
    //   ]
    // }
    
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/muslimoutdooradventures' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://fb.com/groups/muslim.hikers.ontario' },
    { ariaLabel: 'Strava', icon: 'tabler:brand-strava', href: 'https://www.strava.com/clubs/muslimoutdooradventures' },
  ],
  actions: [{ text: 'Events', href: 'https://fb.com/groups/muslim.hikers.ontario', target: '_blank' }],
};

export const footerData = {
  links: [{
    title: 'Company',
    links: [
      {
        text: 'About Us',
        href: getPermalink('/about')
      },
      {
        text: 'Privacy Policy',
        href: getPermalink('/privacy')
      },
    ]
  },
  {
    title: 'Resources',
    links: [
      {
        text: 'Waiver',
        href: getPermalink('/waiver')
      },
      {
        text: 'Rules and Etiquettes',
        href: getPermalink('/rules')
      },
      {
        text: 'Harrasement Policy',
        href: getPermalink('/harassment')
      }
    ]
  },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/muslimoutdooradventures' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://fb.com/groups/muslim.hikers.ontario' },
    { ariaLabel: 'Strava', icon: 'tabler:brand-strava', href: 'https://www.strava.com/clubs/muslimoutdooradventures' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  secondaryLinks: [
    {text: ''}
  ],
  footNote: '© ' + (new Date()).getFullYear() + ` Muslim Outdoor Adventures. All rights reserved. <br /><small><small>The information on this site might not be accurate or up-to-date. Use any information provided at your own risk.</small></small>`
};
