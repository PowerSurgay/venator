import { FC } from "react";
import { RouteItem } from "../types";

const ProductList: FC = () => {
    return <div></div>
}

export const ProductListPage: RouteItem =  {
    path: '/products',
    component: ProductList,
    pageTitle: 'ProductList',
    public: true

}