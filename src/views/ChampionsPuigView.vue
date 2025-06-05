<template>
  <ion-page>
    <div class="champions-container">
      <!-- Banner superior -->
      <header class="top-bar">
        <span class="logo-text">RISK IT!</span>
        <div class="top-bar-gradient"></div>
      </header>

      <!-- Search bar and buttons container -->
      <div class="main-content">
        <div class="search-and-buttons">
          <div class="search-bar-container">
            <SearchBar />
          </div>
          <div class="buttons-container">
            <HomeButton />
            <WalletButton />
            <ProfileButton />
          </div>
        </div>

        <h1 class="page-title">El Puig Champions League</h1>

        <!-- Evento especial -->
        <section class="special-event">
          <div class="event-card">
            <img src="/championsT.png" alt="Champions Tournament" class="event-image" />
            <div class="event-overlay">
              <h3>Final Match</h3>
            </div>
          </div>
        </section>

        <!-- Texto descriptivo -->
        <section class="description-section">
          <p class="event-description">
            Vocational training students will have a sports day with the "El Puig Champions League" soccer competition, in which 15 teams will participate. The final is planned between DAW teachers and students.
            <span class="highlight">NOW YOU CAN BET WHO WILL WIN</span>
          </p>
        </section>

        <!-- Botón de apuesta -->
        <section class="bet-section">
          <button class="bet-button" @click="openBetModal">Bet</button>
        </section>

        <!-- Modal de apuesta -->
        <div v-if="isModalOpen" class="modal-overlay">
          <div class="modal-content">
            <h2>Make A BET</h2>
            <div class="bet-form">
              <h3>Result of the Match</h3>
              <div class="winner-section">
                <span class="winner-label">WINNER</span>
                <select v-model="selectedTeam" class="team-select">
                  <option value="">Select winner</option>
                  <option value="DAW STUDENTS">DAW STUDENTS</option>
                  <option value="DAW TEACHERS">DAW TEACHERS</option>
                </select>
              </div>
              
              <div class="amount-section">
                <label>Amount Bet</label>
                <div class="amount-input">
                  <span class="currency-symbol">$</span>
                  <input 
                    type="number" 
                    v-model="betAmount" 
                    placeholder="Enter amount"
                    min="0"
                  />
                </div>
              </div>

              <div class="modal-buttons">
                <button @click="closeBetModal" class="cancel-button">Cancel</button>
                <button @click="placeBet" class="confirm-button">MAKE</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer Desktop -->
      <footer class="footer desktop-footer">
        <div class="footer-content">
          <p>&copy; 2025 Risk It. All rights reserved.</p>
        </div>
      </footer>

      <!-- Footer Mobile -->
      <MobileFooter />
    </div>
  </ion-page>
</template>

<script setup>
import { ref } from 'vue';
import { 
  IonPage, 
  IonModal, 
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton
} from '@ionic/vue';
import MobileFooter from '@/components/MobileFooter.vue';
import SearchBar from '@/components/SearchBar.vue';
import HomeButton from '@/components/HomeButton.vue';
import WalletButton from '@/components/WalletButton.vue';
import ProfileButton from '@/components/ProfileButton.vue';

const isModalOpen = ref(false);
const selectedTeam = ref('');
const betAmount = ref(0);

const openBetModal = () => {
  isModalOpen.value = true;
};

const closeBetModal = () => {
  isModalOpen.value = false;
};

const placeBet = () => {
  // Aquí iría la lógica para procesar la apuesta
  console.log('Bet placed:', { team: selectedTeam.value, amount: betAmount.value });
  closeBetModal();
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anonymous+Pro:ital,wght@1,700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500&display=swap');

.champions-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #006C52;
  padding-top: 90px;
  color: white;
  font-family: 'Poppins', sans-serif;
  position: relative;
  overflow-y: auto;
}

/* Evento especial */
.special-event {
  margin: 20px 0;
  padding: 0;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}

.event-card {
  position: relative;
  width: 100%;
  height: 500px;
  border-radius: 20px;
  overflow: hidden;
  display: block;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  background-color: rgba(0, 0, 0, 0.2);
}

.event-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 40px;
}

/* Descripción del evento */
.description-section {
  max-width: 800px;
  margin: 40px auto;
  padding: 0 20px;
}

.event-description {
  font-family: 'Anonymous Pro', monospace;
  font-weight: 700;
  font-style: italic;
  font-size: 1.5rem;
  line-height: 1.6;
  text-align: center;
}

