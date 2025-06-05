<template>
  <router-link to="/pingpong" class="button-container">
    <button class="custom-button">
      <img src="/pingpong.png" alt="Ping Pong" class="button-icon" />
      <span class="button-text">Ping Pong</span>
    </button>
  </router-link>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goToPingpong = () => {
  router.push('/pingpong');
};
</script>

<style scoped>
.button-container {
  text-decoration: none;
  display: block;
  border-radius: 15px;
  overflow: hidden;
  background: rgba(0, 108, 82, 0.5);
  transition: background-color 0.3s ease;
}

.button-container:hover {
  background: rgba(0, 108, 82, 0.7);
}

.custom-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  transition: none;
}

.button-icon {
  width: 100px;
  height: auto;
  transition: transform 0.3s ease;
}

.button-text {
  color: white;
  font-size: 14px;
  font-weight: 500;
  opacity: 0.9;
  font-family: 'Poppins', sans-serif;
  transition: opacity 0.3s ease;
}

.custom-button:hover .button-icon {
  transform: translateY(-5px);
}

.custom-button:hover .button-text {
  opacity: 1;
}

.custom-button:hover {
  transform: none;
}
</style>
