<template>
  <div class="home">
    <div class="user" v-for="user in users">
      <h4>User: {{ user.name }}</h4>
      <div class="posts">
        <h4>Posts</h4>
        <div class="post" v-for="post in user.posts">
          <p>{{ post.title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import User from "../models/User"
import Post from "@/models/Post";

export default {
  name: 'Home',
  data() {
    return {}
  },
  computed: {
    users() {
      return User.query().with('posts');
    }
  },
  components: {
    HelloWorld
  },
  async created() {
    const res = await User.api().get('https://jsonplaceholder.typicode.com/users');
    const res1 = await Post.api().get('https://jsonplaceholder.typicode.com/posts');
  }
}
</script>
<style lang="scss"
>
.home {
  display: flex;
  flex-wrap: wrap;
}

.user {
  width: 25%;
  margin-bottom: 3rem;
}
</style>