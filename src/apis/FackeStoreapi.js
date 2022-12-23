import data from './productData.json'

const FackeStoreapi = () => {
  localStorage.setItem('APIDATA',JSON.stringify(data))
}

export default FackeStoreapi