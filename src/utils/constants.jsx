import {
  FaBirthdayCake,
  FaClipboardCheck,
  FaGifts,
  FaTruckMoving,
} from 'react-icons/fa'

export const links = [
  { id: 1, url: '/shop', pathName: 'shop' },
  { id: 2, url: '/about', pathName: 'about' },
  { id: 3, url: '/custom', pathName: 'custom' },
  { id: 4, url: '/contact', pathName: 'contact' },
]

export const products_url = 'https://course-api.com/react-store-products'

export const single_product_url = `https://course-api.com/react-store-single-product?id=`

export const deliverySteps = [
  {
    id: 1,
    icon: <FaClipboardCheck />,
    title: 'Order confirmation',
    desc: 'We ensure your order is detailed and specific',
  },
  {
    id: 2,
    icon: <FaBirthdayCake />,
    title: 'Oven Bake',
    desc: 'Our chefs prepare your fresh treats and desserts',
  },
  {
    id: 3,
    icon: <FaGifts />,
    title: 'Packaging',
    desc: 'Your treats gets package with climate friendly wraps',
  },
  {
    id: 4,
    icon: <FaTruckMoving />,
    title: 'Free Delivery',
    desc: 'Your order gets delivered in record time',
  },
]