.highlight {
  display: block;
  margin-top: 20px;
  color: #ffc107;
  font-size: 1.8rem;
}

/* Botón de apuesta */
.bet-section {
  text-align: center;
  margin: 30px 0;
}

.bet-button {
  background: #ff4444;
  color: white;
  border: none;
  padding: 15px 60px;
  font-size: 1.5rem;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-weight: bold;
}

.bet-button:hover {
  background: #ff0000;
}

/* Modal de apuesta */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: rgba(0, 90, 67, 0.95);
  padding: 30px;
  border-radius: 20px;
  width: 90%;
  max-width: 400px;
  border: 1px solid #2B7555;
}

.modal-content h2 {
  margin-bottom: 20px;
  text-align: center;
  color: white;
  font-size: 24px;
}

.winner-section {
  margin: 20px 0;
  display: flex;
  align-items: center;
  gap: 15px;
}

.winner-label {
  color: #ff4444;
  font-weight: bold;
  font-size: 18px;
}

.team-select {
  flex: 1;
  padding: 12px;
  background: rgba(43, 117, 85, 0.5);
  border: 2px solid #2B7555;
  border-radius: 10px;
  color: white;
  font-size: 16px;
}

.amount-section {
  margin: 20px 0;
}

.amount-section label {
  display: block;
  margin-bottom: 10px;
  color: white;
}

.amount-input {
  position: relative;
  display: flex;
  align-items: center;
}

.currency-symbol {
  position: absolute;
  left: 15px;
  font-size: 18px;
  color: white;
}

input[type="number"] {
  width: 100%;
  padding: 15px 15px 15px 35px;
  background: rgba(43, 117, 85, 0.5);
  border: 2px solid #2B7555;
  border-radius: 10px;
  color: white;
  font-size: 18px;
  transition: all 0.3s ease;
}

input[type="number"]:focus {
  outline: none;
  border-color: #3cc47c;
  background: rgba(43, 117, 85, 0.7);
  box-shadow: 0 0 10px rgba(60, 196, 124, 0.3);
}

.modal-buttons {
  display: flex;
  gap: 15px;
  margin-top: 30px;
}

.cancel-button {
  flex: 1;
  padding: 12px;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
}

.confirm-button {
  flex: 1;
  padding: 12px;
  background: #ff4444;
  border: none;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: bold;
}

.cancel-button:hover,
.confirm-button:hover {
  transform: translateY(-2px);
}

/* Ajustes responsive */
@media (max-width: 768px) {
  .event-card {
    height: 350px;
  }

  .event-image {
    padding: 25px;
  }

  .event-description {
    font-size: 1.2rem;
  }

  .highlight {
    font-size: 1.4rem;
  }

  .modal-content {
    width: 95%;
    padding: 20px;
  }

  input[type="number"] {
    font-size: 16px;
    padding: 12px 12px 12px 30px;
  }

  .desktop-footer {
    display: none;
  }

  .champions-container {
    padding-bottom: 60px;
  }

  .search-and-buttons {
    display: none;
  }
}

/* Banner superior */
.top-bar {
  width: 100%;
  height: 85px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
}

.logo-text {
  font-size: 60px;
  font-weight: 700;
  color: #2B7555;
  font-family: "Staatliches";
}

.top-bar-gradient {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, #1a237e, #0d47a1);
}

/* Título principal */
.page-title {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 40px;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  font-family: 'Roboto Mono', monospace;
  letter-spacing: 2px;
}

/* Footer */
.footer {
  width: 100%;
  background: rgba(0, 90, 67, 0.91);
  backdrop-filter: blur(10px);
  padding: 20px 0;
  margin-top: auto;
  border-top: 1px solid #2B7555;
}

.footer-content {
  text-align: center;
  padding: 0 20px;
}

/* Añade un div contenedor para el contenido principal */
.main-content {
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 40px;
  max-width: 1200px;
  margin: 0 auto;
}

/* Search and buttons */
.search-and-buttons {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  max-width: 1200px;
  padding: 15px 20px;
  gap: 20px;
  background: rgba(0, 90, 67, 0.91);
  border: 1px solid #2B7555;
  border-radius: 15px;
  backdrop-filter: blur(10px);
  margin: 20px 0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.search-bar-container {
  flex: 1;
  max-width: 800px;
  min-width: 300px;
}

.buttons-container {
  display: flex;
  gap: 15px;
}
</style> 