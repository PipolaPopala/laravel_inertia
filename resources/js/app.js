import './bootstrap';
import '../css/app.css';

import { createApp, h } from 'vue'
import { createInertiaApp, Head, Link } from '@inertiajs/vue3'
import { ZiggyVue } from '../../vendor/tightenco/ziggy'
import Layout from './Layouts/Layout.vue';

createInertiaApp({
    title: title => `My App ${title}`,
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
        let page = pages[`./Pages/${name}.vue`]
        page.default.layout = page.default.layout || Layout
        return page
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .component('Head', Head)
            .component('Link', Link)
            .mount(el)
    },
    progress: {
        delay: 0, // The delay after which the progress bar will appear, in milliseconds...
        color: '#fff', // The color of the progress bar...
        includeCSS: true, // Whether to include the default NProgress styles...
        showSpinner: true, // Whether the NProgress spinner will be shown...
    },
})
