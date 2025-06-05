<template>
  <ion-page>
    <div class="login-container">
      <!-- Banner superior -->
      <div class="top-bar">RISK IT!</div>

      <!-- Logo -->
      <img src="/logo.png" alt="Logo" class="logo" />

      <!-- Contenido de la caja de login -->
      <div class="login-content">
        <img src="/hello.png" alt="Hello" class="hello-img" />
        <input type="text" placeholder="Username" class="login-input" />
        <input type="password" placeholder="Password" class="login-input" />
        <LoginButton2 class="login-btn" />
      </div>

      <!-- Imagen al final (solo en móviles) -->
      <div class="footer-image-mobile">
        <img src="/fichas-footer.png" alt="Fichas Footer" class="fichas-footer-img" />
      </div>
    </div>
  </ion-page>
</template>

<script setup>
import { IonPage } from '@ionic/vue';
import LoginButton2 from '@/components/LoginButton2.vue';
</script>

<style scoped>
/* 🟢 Contenedor principal */
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #006C52;
  background-image: radial-gradient(circle at center, rgba(43, 117, 85, 0.4) 0%, transparent 70%);
  justify-content: space-between;
  padding-top: 85px;
}

/* 🟢 Banner superior */
.top-bar {
  width: 100%;
  height: 60px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Staatliches";
  font-size: 40px;
  font-weight: 700;
  color: #2B7555;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
}

/* 🟢 Logo */
.logo {
  width: 220px;
  height: 250px;
  margin-top: 30px;
  filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.2));
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: scale(1.02);
}

/* 🟢 Contenido de la caja de login */
.login-content {
  width: 600px;
  border-radius: 16px;
  border: 1px solid rgba(43, 117, 85, 0.5);
  background: rgba(0, 90, 67, 0.91);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(8px);
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  justify-content: center;
  margin-bottom: 0;
  height: 550px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.login-content:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.25);
}

/* 🟢 Imagen de bienvenida */
.hello-img {
  width: auto;
  max-width: 80%;
  height: auto;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
}

/* 🟢 Inputs */
.login-input {
  width: 500px;
  height: 60px;
  padding: 10px 20px;
  font-size: 20px;
  border-radius: 12px;
  border: 1px solid rgba(138, 160, 140, 0.24);
  background: #005A43;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
  color: white;
  outline: none;
  transition: all 0.3s ease;
}

.login-input:focus {
  border-color: rgba(43, 117, 85, 0.8);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  transform: translateY(-2px);
}

.login-input::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

/* 🟢 Botón de login */
.login-btn {
  width: 300px;
  height: 65px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.login-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

.login-btn:active {
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

/* 🟢 Imagen al final (solo en móviles) */
.footer-image-mobile {
  display: none; /* Oculto por defecto */
}

.fichas-footer-img {
  width: 100%;
  height: auto;
}

/* Media Query para móviles y tablets */
@media (max-width: 768px) {
  .login-container {
    padding-top: 60px; /* Ajuste para el banner reducido */
    justify-content: flex-start; /* Alinear contenido arriba */
    gap: 20px; /* Espacio entre elementos */
  }

  .top-bar {
    height: 50px; /* Más pequeño en móviles */
    font-size: 30px; /* Tamaño de fuente reducido */
  }

  .logo {
    width: 110px; /* Más pequeño en móviles */
    height: 130px;
    margin-top: 20px;
    margin-bottom: 0;
  }

  .login-content {
    width: 100%; /* Ocupa todo el ancho */
    padding: 20px; /* Añade un poco de espacio alrededor */
    border: none; /* Elimina el borde en móviles */
    background: none; /* Elimina el fondo en móviles */
    box-shadow: none; /* Elimina la sombra en móviles */
  }

  .login-input {
    width: 90%; /* Ajusta el ancho de los inputs */
    max-width: 400px; /* Limita el ancho máximo */
    font-size: 16px; /* Tamaño de fuente reducido */
  }

  .login-btn {
    width: 70%; /* Reduce el ancho relativo */
    max-width: 200px; /* Limita el tamaño máximo aún más */
    height: 45px; /* Ajusta la altura si es necesario */
    font-size: 16px; /* Reduce el tamaño del texto si es muy grande */
    margin-bottom: 0;
  }

  .footer-image-mobile {
    display: block; /* Muestra la imagen al final en móviles */
    width: 100%;
    margin-top: auto; /* Empuja la imagen al final */
  }

  .hello-img {
    margin-top: 0;
  }
}
</style>