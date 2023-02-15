import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Baza obywateli',
    icon: 'people-outline',
    link: '/pages/tables/smart-table',
  },
  {
    title: 'Odciski palców',
    icon: 'radio-button-on-outline',
    link: '/pages/fingerprints'
  },
  {
    title: 'Namierzanie numerów',
    icon: 'phone-call-outline',
    link: '/pages/phones'
  },
];
