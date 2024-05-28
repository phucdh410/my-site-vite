import house_1 from '../assets/house-1.png';
import house_2 from '../assets/house-2.png';
import house_3 from '../assets/house-3.png';
import house_4 from '../assets/house-4.png';
import house_5 from '../assets/house-5.jpg';
import house_6 from '../assets/house-6.jpg';
import house_7 from '../assets/house-7.jpg';
import house_8 from '../assets/house-8.jpg';
import house_9 from '../assets/house-9.jpg';
import house_10 from '../assets/house-10.jpg';
import house_11 from '../assets/house-11.jpg';
import house_12 from '../assets/house-12.jpg';
import { TAGS_OF_APARTMENT, TYPES_OF_APARTMENT } from '../types';

export interface IData {
  id: string;
  name: string;
  price: number;
  tag: TAGS_OF_APARTMENT;
  type_of_apartment: TYPES_OF_APARTMENT;
  image: string;
  owner: {
    name: string;
    address: string;
    avatar: string;
  };
}

export const DATA: IData[] = [
  {
    id: '1',
    name: 'Roselands House',
    price: 35000000,
    tag: TAGS_OF_APARTMENT.Popular,
    type_of_apartment: TYPES_OF_APARTMENT.House,
    image: house_1,
    owner: {
      name: 'Dianne Russell',
      address: 'Manchester, Kentucky',
      avatar: '/assets/images/avatars/avatar_1.jpg',
    },
  },
  {
    id: '2',
    name: 'Woolandside',
    price: 20000000,
    tag: TAGS_OF_APARTMENT.New,
    type_of_apartment: TYPES_OF_APARTMENT.Villa,
    image: house_2,
    owner: {
      name: 'Robert Fox',
      address: 'Dr. San Jose, South Dakota',
      avatar: '/assets/images/avatars/avatar_2.jpg',
    },
  },
  {
    id: '3',
    name: 'The Old Lighthouse',
    price: 44000000,
    tag: TAGS_OF_APARTMENT.Deal,
    type_of_apartment: TYPES_OF_APARTMENT.Apartment,
    image: house_3,
    owner: {
      name: 'Ronald Richards',
      address: 'Santa Ana, Illinois',
      avatar: '/assets/images/avatars/avatar_3.jpg',
    },
  },
  {
    id: '4',
    name: 'Cosmo"s House',
    price: 22000000,
    tag: TAGS_OF_APARTMENT.Popular,
    type_of_apartment: TYPES_OF_APARTMENT.House,
    image: house_4,
    owner: {
      name: 'Jenny Wilson',
      address: 'Preston Rd. Inglewood, Maine 98380',
      avatar: '/assets/images/avatars/avatar_4.jpg',
    },
  },
  {
    id: '5',
    name: 'Lakeview Mansion',
    price: 56000000,
    tag: TAGS_OF_APARTMENT.Deal,
    type_of_apartment: TYPES_OF_APARTMENT.Villa,
    image: house_5,
    owner: {
      name: 'Emily Brown',
      address: 'Seattle, Washington',
      avatar: '/assets/images/avatars/avatar_5.jpg',
    },
  },
  {
    id: '6',
    name: 'Hilltop Cottage',
    price: 31000000,
    tag: TAGS_OF_APARTMENT.New,
    type_of_apartment: TYPES_OF_APARTMENT.Apartment,
    image: house_6,
    owner: {
      name: 'Michael Johnson',
      address: 'Denver, Colorado',
      avatar: '/assets/images/avatars/avatar_6.jpg',
    },
  },
  {
    id: '7',
    name: 'Riverfront Estate',
    price: 45000000,
    tag: TAGS_OF_APARTMENT.New,
    type_of_apartment: TYPES_OF_APARTMENT.House,
    image: house_7,
    owner: {
      name: 'Olivia Martinez',
      address: 'Miami, Florida',
      avatar: '/assets/images/avatars/avatar_7.jpg',
    },
  },
  {
    id: '8',
    name: 'Mountain Retreat',
    price: 33000000,
    tag: TAGS_OF_APARTMENT.Popular,
    type_of_apartment: TYPES_OF_APARTMENT.Villa,
    image: house_8,
    owner: {
      name: 'David Wilson',
      address: 'Aspen, Colorado',
      avatar: '/assets/images/avatars/avatar_8.jpg',
    },
  },
  {
    id: '9',
    name: 'Urban Loft',
    price: 22000000,
    tag: TAGS_OF_APARTMENT.Deal,
    type_of_apartment: TYPES_OF_APARTMENT.Apartment,
    image: house_9,
    owner: {
      name: 'Sophia Davis',
      address: 'New York, New York',
      avatar: '/assets/images/avatars/avatar_9.jpg',
    },
  },
  {
    id: '10',
    name: 'Garden House',
    price: 27000000,
    tag: TAGS_OF_APARTMENT.Popular,
    type_of_apartment: TYPES_OF_APARTMENT.House,
    image: house_10,
    owner: {
      name: 'Liam Thompson',
      address: 'Portland, Oregon',
      avatar: '/assets/images/avatars/avatar_10.jpg',
    },
  },
  {
    id: '11',
    name: 'Sunset Villa',
    price: 38000000,
    tag: TAGS_OF_APARTMENT.New,
    type_of_apartment: TYPES_OF_APARTMENT.Villa,
    image: house_11,
    owner: {
      name: 'Ava Miller',
      address: 'Santa Monica, California',
      avatar: '/assets/images/avatars/avatar_11.jpg',
    },
  },
  {
    id: '12',
    name: 'Coastal Haven',
    price: 47000000,
    tag: TAGS_OF_APARTMENT.Deal,
    type_of_apartment: TYPES_OF_APARTMENT.Apartment,
    image: house_12,
    owner: {
      name: 'Ethan Anderson',
      address: 'Charleston, South Carolina',
      avatar: '/assets/images/avatars/avatar_12.jpg',
    },
  },
];
