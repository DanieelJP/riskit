<template>
  <ion-page>
    <div class="home-container">
      <div class="left-section">
        <!-- Contenedor de la imagen solo para móviles -->
        <div class="image-container-mobile">
          <img src="/portada.png" alt="Portada" class="portada-image" />
        </div>
      </div>
      <div class="right-section">
        <img src="/logo.png" alt="Logo" class="logo" />
        <LoginButton />
        <SignupButton />
      </div>
    </div>
  </ion-page>
</template>

<script setup>
import { IonPage } from '@ionic/vue';
import LoginButton from '@/components/LoginButton.vue';
import SignupButton from '@/components/SignupButton.vue';
</script>

<style scoped>
.home-container {
  display: flex;
  height: 100vh;
}

.left-section, .right-section {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.left-section {
  background-image: url('/Fichas.png'); /* Fondo para desktop */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.right-section {
  flex-direction: column;
  gap: 20px;
  background-color: #006C52;
}

.logo {
  max-width: 150px;
  filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.2));
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: scale(1.02);
}

/* Contenedor de la imagen solo para móviles */
.image-container-mobile {
  display: none; /* Oculto por defecto */
}

/* Media Query para móviles y tablets */
@media (max-width: 768px) {
  .home-container {
    flex-direction: column; /* Cambia a una sola columna */
  }

  .left-section {
    background-image: none; /* Elimina el fondo en móviles */
    height: 70vh; /* Ocupa el 70% de la pantalla */
    width: 100%; /* Ocupa todo el ancho */
  }

  .image-container-mobile {
    display: flex; /* Muestra el contenedor de la imagen en móviles */
    width: 100%;
    height: 100%;
    overflow: hidden; /* Evita que la imagen se desborde */
    align-items: center;
    justify-content: center;
  }

  .portada-image {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ajusta la imagen para cubrir el contenedor sin distorsionarse */
  }

  .right-section {
    height: 30vh; /* Ocupa el 30% de la pantalla */
    width: 100%; /* Ocupa todo el ancho */
    background-color:rgb(2, 99, 76); /* Fondo transparente */
    justify-content: flex-start; /* Alinea los botones arriba */
    padding-top: 20px; /* Espacio arriba para los botones */
  }

  .logo {
    display: none; /* Oculta el logo en móviles si lo deseas */
  }
}
</style>