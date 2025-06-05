<template>
  <button class="signup-button" @click="goToPrincipal">
    Sign Up
  </button>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goToPrincipal = () => {
  router.push('/principal'); 
};
</script>

<style scoped>
.signup-button {
  width: 332px;
  height: 63px;
  font-size: 40px;
  font-family: "Anonymous Pro", monospace;
  font-style: italic;
  background-color: #D70000;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.3s;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
}

.signup-button:hover {
  background-color: rgb(4, 133, 47);
}
</style>
