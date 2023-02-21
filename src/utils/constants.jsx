import { FaBirthdayCake, FaClipboardList, FaTruckMoving } from 'react-icons/fa'

export const links = [
  { id: 1, url: '/shop', pathName: 'shop' },
  { id: 2, url: '/about', pathName: 'about' },
  { id: 3, url: '/wedding', pathName: 'wedding' },
  { id: 4, url: '/contact', pathName: 'Find Us' },
]

export const products_url = 'https://course-api.com/react-store-products'

export const single_product_url = `https://course-api.com/react-store-single-product?id=`

export const deliverySteps = [
  {
    id: 1,
    icon: <FaClipboardList />,
    title: 'Amazing Varieties',
    desc: 'We have  mouth-watering varieties of desserts for you to select from. We got you covered in all occassions.',
  },
  {
    id: 2,
    icon: <FaBirthdayCake />,
    title: 'Quality Ingredients',
    desc: 'We use high quality and fresh ingredients to always make you the best treats money can buy',
  },

  {
    id: 3,
    icon: <FaTruckMoving />,
    title: 'Fast Delivery',
    desc: 'Easy order, Swift payment solution, free and fast delivery ',
  },
]
