export interface IRoute {
    path: string,
    component: () => JSX.Element,
    layout?: any
}