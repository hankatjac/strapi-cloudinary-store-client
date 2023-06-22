import LocalMallIcon from '@mui/icons-material/LocalMall';
import React from 'react';
const sublinks = [
  {
    page: 'products',
    links: [
      { label: 'Featured', icon: <LocalMallIcon />, url: '/featured-products' },
      { label: 'Trending', icon: <LocalMallIcon />, url: '/trending-products' },
   
    ],
  },
  {
    page: 'category',
    links: [
      { label: 'Blouse', icon: <LocalMallIcon />, url: '/products/1' },
      { label: 'Skirt', icon: <LocalMallIcon />, url: '/products/2' },
      { label: 'Heel', icon: <LocalMallIcon />, url: '/products/5' },
      { label: 'Bag', icon: <LocalMallIcon />, url: '/products/4' },
      { label: 'Boots', icon: <LocalMallIcon />, url: '/products/3' },
    ],
  },
  {
    page: 'company',
    links: [
      { label: 'about', icon: <LocalMallIcon />, url: '/products' },
      { label: 'contact', icon: <LocalMallIcon />, url: '/products' },
    ],
  },
];

export default sublinks;
