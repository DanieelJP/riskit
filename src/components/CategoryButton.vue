<template>
  <router-link :to="route" class="button-container">
    <button class="custom-button">
      <img :src="icon" :alt="text" class="button-icon" />
      <span class="button-text">{{ text }}</span>
    </button>
  </router-link>
</template>

<script setup>
defineProps({
  route: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
});
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
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  transition: none;
  width: 100%;
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

/* Asegurarse de que el contenedor no se mueva */
.custom-button:hover {
  transform: none;
}

.button-container:hover {
  transform: none;
}
</style> 