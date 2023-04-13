<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-button'

}

</script>

<style scoped>
.btn {
  align-self: flex-end;
  margin-top: 15px;
  padding: 10px 15px;
  background: none;
  color: teal;
  border: 1px solid teal;
  border-radius: 15px;
  cursor: pointer;
}
.btn:hover {
  background-color: rgba(85, 172, 172, 0.5) ;
}
.btn:active {
  background-color: rgb(145, 227, 227);
}
</style>