import App from './App.vue'
import routes from './routes'
import './tailwind.css'
import viteSSR, { ClientOnly } from 'vite-ssr'
import { createHead } from '@vueuse/head'
import { pinia } from './store'
import devalue from '@nuxt/devalue'

export default viteSSR(
  App,
  {
    routes,
    transformState(state) {
      return import.meta.env.SSR ? devalue(state) : state
    },
  },
  (context) => {
    const { app, initialState } = context
    const head = createHead()
    app.use(pinia)
    app.use(head)
    app.component(ClientOnly.name, ClientOnly)
    app.provide('initialState', initialState)

    if (import.meta.env.SSR) {
      initialState.pinia = pinia.state.value
    } else {
      pinia.state.value = initialState.pinia
    }

    return { head }
  },
)
