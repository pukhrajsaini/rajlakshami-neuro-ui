import { ADMIN_ROUTE } from 'src/app/constants/route.constants';

export const LOGIN_ROUTE = {
    path: 'login',
    get url(): string {
        return `${ADMIN_ROUTE.url}/${this.path}`;
    }
};

export const PASSWORD_ROUTE = {
    path: 'password',
    get url(): string {
        return `${ADMIN_ROUTE.url}/${this.path}`;
    }
};

