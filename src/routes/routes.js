import Loadable from 'react-loadable';
import { FullScreenLoading } from '../components';

const routes = [
    {
        path: '/home',
        name: '首页',
        icon: 'appstore',
        navAttr: {
            index: 1,
            role: 'home'
        },
        component: Loadable({
            loader: () => import(/* webpackChunkName: "home" */'../screens/Home'),
            loading: FullScreenLoading,
        })
    },
    {
        path: '/demo',
        component: Loadable({
            loader: () => import(/* webpackChunkName: "demo" */'../components/Demo/Demo'),
            loading: FullScreenLoading,
        })
    }
];

export default (auths) => {
    // auths = ['房源管理', '租赁审批']
    let allRoutes = []
    routes.map(item => {
        if (item.children) {
            item.children.map(child => {
                let first = {
                    path: child.path,
                    component: child.component,
                    role: child.role
                }
                allRoutes.push(first)
                return true
            })
        } else {
            let first = {
                path: item.path,
                component: item.component,
                role: item.role
            }
            allRoutes.push(first)
        }
        return true;
    })
    return allRoutes.filter(route => !route.role || auths.includes(route.role));
}
