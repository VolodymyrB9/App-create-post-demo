<template>
  <form @submit.prevent >
    <h4>Редагувати пост</h4>
    <my-input v-model="post.title" type="text" placeholder="Назва" />
    <my-input v-model="post.body" type="text" placeholder="Опис" />
    <my-button @click="editPost" class="btn">Зберегти</my-button>
  </form>
</template>

<script>
import { fdb } from '@/main';
import { doc, collection, updateDoc } from 'firebase/firestore'

export default {
  props: {
    post: {
      type: Object,
      required: true,

    }
  },
  methods: {
      editPost() {
      updateDoc(doc(collection(fdb, 'Posts'),this.post.id), {
          title: this.post.title,
          body: this.post.body
      })
      this.$emit("hideDialog")
       

    }
  
  }

}
</script>




<style scoped>
form {
  display: flex;
  flex-direction: column;
}
</style>