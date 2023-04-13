<template>
  <div class="app">
    <h1>Сторінка з постами</h1>
    <my-button @click="fetchPosts">Завантажити пости</my-button>
    <my-button @click="showDialog" style="margin: 15px 10px;">Створити пост</my-button>
    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost"  />
    </my-dialog>
    <post-list :posts="posts" @remove="removePost" />


  </div>

</template>

<script>
import PostForm from './components/PostForm.vue';
import PostList from './components/PostList.vue';
//import axios from 'axios';
import { fdb } from '@/main';
import { collection, doc, getDocs, addDoc, deleteDoc, updateDoc, onSnapshot } from 'firebase/firestore';


export default {
  components: {
    PostForm, PostList 
  },
  data() {
    return {
      posts: [],
      dialogVisible: false
    }
  },
  methods: {
    createPost(post) {
      // this.posts.push(post);
      // add to database

        addDoc(collection(fdb, 'Posts'), {
          title: post.title,
          body:  post.body
        })      
      // this.posts.push(post);
      this.fetchPosts()

      this.dialogVisible = false;
    },
    removePost(post) {
      deleteDoc(doc(collection(fdb, 'Posts'), post.id))
      // this.posts = this.posts.filter(p => p.id !== post.id)
    },
    showDialog() {
      this.dialogVisible = true;
    },
    async fetchPosts() {
      try {
        // Using snapshot
        onSnapshot(collection(fdb, 'Posts'), (querySnapshot) => {
          const fbPosts = []
          querySnapshot.forEach((doc) => {
               const post = {
                  id: doc.id,
                  title: doc.data().title,
                  body: doc.data().body
                }
              fbPosts.push(post) 
          })
          this.posts = fbPosts
        })
        // const querySnapshot = await getDocs(collection(fdb, 'Posts'))
        // querySnapshot.forEach((doc) => {
        //   //console.log(doc.id, "=>", doc.data())
        //   const post = { 
        //     id: doc.id,
        //     title: doc.data().title,
        //     body: doc.data().body
        //   }
        //   this.posts.push(post)
        // })
        // const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
        // this.posts = response.data; 
      } catch (e) {
        alert('Помилка')
      }

    } 
  }
}

</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 20px;
}



</style>