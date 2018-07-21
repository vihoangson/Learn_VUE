import ListPosts from './blog/components/ListPosts.vue';

export const routes = [
    { path: '', component: ListPosts },
    { path: '*', component: { template: '<h1>Page Not Found!</h1>' } }
];