<template>
  <ion-page>
    <div class="futbol-container">
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

        <h1 class="page-title">Football</h1>

        <!-- Evento especial -->
        <section class="special-event">
          <router-link to="/champions-puig" class="event-card">
            <img src="/champions-puig.png" alt="Champions Puig" class="event-image" />
            <div class="event-overlay">
              <h3>Champions Puig Special Event</h3>
            </div>
          </router-link>
        </section>

        <!-- Sección La Liga -->
        <section class="matches-section">
          <h2 class="section-title">La Liga</h2>
          <div class="table-container">
            <table class="matches-table">
              <thead>
                <tr>
                  <th>Date & Time</th>
                  <th>Teams</th>
                  <th>Status</th>
                  <th>1</th>
                  <th>X</th>
                  <th>2</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div class="date-time">
                      <span class="date">Apr 25</span>
                      <span class="time">20:00</span>
                    </div>
                  </td>
                  <td>
                    <div class="teams">
                      <span>Real Madrid</span>
                      <span class="vs">vs</span>
                      <span>Barcelona</span>
                    </div>
                  </td>
                  <td><span class="status">BET NOT OPEN</span></td>
                  <td>2.10</td>
                  <td>3.40</td>
                  <td>2.80</td>
                </tr>
                <tr>
                  <td>
                    <div class="date-time">
                      <span class="date">Apr 25</span>
                      <span class="time">22:00</span>
                    </div>
                  </td>
                  <td>
                    <div class="teams">
                      <span>Atlético Madrid</span>
                      <span class="vs">vs</span>
                      <span>Sevilla</span>
                    </div>
                  </td>
                  <td><span class="status">BET NOT OPEN</span></td>
                  <td>1.90</td>
                  <td>3.20</td>
                  <td>3.50</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- Sección Copa del Rey -->
        <section class="matches-section">
          <h2 class="section-title">Copa del Rey</h2>
          <div class="table-container">
            <table class="matches-table">
              <thead>
                <tr>
                  <th>Date & Time</th>
                  <th>Teams</th>
                  <th>Status</th>
                  <th>1</th>
                  <th>X</th>
                  <th>2</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div class="date-time">
                      <span class="date">Apr 26</span>
                      <span class="time">21:00</span>
                    </div>
                  </td>
                  <td>
                    <div class="teams">
                      <span>Athletic Club</span>
                      <span class="vs">vs</span>
                      <span>Mallorca</span>
                    </div>
                  </td>
                  <td><span class="status">BET NOT OPEN</span></td>
                  <td>1.75</td>
                  <td>3.60</td>
                  <td>4.20</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- Sección Champions League -->
        <section class="matches-section">
          <h2 class="section-title">Champions League</h2>
          <div class="table-container">
            <table class="matches-table">
              <thead>
                <tr>
                  <th>Date & Time</th>
                  <th>Teams</th>
                  <th>Status</th>
                  <th>1</th>
                  <th>X</th>
                  <th>2</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div class="date-time">
                      <span class="date">Apr 27</span>
                      <span class="time">21:00</span>
                    </div>
                  </td>
                  <td>
                    <div class="teams">
                      <span>PSG</span>
                      <span class="vs">vs</span>
                      <span>Dortmund</span>
                    </div>
                  </td>
                  <td><span class="status">BET NOT OPEN</span></td>
                  <td>1.85</td>
                  <td>3.75</td>
                  <td>3.90</td>
                </tr>
                <tr>
                  <td>
                    <div class="date-time">
                      <span class="date">Apr 27</span>
                      <span class="time">21:00</span>
                    </div>
                  </td>
                  <td>
                    <div class="teams">
                      <span>Bayern Munich</span>
                      <span class="vs">vs</span>
                      <span>Real Madrid</span>
                    </div>
                  </td>
                  <td><span class="status">BET NOT OPEN</span></td>
                  <td>2.20</td>
                  <td>3.50</td>
                  <td>2.90</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
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
import { IonPage } from '@ionic/vue';
import MobileFooter from '@/components/MobileFooter.vue';
import SearchBar from '@/components/SearchBar.vue';
import HomeButton from '@/components/HomeButton.vue';
import WalletButton from '@/components/WalletButton.vue';
import ProfileButton from '@/components/ProfileButton.vue';
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500&display=swap');

.futbol-container {
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

.page-title {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 40px;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  font-family: 'Roboto Mono', monospace;
  letter-spacing: 2px;
}

.matches-section {
  margin-top: 30px;
  background: rgba(0, 90, 67, 0.91);
  border: 1px solid #2B7555;
  border-radius: 20px;
  padding: 25px;
  backdrop-filter: blur(10px);
}

.section-title {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
  color: white;
  text-align: center;
}

.table-container {
  overflow-x: auto;
}

.matches-table {
  width: 100%;
  border-collapse: collapse;
  color: white;
}

.matches-table th {
  background: rgba(43, 117, 85, 0.3);
  padding: 15px;
  text-align: left;
  font-weight: 500;
}

.matches-table td {
  padding: 15px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.date-time {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.date {
  font-weight: 500;
}

.time {
  color: rgba(255, 255, 255, 0.7);
}

.teams {
  display: flex;
  align-items: center;
  gap: 10px;
}

.vs {
  color: rgba(255, 255, 255, 0.5);
  font-size: 14px;
}

.status {
  color: #ffc107;
  font-size: 14px;
  font-weight: 500;
}

.match-card {
  background: rgba(0, 108, 82, 0.5);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 15px;
  transition: transform 0.3s ease;
}

.match-card:hover {
  transform: translateY(-5px);
}

.bet-button {
  background: #2B7555;
  color: white;
  border: none;
  padding: 8px 20px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.bet-button:hover {
  background: #3ca874;
}

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

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }

  .top-bar {
    height: 60px;
  }

  .logo-text {
    font-size: 40px;
  }

  .desktop-footer {
    display: none;
  }

  .futbol-container {
    padding-bottom: 60px;
  }

  .matches-section {
    padding: 15px;
    margin: 20px 10px;
  }

  .table-container {
    margin: 0 -15px;
    padding: 0 15px;
    width: calc(100% + 30px);
  }

  .matches-table {
    min-width: 600px;
  }

  .search-and-buttons {
    display: none;
  }
}

/* Estilos específicos para el evento especial */
.special-event {
  margin: 20px 0;
  padding: 0;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}

.event-card {
  position: relative;
  width: 100%;
  height: 250px;
  border-radius: 15px;
  overflow: hidden;
  display: block;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  background-color: rgba(0, 0, 0, 0.2);
}

.event-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

.event-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 15px;
}

.event-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 30px 20px;
  background: linear-gradient(
    transparent,
    rgba(0, 0, 0, 0.6) 30%,
    rgba(0, 0, 0, 0.8)
  );
  color: white;
  transform: translateY(70%);
  transition: transform 0.3s ease;
}

.event-card:hover .event-overlay {
  transform: translateY(0);
}

.event-overlay h3 {
  font-size: 28px;
  font-weight: 600;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  text-align: center;
}

/* Ajustes responsive */
@media (max-width: 768px) {
  .event-card {
    height: 180px;
  }

  .event-image {
    padding: 10px;
  }

  .event-overlay {
    transform: translateY(0);
    padding: 20px;
  }

  .event-overlay h3 {
    font-size: 24px;
  }

  .special-event {
    margin: 20px 0;
    padding: 0;
  }
}

/* Resto de estilos igual que TenisView/BasketView */
</style>
