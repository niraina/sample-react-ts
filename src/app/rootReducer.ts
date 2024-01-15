import { ProductsReducer } from '@/modules/products/core/reducers/product.reducer'
import { combineReducers } from '@reduxjs/toolkit'
export type RootState = ReturnType<typeof rootReducer>

export const rootReducer = combineReducers({
    products: ProductsReducer,
})