<template>
  <p>This is the store page</p>
  <br />
  <router-link to="/" title="store">home link</router-link><br />
  <router-link to="/store" title="store">store link</router-link><br />
  {{ posts }}
</template>

<script lang="ts">
import { defineComponent, onServerPrefetch, computed } from 'vue'
import { usePostsStore } from '@/store/posts'
import axiosService from '@/apis/axiosService'

export default defineComponent({
  setup() {
    const postsStore = usePostsStore()

    onServerPrefetch(async () => {
      await axiosService
        .get({}, 'https://jsonplaceholder.typicode.com/posts', {})
        .then(async (response: any) => {
          if (response.status === 200) {
            // console.log('reponse', response.data)
            postsStore.$patch((state) => {
              state.posts = response.data
            })
          }
        })
        .catch((error: any) => {
          throw error
        })
    })

    const posts = computed(() => postsStore.getDatas('posts'))

    return {
      posts,
    }
  },
})
</script>
