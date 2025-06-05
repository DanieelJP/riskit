<template>
  <ion-page>
    <div class="tenis-container">
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

        <h1 class="page-title">Tennis</h1>

        <!-- Imágenes promocionales desktop -->
        <section class="images-container desktop-view">
          <div class="promo-card">
            <img src="/tenis1.png" alt="WTA Angers" class="tenis-image" />
            <div class="promo-overlay">
              <h3>WTA Angers</h3>
            </div>
          </div>
          <div class="promo-card">
            <img src="/tenis2.png" alt="WTA Florianapolis" class="tenis-image" />
            <div class="promo-overlay">
              <h3>WTA Florianapolis</h3>
            </div>
          </div>
        </section>

        <!-- Slider móvil para imágenes promocionales -->
        <section class="promo-slider mobile-view">
          <swiper
            :modules="[FreeMode]"
            :slides-per-view="1"
            :space-between="0"
            :free-mode="true"
            class="mySwiper"
          >
            <swiper-slide>
              <div class="promo-card">
                <img src="/tenis1.png" alt="WTA Angers" class="tenis-image" />
                <div class="promo-overlay">
                  <h3>WTA Angers</h3>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="promo-card">
                <img src="/tenis2.png" alt="WTA Florianapolis" class="tenis-image" />
                <div class="promo-overlay">
                  <h3>WTA Florianapolis</h3>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </section>

        <!-- Sección WTA Angers -->
        <section class="matches-section">
          <h2 class="section-title">WTA Angers Matches</h2>
          <div class="table-container">
            <table class="matches-table">
              <thead>
                <tr>
                  <th>Date & Time</th>
                  <th>Players</th>
                  <th>Status</th>
                  <th>1</th>
                  <th>2</th>
                  <th>3</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div class="date-time">
                      <span class="date">Apr 25</span>
                      <span class="time">14:30</span>
                    </div>
                  </td>
                  <td>
                    <div class="players">
                      <span>S. Williams</span>
                      <span class="vs">vs</span>
                      <span>M. Sharapova</span>
                    </div>
                  </td>
                  <td><span class="status">BET NOT OPEN</span></td>
                  <td>1.85</td>
                  <td>2.15</td>
                  <td>2.50</td>
                </tr>
                <tr>
                  <td>
                    <div class="date-time">
                      <span class="date">Apr 25</span>
                      <span class="time">16:00</span>
                    </div>
                  </td>
                  <td>
                    <div class="players">
                      <span>V. Williams</span>
                      <span class="vs">vs</span>
                      <span>N. Osaka</span>
                    </div>
                  </td>
                  <td><span class="status">BET NOT OPEN</span></td>
                  <td>1.95</td>
                  <td>2.25</td>
                  <td>2.75</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- Sección WTA Florianapolis -->
        <section class="matches-section">
          <h2 class="section-title">WTA Florianapolis Matches</h2>
          <div class="table-container">
            <table class="matches-table">
              <thead>
                <tr>
                  <th>Date & Time</th>
                  <th>Players</th>
                  <th>Status</th>
                  <th>1</th>
                  <th>2</th>
                  <th>3</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div class="date-time">
                      <span class="date">Apr 26</span>
                      <span class="time">12:45</span>
                    </div>
                  </td>
                  <td>
                    <div class="players">
                      <span>S. Halep</span>
                      <span class="vs">vs</span>
                      <span>G. Muguruza</span>
                    </div>
                  </td>
                  <td><span class="status">BET NOT OPEN</span></td>
                  <td>1.75</td>
                  <td>2.05</td>
                  <td>2.45</td>
                </tr>
                <tr>
                  <td>
                    <div class="date-time">
                      <span class="date">Apr 26</span>
                      <span class="time">15:00</span>
                    </div>
                  </td>
                  <td>
                    <div class="players">
                      <span>A. Kerber</span>
                      <span class="vs">vs</span>
                      <span>K. Pliskova</span>
                    </div>
                  </td>
                  <td><span class="status">BET NOT OPEN</span></td>
                  <td>1.90</td>
                  <td>2.20</td>
                  <td>2.60</td>
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
import { IonPage } from '@ionic/vue';
import MobileFooter from '@/components/MobileFooter.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import SearchBar from '@/components/SearchBar.vue';
import HomeButton from '@/components/HomeButton.vue';
import WalletButton from '@/components/WalletButton.vue';
import ProfileButton from '@/components/ProfileButton.vue';
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500&display=swap');

.tenis-container {
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

.top-bar-gradient {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, #1a237e, #0d47a1);
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

/* Estilos para las imágenes en desktop */
.images-container {
  display: flex;
  justify-content: center;
  gap: 5px;
  margin: 20px 0;
  width: 100%;
  padding: 0 2px;
}

.promo-card {
  position: relative;
  width: 49.8%;
  border-radius: 15px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.promo-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

.tenis-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 15px;
}

.promo-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  color: white;
}

.promo-overlay h3 {
  font-size: 28px;
  font-weight: 600;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

/* Estilos para las tablas */
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

.players {
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

/* Estilos para desktop/mobile */
.desktop-view {
  display: none;
}

.mobile-view {
  display: none;
}

/* Estilos para desktop */
@media (min-width: 769px) {
  .desktop-view {
    display: flex;
  }

  .mobile-view {
    display: none;
  }
}

/* Estilos para móvil */
@media (max-width: 768px) {
  .desktop-view {
    display: none;
  }

  .mobile-view {
    display: block;
  }

  .desktop-footer {
    display: none;
  }

  .tenis-container {
    height: 100vh;
    overflow-y: auto;
  }

  .main-content {
    padding-bottom: 80px;
  }

  .promo-slider {
    width: 100%;
    padding: 10px 0;
    margin: 0;
  }

  .promo-slider .promo-card {
    width: 100%;
  }

  .promo-slider .tenis-image {
    height: 180px;
  }

  .promo-slider :deep(.swiper-slide) {
    width: 100% !important;
    padding: 0 10px;
  }

  .promo-overlay h3 {
    font-size: 24px;
  }

  .logo-text {
    font-size: 40px;
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

/* Asegurar que el footer móvil permanezca fijo */
:deep(.mobile-footer) {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
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
</style> 