<template>
  <div class="post">
    <div>
      <div><strong>Назва: </strong>{{ post.title }}</div>
      <div><strong>Опис: </strong>{{ post.body }}</div>
    </div>
    <div class="post__btns">
      <my-button @click="$emit('remove', post)" style="margin-top: 0;" >Видалити</my-button>
      <my-button @click="dialogVisible = true" style="margin-left:10px">Редагувати</my-button>
    </div>
    <my-dialog v-model:show="dialogVisible">
      <post-edit-form :post="post" @hideDialog="dialogVisible = false" /> 
    </my-dialog>
    
  </div>

</template>

<script>
import PostEditForm from './PostEditForm.vue'
import MyButton from './UI/MyButton.vue'
import MyDialog from './UI/MyDialog.vue'
export default {
  components: { MyButton, MyDialog, PostEditForm },
  props: {
    post: {
      type: Object, 
      required: true,
      
    }
  },
  data() {
    return {
      dialogVisible: false
    }
  }, 


}
</script>

<style scoped>
.post {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  margin-top: 15px;
  border: 2px solid teal;
  border-radius: 15px;
}
</style>