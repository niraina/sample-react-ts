/* eslint-disable @typescript-eslint/no-explicit-any */
import api from "../api/ApiHelper"

export const PostRefresh = (refresh: any) => {
    api.post('/auth/refreshToken', refresh)
       .then((response) => response)
       .catch((error) => error);
}