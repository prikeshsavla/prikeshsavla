<template>
  <div>
    <!-- <input v-model="query" type="search" autocomplete="off" /> -->
    <ul v-if="posts.length > 0" class="cards">
      <li v-for="(post, index) in posts" :key="index">
        <nuxt-link :to="`${postType}/${post.slug}`" class="card card--clickable">
          <template v-if="postType === 'projects'">
            <span class="flex-1">
              <h6 class="inline-block py-1 px-2 mr-1 bg-gray text-white text-sm font-medium rounded-sm">
                {{ post.category }}
              </h6>
              <h3 class="card-title">{{ post.title }}</h3>
              <p class="mt-2">{{ post.description }}</p>
            </span>
            <img v-if="post.cover" class="cover-image" :src="post.cover" />
          </template>

          <template v-else>
            <span class="w-full">
              <span class="flex justify-between align-baseline">
                <h3 class="card-title">{{ post.title }}</h3>
                <h6
                  v-if="post.createdAt"
                  class="self-start inline-block mt-0 py-1 px-2 bg-gray text-white text-base font-medium rounded-sm whitespace-no-wrap"
                >
                  {{ formatDate(post.createdAt) }}
                </h6>
              </span>
              <p class="mt-2">{{ post.description }}</p>
            </span>
          </template>
        </nuxt-link>
      </li>
    </ul>
    <h3 v-else class="max-w-5xl mx-auto mt-4">
      {{ amount > 1 ? 'Loading some right now' : 'Loading some right now' }}
    </h3>
  </div>
</template>

<script>
export default {
  name: 'Posts',
  props: {
    postType: {
      type: String,
      default: 'blog',
      validator: val => ['blog', 'projects', 'products'].includes(val)
    },
    amount: {
      // ? https://content.nuxtjs.org/fetching#limitn
      type: Number,
      default: 10,
      validator: val => val >= 0 && val < 100
    },
    sortBy: {
      // ? https://content.nuxtjs.org/fetching#sortbykey-direction
      type: Object,
      default: () => ({
        key: 'slug',
        direction: 'desc' // you probably want 'asc' here
      }),
      validator: obj => typeof obj.key === 'string' && typeof obj.direction === 'string'
    }
  },
  data() {
    return {
      posts: [],
      query: ''
    }
  },
  async mounted() {
    this.posts = await this.fetchPosts()
  },
  watch: {
    async query(query) {
      if (!query) {
        this.posts = await this.fetchPosts()
        return
      }

      this.posts = await this.fetchPosts()
    }
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString)
      return date.toLocaleDateString(process.env.lang) || ''
    },
    async fetchPosts(postType = this.postType, amount = this.amount, sortBy = this.sortBy) {
      return this.$content(postType)
        .sortBy(sortBy.key, sortBy.direction)
        .limit(amount)
        .search(this.query)
        .fetch()
        .catch(err => {
          error({ statusCode: 404, message: amount > 1 ? 'Posts not found' : 'Post not found' })
        })
    }
  }
}
</script>
