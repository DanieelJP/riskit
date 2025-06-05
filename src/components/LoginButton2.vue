<template>
  <button class="login-button" @click="goToPrincipal">
    Login
  </button>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goToPrincipal = () => {
  router.push('/principal'); // Redirige a la página de Principal
};
</script>

<style scoped>
.login-button {
  color: #FFF;
  text-align: center;
  font-family: "Anonymous Pro", monospace;
  font-style: italic;
  background-color: #D70000;
  font-size: 40px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.3s;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  width: 332px;
  height: 63px;

  display: flex;
  align-items: center;
  justify-content: center;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.login-button:hover {
  background-color: rgb(4, 133, 47);
}
</style>
