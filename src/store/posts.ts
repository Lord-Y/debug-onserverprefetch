import { defineStore } from 'pinia'
import { Posts } from '@/apis/interfaces/posts'

export const usePostsStore = defineStore({
  id: 'posts',
  state: () => {
    return {
      posts: [] as Posts,
    }
  },
  actions: {
    set(data: Posts): void {
      this.$patch((state) => {
        state.posts = data
      })
    },
  },
  getters: {
    getDatas:
      (state) =>
      (type: string): Posts => {
        let z: Posts
        switch (type) {
          default:
            z = state.posts
            break
        }
        return z
      },
  },
})
