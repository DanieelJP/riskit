<template>
  <ion-page>
    <div class="signup-container">
      <div class="top-bar">RISK IT!</div>

      <img src="/logo.png" alt="Logo" class="logo" />

      <div class="form-container">
        <div class="form-column">
          <input type="text" placeholder="DNI Number" class="signup-input" />
          <input type="email" placeholder="Email" class="signup-input" />
          <input type="text" placeholder="Country" class="signup-input" />
          <input type="tel" placeholder="Mobile Number" class="signup-input" />
          <div class="gender-selection">
            <GenderButton gender="Male" v-model="selectedGender" />
            <GenderButton gender="Female" v-model="selectedGender" />
          </div>
          <!-- Checkbox para desktop (oculto en móviles) -->
          <div class="checkbox-container desktop-checkbox">
            <input type="checkbox" id="age-confirmation-desktop" />
            <label for="age-confirmation-desktop">
              I agree that I am at least 18 years of age and accept the policies related to age and identity.
            </label>
          </div>
        </div>

        <div class="form-column">
          <input type="text" placeholder="Name" class="signup-input" />
          <input type="text" placeholder="Surname" class="signup-input" />
          <input type="date" placeholder="Birthday" class="signup-input" />
          <input type="text" placeholder="Housing Address" class="signup-input" />
          <input type="text" placeholder="Username" class="signup-input" />
          <input type="password" placeholder="Password" class="signup-input" />
        </div>
      </div>

      <!-- Checkbox para móviles (oculto en desktop) -->
      <div class="checkbox-container mobile-checkbox">
        <input type="checkbox" id="age-confirmation-mobile" />
        <label for="age-confirmation-mobile">
          I agree that I am at least 18 years of age and accept the policies related to age and identity.
        </label>
      </div>

      <SignupButton2 class="signup-button" />
    </div>
  </ion-page>
</template>

<script setup>
import { ref } from 'vue';
import { IonPage } from '@ionic/vue';
import GenderButton from '@/components/GenderButton.vue';
import SignupButton2 from '@/components/SignupButton2.vue';

const selectedGender = ref(null);
</script>

<style scoped>
/* 🟢 Contenedor principal */
.signup-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #006C52;
  padding: 85px 10vw;
  overflow-y: auto; /* Añadir scroll si el contenido no cabe */
}

/* 🟢 Banner superior */
.top-bar {
  width: 100%;
  height: 85px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Staatliches";
  font-size: 60px;
  font-weight: 700;
  color: #2B7555;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
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

/* 🟢 Contenedor del formulario */
.form-container {
  display: flex;
  justify-content: space-between;
  gap: 40px;
  width: 100%;
}

/* 🟢 Columnas del formulario */
.form-column {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 50%;
}

/* 🟢 Estilo de los inputs */
.signup-input {
  width: 100%;
  height: 50px;
  padding: 10px;
  font-size: 18px;
  border-radius: 5px;
  border: 0.5px solid rgba(138, 160, 140, 0.24);
  background: #005A43;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: white;
  outline: none;
}

/* 🟢 Selección de género */
.gender-selection {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 0;
}

.gender-selection button {
  border-radius: 0;
}

.gender-selection button:first-child {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

.gender-selection button:last-child {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}

/* 🟢 Checkbox (estilo original) */
.checkbox-container {
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
  font-size: 14px;
  margin-top: 20px;
}

.checkbox-container input[type="checkbox"] {
  width: 20px;
  height: 20px;
  appearance: none;
  border: 2px solid rgba(138, 160, 140, 0.7);
  background: #004432;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.checkbox-container input[type="checkbox"]:checked {
  background: #2B7555;
  border: 2px solid #2B7555;
}

.checkbox-container input[type="checkbox"]::after {
  content: '✔';
  font-size: 14px;
  color: white;
  font-weight: bold;
  display: none;
}

.checkbox-container input[type="checkbox"]:checked::after {
  display: block;
}

.checkbox-container input[type="checkbox"]:hover {
  border-color: #3ca874;
}

.checkbox-container label {
  color: white;
  font-size: 16px;
  line-height: 1.5;
  cursor: pointer;
  user-select: none;
}

/* 🟢 Botón de registro */
.signup-button {
  margin-top: 40px;
  width: 332px;
  height: 63px;
}

/* Media Query para móviles y tablets */
@media (max-width: 768px) {
  .signup-container {
    padding: 60px 20px; /* Menos padding en móviles */
  }

  .top-bar {
    height: 50px; /* Más pequeño en móviles */
    font-size: 30px; /* Tamaño de fuente reducido */
  }

  .logo {
    width: 110px; /* Más pequeño en móviles */
    height: 130px;
    margin-top: 20px;
  }

  .form-container {
    flex-direction: column; /* Cambia a una sola columna */
    gap: 15px; /* Menos espacio entre elementos */
  }

  .form-column {
    width: 100%; /* Ocupa todo el ancho */
  }

  .signup-input {
    font-size: 16px; /* Tamaño de fuente reducido */
    height: 45px; /* Altura reducida */
  }

  .gender-selection {
      align-items: center;
    flex-direction: column; /* Apila los botones de género verticalmente */
  }

  .desktop-checkbox {
    display: none; /* Oculta el checkbox de desktop en móviles */
  }

  .mobile-checkbox {
    display: flex; /* Muestra el checkbox de móviles */
    order: 1; /* Lo coloca al final */
    margin-top: 20px; /* Espacio arriba */
  }

.signup-button {
  width: 100%; /* Ocupa todo el ancho disponible */
  max-width: 300px; /* Limita el ancho máximo */
  height: 70px; /* Altura específica */
  min-height: 70px; /* Garantiza que no se reduzca */
  margin-top: 20px; /* Ajuste de margen superior */
  order: 2; /* Si está dentro de un flexbox, lo coloca después del checkbox */
}


  .checkbox-container input[type="checkbox"] {
    width: 40px;
    height: 20px;
  }
}

/* Media Query para desktop */
@media (min-width: 769px) {
  .mobile-checkbox {
    display: none; /* Oculta el checkbox de móviles en desktop */
  }
}
</style>