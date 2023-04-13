<template>
  <div v-if="posts.length > 0">
    <h3>Список постів</h3>
    <post-item v-for="post in posts" :post="post" :key="post.id" @remove="$emit('remove', post)" @edit="$emit('edit', post)"/>
  </div>
  <h3 v-else style="color:red">Список постів пустий</h3>
</template>

<script>
import PostItem from './PostItem.vue';
export default {
  components: {
    PostItem
  },
  props: {
    posts: {
      type: Array,
      required: true
    }
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped>

</style>