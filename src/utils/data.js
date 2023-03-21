import imageA from '../assets/images/camera.jpg'
import imageB from  '../assets/images/shirt.jpg'
import imageC from '../assets/images/choco.png'
import imageD from '../assets/images/white.jpg'
import imageE from '../assets/images/pink.png'

const items = [
 {
  id: 1,
  name: 'Camera Cake',
  imgUrl: imageA,
  price: 159999,
  featured: true,
  category: 'custom cakes',
  subImages: [
   imageA, imageB, imageC, imageD, imageE
  ]
 },
 {
  id: 2,
  name: 'Tee-Shirt Cake',
  imgUrl: imageB,
  price: 379999,
  featured: true,
  category: 'custom cakes',
  subImages: [
   imageA, imageB, imageC, imageD, imageE
  ]
 },

 {
  id: 3,
  name: 'Chocolate Cake',
  imgUrl: imageC,
  price: 289999,
  featured: true,
  category: 'Chocolate cakes',
  subImages: [
   imageA, imageB, imageC, imageD, imageE
  ]
 },
 {
  id: 4,
  name: 'Butter Cream Cake',
  imgUrl: imageD,
  price: 189999,
  category: 'Butter Cream cakes',
  subImages: [
   imageA, imageB, imageC, imageD, imageE
  ]
 },
 {
  id: 5,
  name: 'Butter Cream Pink Cake',
  imgUrl: imageE,
  price: 289999,
  category: 'Butter Cream cakes',
  subImages: [
   imageA, imageB, imageC, imageD, imageE
  ]
 },

 {
  id: 6,
  name: 'Butter Cream Cake',
  imgUrl: imageD,
  price: 189999,
  featured: true,
  category: 'Butter Cream cakes',
  subImages: [
   imageA, imageB, imageC, imageD, imageE
  ]
 },

 {
  id: 7,
  name: 'Butter Cream Cake',
  imgUrl: imageA,
  price: 189999,
  category: 'Butter Cream cakes',
  subImages: [
   imageA, imageB, imageC, imageD, imageE
  ]
 },
 {
  id: 8,
  name: 'Butter Cream Cake',
  imgUrl: imageB,
  price: 189999,
  category: 'Butter Cream cakes',
  subImages: [
   imageA, imageB, imageC, imageD, imageE
  ]
 },
]


export default items
