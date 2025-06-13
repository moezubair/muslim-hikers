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
          text: 'Beginners Guide to Leading a Hike',
          href: getPermalink('/guides/leading')
        },
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
        },
      ]
    },
    {
      text: 'Challenges',
      href: getPermalink('/challenges')
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
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://fb.com/groups/muslimoutdooradventures' },
    { ariaLabel: 'Strava', icon: 'tabler:brand-strava', href: 'https://www.strava.com/clubs/muslimoutdooradventures' },
  ],
  actions: [
    { text: 'Donate', href: 'https://donate.stripe.com/3csg2d1bX2A3dHO144', target: '_blank' }
  ],
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
      {
        text: 'Membership',
        href: getPermalink('/membership')
      },
      {
        text: 'Donate',
        href: 'https://donate.stripe.com/3csg2d1bX2A3dHO144'
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
      },
      {
        text: 'Guide to Leading a Hike',
        href: getPermalink('/guides/leading')
      },
      {
        text: 'Suggest an activity',
        href: getPermalink('/suggest')
      }
    ]
  },
  {
    title: 'Club Challenges',
    links: [
      {
        text: '2024 - Ramadan Challenge',
        href: getPermalink('/ramadan-challenge')
      },
      {
        text: 'Bruce Trail Challenge',
        href: getPermalink('/challenges#hike-the-entire-bruce-trail')
      },
      {
        text: 'Wilderness Challenge',
        href: getPermalink('/challenges#a-week-in-the-wilderness')
      },
      {
        text: 'Natural Leader Challenge',
        href: getPermalink('/challenges#natural-leader')
      },
    ]
  }
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/muslimoutdooradventures' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://fb.com/groups/muslimoutdooradventures' },
    { ariaLabel: 'Strava', icon: 'tabler:brand-strava', href: 'https://www.strava.com/clubs/muslimoutdooradventures' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  secondaryLinks: [
    {text: ''}
  ],
  footNote: '© ' + (new Date()).getFullYear() + ` Muslim Outdoor Adventures. All rights reserved. <br /><small><small>The information on this site might not be accurate or up-to-date. Use any information provided at your own risk.</small></small>`
};
