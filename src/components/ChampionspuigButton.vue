<template>
  <router-link to="/champions-puig" class="button-container">
    <button class="custom-button">
      <img src="/champions.png" alt="Champions" class="button-icon" />
      <span class="button-text">El Puig Champions League</span>
    </button>
  </router-link>
</template>

<style scoped>
.button-container {
  text-decoration: none;
  display: block;
  border-radius: 15px;
  overflow: hidden;
  background: rgba(0, 108, 82, 0.5);
  transition: background-color 0.3s ease;
  width: 100%;
  max-width: 350px;
}

.button-container:hover {
  background: rgba(0, 108, 82, 0.7);
}

.custom-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  width: 100%;
}

.button-icon {
  width: 150px;
  height: auto;
  transition: transform 0.3s ease;
}

.button-text {
  color: white;
  font-size: 18px;
  font-weight: 600;
  opacity: 0.9;
  font-family: 'Poppins', sans-serif;
  text-align: center;
  line-height: 1.2;
  transition: opacity 0.3s ease;
  padding: 0 10px;
}

.custom-button:hover .button-icon {
  transform: translateY(-5px);
}

.custom-button:hover .button-text {
  opacity: 1;
}
</style>
