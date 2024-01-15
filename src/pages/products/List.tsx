import { AppDispatch } from '@/app/store'
import { fetchProducts } from '@/modules/products/core/actions'
import { useResponseDataProducts, useResponseProducts } from '@/modules/products/libs'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const List = () => {
  const dispatch: AppDispatch = useDispatch()
  const products = useResponseDataProducts()
  const {request} = useResponseProducts()

  useEffect(() => {
    dispatch(fetchProducts({...request}))
  }, [dispatch, request])

  console.log(products);
  
  return (
    <div>List....</div>
  )
}

export default List