export interface MenuItem {
  id: string;
  name: string;
  description: string;
  imagePath?: string;
  featured?: boolean;
}

export const menuItems: MenuItem[] = [
  {
    id: 'jumbo-turkey-legs',
    name: 'Jumbo Turkey Legs',
    description: 'Giant, juicy turkey legs smoked to perfection. A festival classic!',
    imagePath: '/images/menu/turkey_chicken_leg.png',
    featured: true,
  },
  {
    id: 'blooming-onions',
    name: 'Blooming Onions',
    description: 'Crispy, golden-fried onion petals served with our signature dipping sauce.',
    imagePath: '/images/menu/blooming_onion.png',
    featured: true,
  },
  {
    id: 'philly-steak',
    name: 'Philly Steak',
    description: 'Tender sliced beef with peppers, onions, and melted cheese on a toasted roll.',
    imagePath: '/images/menu/cheese_steak.png',
    featured: true,
  },
  {
    id: 'chicken-fingers',
    name: 'Chicken Fingers',
    description: 'Crispy breaded chicken tenders served with golden fries and your choice of sauce.',
    imagePath: '/images/menu/chicken_fingers_with_fries.png',
    featured: true,
  },
  {
    id: 'funnel-cake',
    name: 'Funnel Cake',
    description: 'Light, crispy fried dough dusted with powdered sugar. A sweet carnival treat!',
    imagePath: '/images/menu/funnel_cake.png',
    featured: true,
  },
  {
    id: 'loaded-fries',
    name: 'Loaded Fries',
    description: 'Crispy fries topped with cheese, bacon, and all your favorite toppings.',
    imagePath: '/images/menu/loaded_fries.png',
    featured: true,
  },
  {
    id: 'loaded-nachos-supreme',
    name: 'Loaded Nachos Supreme',
    description: 'Crispy tortilla chips piled high with cheese, jalapeños, sour cream, and more.',
    imagePath: '/images/menu/loaded_nachos_supreme.png',
    featured: true,
  },
  {
    id: 'loaded-ribbon-fries',
    name: 'Loaded Ribbon Fries',
    description: 'Spiral-cut potato ribbons, fried golden and loaded with your favorite toppings.',
    featured: false,
  },
  {
    id: 'bratwurst',
    name: 'Bratwurst',
    description: 'Authentic German sausage grilled to perfection with sauerkraut and mustard.',
    featured: false,
  },
  {
    id: 'doner-kebab',
    name: 'Doner Kebab',
    description: 'Savory spiced meat wrapped in warm pita with fresh vegetables and sauce.',
    featured: false,
  },
  {
    id: 'kielbasa',
    name: 'Kielbasa',
    description: 'Polish smoked sausage served with peppers and onions on a fresh bun.',
    featured: false,
  },
  {
    id: 'chicken-sandwich',
    name: 'Chicken Sandwich',
    description: 'Grilled or fried chicken breast with lettuce, tomato, and mayo on a toasted bun.',
    featured: false,
  },
  {
    id: 'fried-candies',
    name: 'Fried Candies',
    description: 'Your favorite candy bars battered and deep-fried to gooey perfection.',
    featured: false,
  },
  {
    id: 'pronto-pup',
    name: 'Pronto Pup (Medium or Jumbo)',
    description: 'Classic corn dog on a stick - available in medium or jumbo size.',
    featured: false,
  },
  {
    id: 'ribbon-fries',
    name: 'Ribbon Fries',
    description: 'Spiral-cut potato ribbons fried until perfectly crispy and golden.',
    featured: false,
  },
  {
    id: 'signature-platter',
    name: 'Signature Platter',
    description: 'A hearty combination of our most popular items. Perfect for sharing!',
    featured: false,
  },
];
