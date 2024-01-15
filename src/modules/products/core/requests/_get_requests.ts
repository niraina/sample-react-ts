/* eslint-disable @typescript-eslint/no-explicit-any */
import api from "@/shared/api"
import { AxiosResponse } from "axios"
import { ProductRequest } from "../models/product.model"

export const getProducts = (data: ProductRequest):Promise<any> => {
    return api.get("/products", {
        params:{...data}
    }).then((response: AxiosResponse<any>) => response).catch((error) => error)
}