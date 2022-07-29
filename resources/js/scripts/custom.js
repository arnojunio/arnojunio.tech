var en_us = {
    header: "About",
    cta: "Hey, I'm <span>Arno Junio</span>, web developer from Brazil. I love building solutions and I'm always looking for new challenges, because change is a constant!",
    stack: "Tech stack I use",
    blogTitle: "Featured Blog",
    projectsTitle: "My projects",
    aboutTitle: "Hi there!",
    blogFirst: "Using Vue.js alongside Django Template",
    about: [
        "👋🏼 I’m Arno Junio, an IT Analyst at Federal University of Viçosa",
        "🔺 Graduated from FAESA.",
        "🐍 I helps founders add value to society by crafting software using Python and Django Framework.",
        "🇲🇦 I'm based in Viçosa, Brazil.",
        "🔨 I'm currently learning VueJs, NuxtJs by building simple projects (including this portfolio 😊)",
        "✍🏼 I blog from time to time about my journey as a developer.",
        "👑 I'm into chess and philosophical books 📚",
    ],
    cookieMsg: "By clicking on Accept all cookies, you agree to the storage of cookies on your device to improve website navigation, analyze website usage for statistical purposes.",
    termsLink: "Usage policy.",
    cookieDef: "Cookie Definition",
    acceptAll: "Authorize",
    rejectAll: "Reject All",
    blogs: [{
            "title": "Installing the LAMP stack from git repository",
            "img": "lamp.png",
            "slug": "installing-the-lamp-stack-to-use-vue",
            "tags": [
                "#php",
                "#lamp",
                "#vue",
                "#js"
            ],
            "p": "This post aims to show that you can install the LAMP stack to use Vue with your PHP projects immediately.",
            "a": "Read More"
        },
        {
            title: "Building a Full-Text Search App Using Django, Docker and Elasticsearch",
            img: "linux.jpg",
            slug: 'using-vuejs-alongside-django-template',
            tags: ["#python", "#vue", "#django", "#docker"],
            p: "In this article, I will be giving you brief information about Elasticsearch, its installation, and some examples of usage.",
            a: "Read More"
        },
        {
            title: "Building a Full-Text Search App Using Django, Docker and Elasticsearch",
            img: "django-docker-elasticsearch.png",
            slug: 'set-up-vue-app-running-on-vite',
            tags: ["#python", "#vue", "#django", "#docker"],
            p: "In this article, I will be giving you brief information about Elasticsearch, its installation, and some examples of usage.",
            a: "Read More"
        },
        {
            title: "Using Vue.js alongside Django Template",
            img: "graphql-in-django-overview.png",
            slug: 'graphql-in-django-overview',
            tags: ["#python", "#vue", "#js"],
            p: "This post aims to show that you can start to use Vue with your Django projects immediately without any sophisticated setup that will take hours to complete.",
            a: "Read More"
        }
    ]
};
var pt_br = {
    header: "Sobre",
    cta: "Opa, eu sou <span>Arno Junio</span>,desenvolvedor Web e brasileiro. Amo construir soluções e estou sempre em busca de novos desafios, pois a mudança é uma constante!",
    stack: "Tecnologias que utilizo",
    blogTitle: "Últimos blogs",
    projectsTitle: "Meus projetos",
    aboutTitle: "Olá Pessoas!",
    blogFirst: "Utilizando Vue.js através dos Templates Django",
    about: [
        "👋🏼 Me chamo Arno Junio, sou Analista de T.I. na Universidade Federal de Viçosa.",
        "🔺 Graduado na FAESA.",
        "🐍 Eu ajudo aos outros a agregar valor à sociedade criando software usando Python e Django Framework.",
        "🇲🇦 Estou morando em Viçosa, Brasil.",
        "🔨 Aprendo atualmente VueJs,Vuex e Nuxt.js",
        "✍🏼 De vez em quando posto uns blogs sobre a minha jornada como desenvolvedor.",
        "👑 Eu curto xadrez e livros filosóficos 📚",
    ],
    cookieMsg: "Coletamos estatísticas de visita para melhorar sua experiência de navegação. Ao continuar, você concorda com nossa política de privacidade.",
    termsLink: "Política de uso",
    cookieDef: "Definições de cookies",
    acceptAll: "Autorizar",
    rejectAll: "Rejeitar todos",
    blogs: [{
            "title": "Instalando a pilha LAMP com um repositório git",
            "img": "lamp.png",
            "slug": "installing-the-lamp-stack-to-use-vue",
            "tags": [
                "#php",
                "#lamp",
                "#vue",
                "#js"
            ],
            "p": "Este post tem como objetivo mostrar que você pode instalar a pilha LAMP para usar o Vue com seus projetos PHP imediatamente.",
            "a": "Read More"
        },
        {
            title: "Desenvolvendo um app Full-Text com Django, Docker e Elasticsearch",
            img: "django-docker-elasticsearch.png",
            slug: 'using-vuejs-alongside-django-template',
            tags: ["#python", "#vue", "#django", "#docker"],
            p: "Neste artigo, fornecerei informações breves sobre o Elasticsearch, sua instalação e alguns exemplos de uso.",
            a: "Leia Mais"
        },
        {
            title: "Desenvolvendo um app Full-Text com Django, Docker e Elasticsearch",
            img: "django-docker-elasticsearch.png",
            slug: 'set-up-vue-app-running-on-vite',
            tags: ["#python", "#vue", "#django", "#docker"],
            p: "Neste artigo, fornecerei informações breves sobre o Elasticsearch, sua instalação e alguns exemplos de uso.",
            a: "Leia Mais"
        },
        {
            title: "GraphQl In Django - An Overview",
            img: "graphql-in-django-overview.png",
            slug: 'graphql-in-django-overview',
            tags: ["#python", "#vue", "#js"],
            p: "Este post tem como objetivo mostrar que você pode começar a usar o Vue com seus projetos Django imediatamente, sem qualquer configuração sofisticada que levará horas para ser concluída.",
            a: "Leia Mais"
        }
    ]
};
let blogs = [{
    id: 1,
    title: 'Elasticsearch – some basic concepts',
    slug: 'set-up-vue-app-running-on-vite',
    img: 'vue-vite.png',
    content: `<p>This is a beginner guide on how to set up a vue.js app running on Vite, I’ll also add and configure ESLint & Prettier for linting and code formatting, set up Tailwind CSS for styling, and finally configure VueX and Vue Router.</p>
    <p>So, let’s begin!</p>
    <h2>Elasticsearch – some basic concepts</h2>
    <p>Wait, what the heck is Vite.js?</p>
    <p>Primarily Vue developers will be using Vue CLI to compile their projects, this comes with some disadvantages: You have to wait until your entire app to be bundled to start developing, this can make cold server start very slow. Larger projects can also suffer from slow Hot Module Replacement (HMR). Vite tackles these issues by compiling code on-demand, only compiling the code imported on the current screen and HMR performance is decoupled from the total number of modules, making HMR consistently fast no matter how big your app is.</p>
    <p>Actually, Vite has a real good doc, check it out.</p>
    <p>If you’re using npm, just run this command and follow the steps</p>`,
    showDate: 'Monday',
    showTime: '19:10 - 20:55'
}, {
    id: 2,
    title: 'Using Vue.js alongside Django Template',
    slug: 'graphql-in-django-overview',
    img: 'graphql-in-django-overview.png',
    content: `<p>This is a beginner guide on how to set up a vue.js app running on Vite, I’ll also add and configure ESLint & Prettier for linting and code formatting, set up Tailwind CSS for styling, and finally configure VueX and Vue Router.</p>
    <p>So, let’s begin!</p>
    <h2>Set up Vite.js</h2>
    <p>Wait, what the heck is Vite.js?</p>
    <p>Primarily Vue developers will be using Vue CLI to compile their projects, this comes with some disadvantages: You have to wait until your entire app to be bundled to start developing, this can make cold server start very slow. Larger projects can also suffer from slow Hot Module Replacement (HMR). Vite tackles these issues by compiling code on-demand, only compiling the code imported on the current screen and HMR performance is decoupled from the total number of modules, making HMR consistently fast no matter how big your app is.</p>
    <p>Actually, Vite has a real good doc, check it out.</p>
    <p>If you’re using npm, just run this command and follow the steps</p>`,
    showDate: 'Friday',
    showTime: '20:15 - 21:45'
}, {
    id: 3,
    title: 'Set up a Vue app running on Vite',
    slug: 'using-vuejs-alongside-django-template',
    img: 'vue-vite.png',
    content: `<p>This is a beginner guide on how to set up a vue.js app running on Vite, I’ll also add and configure ESLint & Prettier for linting and code formatting, set up Tailwind CSS for styling, and finally configure VueX and Vue Router.</p>
    <p>So, let’s begin!</p>
    <h2>Elasticsearch – some basic concepts</h2>
    <p>Wait, what the heck is Vite.js?</p>
    <p>Primarily Vue developers will be using Vue CLI to compile their projects, this comes with some disadvantages: You have to wait until your entire app to be bundled to start developing, this can make cold server start very slow. Larger projects can also suffer from slow Hot Module Replacement (HMR). Vite tackles these issues by compiling code on-demand, only compiling the code imported on the current screen and HMR performance is decoupled from the total number of modules, making HMR consistently fast no matter how big your app is.</p>
    <p>Actually, Vite has a real good doc, check it out.</p>
    <p>If you’re using npm, just run this command and follow the steps</p>`,
    showDate: 'Monday',
    showTime: '19:10 - 20:55'
}]
export { en_us, pt_br, blogs }