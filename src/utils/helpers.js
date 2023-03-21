export const formatPrice = (number) => {
 return new Intl.NumberFormat('en-NG', {
  style: 'currency',
  currency: 'NGN',
 }).format(number / 100)
}

export const getUniqueValues = (data, type) => {
 let unique = data.map((item) => item[type])
 return ['all', ...new Set(unique)]
}
