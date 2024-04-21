import { FC } from "react";
import { RouteItem } from "../types";
import { useParams } from "react-router-dom";

const Product: FC = () => {
    const { id } = useParams();
    return <div>{id}</div>
}

export const ProductPage: RouteItem =  {
    path: '/product/:id',
    component: Product,
    pageTitle: 'Product',
    public: true

}