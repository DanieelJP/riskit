<template>
  <router-link to="/futbol" class="button-container">
    <button class="custom-button">
      <img src="/futbol.png" alt="Fútbol" class="button-icon" />
      <span class="button-text">Fútbol</span>
    </button>
  </router-link>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goToFutbol = () => {
  router.push('/futbol');
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
}

.custom-button:hover .button-icon {
  transform: translateY(-2px);
}

.custom-button:hover .button-text {
  opacity: 1;
}
</style>
