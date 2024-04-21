import { FC } from "react";

export type RouteItem = {
    path: string,
    component: FC,
    pageTitle: string
}