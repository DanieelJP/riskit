<template>
  <button class="signup-button" @click="goToSignup">
    Sign up
  </button>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goToSignup = () => {
  router.push('/signup'); // Redirige a la página de Sign Up
};
</script>

<style scoped>
.signup-button {
  text-align: center;
  font-family: "Anonymous Pro", monospace;
  font-style: italic;
  background-color: rgb(255, 255, 255);
  color: black;
  font-size: 40px;
  border: 2px solid black;
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

.signup-button:hover {
  background-color: rgb(167, 173, 169);
}
</style>
