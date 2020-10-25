

export const LANDING_ROUTE = {
    path: '',
    get url() {
        return `/`;
    }
};

export const ADMIN_ROUTE = {
    path: 'admin',
    get url() {
        return `/${this.path}`;
    }
};


export const WEB_ROUTE = {
    path: 'web',
    get url() {
        return `/${this.path}`;
    }
};
