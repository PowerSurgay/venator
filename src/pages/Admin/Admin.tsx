import { FC } from "react";
import { RouteItem } from "../types";

const Admin: FC = () => {
    return <div></div>
}

export const AdminPage: RouteItem =  {
    path: '/admin',
    component: Admin,
    pageTitle: 'Admin',
    public: false
}