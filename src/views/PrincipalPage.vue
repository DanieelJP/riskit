<template>
  <ion-page>
    <div class="home-container">
      <!-- Top banner -->
      <header class="top-bar">
        <span class="logo-text">RISK IT!</span>
        <div class="top-bar-gradient"></div>
      </header>

      <!-- Main content -->
      <div class="main-content">
        <!-- Search bar and buttons container -->
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

        <!-- Promotional images section -->
        <section class="images-container desktop-view">
          <router-link to="/futbol" class="promo-card">
            <img src="/futbolero.png" alt="Soccer" class="home-image" />
            <div class="promo-overlay">
              <h3>Live Soccer</h3>
            </div>
          </router-link>
          <router-link to="/casino" class="promo-card">
            <img src="/spin-free.png" alt="Free Spins" class="home-image" />
            <div class="promo-overlay">
              <h3>Free Spins</h3>
            </div>
          </router-link>
        </section>

        <!-- Mobile slider for promotional images -->
        <section class="promo-slider mobile-view">
          <swiper
            :modules="[FreeMode]"
            :slides-per-view="1"
            :space-between="0"
            :free-mode="true"
            class="mySwiper"
          >
            <swiper-slide>
              <router-link to="/futbol" class="promo-card">
                <img src="/futbolero.png" alt="Soccer" class="home-image" />
                <div class="promo-overlay">
                  <h3>Live Soccer</h3>
                </div>
              </router-link>
            </swiper-slide>
            <swiper-slide>
              <router-link to="/casino" class="promo-card">
                <img src="/spin-free.png" alt="Free Spins" class="home-image" />
                <div class="promo-overlay">
                  <h3>Free Spins</h3>
                </div>
              </router-link>
            </swiper-slide>
          </swiper>
        </section>

        <!-- Categories section -->
        <section class="categories-section">
          <h2 class="section-title">🔥 Popular Categories 🔥</h2>
          <!-- Desktop View -->
          <div class="buttons-row desktop-view">
            <FutbolButton />
            <BasketButton />
            <TenisButton />
            <CasinoButton />
            <EsportsButton />
            <PingpongButton />
          </div>
          <!-- Mobile View -->
          <swiper
            :modules="[FreeMode]"
            :slides-per-view="'auto'"
            :space-between="15"
            :free-mode="true"
            class="mobile-view mySwiper"
          >
            <swiper-slide><FutbolButton /></swiper-slide>
            <swiper-slide><BasketButton /></swiper-slide>
            <swiper-slide><TenisButton /></swiper-slide>
            <swiper-slide><CasinoButton /></swiper-slide>
            <swiper-slide><EsportsButton /></swiper-slide>
            <swiper-slide><PingpongButton /></swiper-slide>
          </swiper>
        </section>

        <!-- Special events section -->
        <section class="additional-buttons-container">
          <h2 class="section-title">⭐ Special Events ⭐</h2>
          <!-- Desktop View -->
          <div class="additional-buttons-row desktop-view">
            <ChampionspuigButton />
            <PokemonpuigButton />
            <PingpongpuigButton />
          </div>
          <!-- Mobile View -->
          <swiper
            :modules="[FreeMode]"
            :slides-per-view="'auto'"
            :space-between="15"
            :free-mode="true"
            class="mobile-view mySwiper"
          >
            <swiper-slide><ChampionspuigButton /></swiper-slide>
            <swiper-slide><PokemonpuigButton /></swiper-slide>
            <swiper-slide><PingpongpuigButton /></swiper-slide>
          </swiper>
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
import SearchBar from '@/components/SearchBar.vue';
import HomeButton from '@/components/HomeButton.vue';
import WalletButton from '@/components/WalletButton.vue';
import ProfileButton from '@/components/ProfileButton.vue';
import FutbolButton from '@/components/FutbolButton.vue';
import BasketButton from '@/components/BasketButton.vue';
import TenisButton from '@/components/TenisButton.vue';
import CasinoButton from '@/components/CasinoButton.vue';
import EsportsButton from '@/components/EsportsButton.vue';
import PingpongButton from '@/components/PingpongButton.vue';
import ChampionspuigButton from '@/components/ChampionspuigButton.vue';
import PokemonpuigButton from '@/components/PokemonpuigButton.vue';
import PingpongpuigButton from '@/components/PingpongpuigButton.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import MobileFooter from '@/components/MobileFooter.vue';
</script>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #006C52; /* Color exacto del LoginView */
  padding-top: 90px;
  color: white;
  font-family: 'Poppins', sans-serif;
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
  color: #2B7555; /* Color exacto del LoginView */
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

.search-and-buttons {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  max-width: 1200px;
  padding: 15px 20px;
  gap: 20px;
  background: rgba(0, 90, 67, 0.91); /* Color del login-content */
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
  text-decoration: none;
  display: block;
  color: inherit;
}

.promo-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

.home-image {
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

.categories-section, 
.additional-buttons-container {
  width: 100%;
  margin: 20px 0;
  padding: 25px;
  background: rgba(0, 90, 67, 0.91);
  border: 1px solid #2B7555;
  border-radius: 20px;
  backdrop-filter: blur(10px);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.buttons-scroll {
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE/Edge */
}

.buttons-scroll::-webkit-scrollbar {
  display: none; /* Chrome/Safari/Opera */
}

.buttons-row {
  display: flex;
  gap: 15px;
  padding: 10px;
  width: max-content;
}

/* Indicador visual de scroll */
.buttons-scroll::after {
  content: '';
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 40px;
  background: linear-gradient(to right, transparent, rgba(0, 90, 67, 0.8));
  pointer-events: none;
}

@media (max-width: 1200px) {
  .images-container {
    width: 95%;
  }
}

@media (max-width: 768px) {
  .images-container {
    flex-direction: row;
    align-items: center;
    gap: 1px;
    padding: 0;
    margin: 10px 0;
  }

  .promo-card {
    width: 50%;
  }

  .home-image {
    height: 180px;
  }

  .promo-overlay h3 {
    font-size: 16px;
    padding: 10px;
  }

  .desktop-footer {
    display: none;
  }

  .home-container {
    padding-bottom: 60px; /* Espacio para el footer móvil */
  }
}

.additional-buttons-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
  justify-items: center;
  align-items: center;
  padding: 20px;
  width: 100%;
  max-width: 1800px;
  margin: 0 auto;
}

@media (max-width: 1200px) {
  .additional-buttons-row {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}

@media (max-width: 768px) {
  .additional-buttons-row {
    grid-template-columns: 1fr;
    padding: 15px;
  }
}

.section-title {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 25px;
  text-align: center;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
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

/* Eliminar los estilos que ya no se usan */
.footer-links {
  display: none;
}

/* Cambiamos los selectores para que solo afecten a los botones */
.buttons-row button, 
.additional-buttons-row button,
.buttons-row a,
.additional-buttons-row a {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  z-index: 1;
}

.buttons-row button:hover, 
.additional-buttons-row button:hover,
.buttons-row a:hover,
.additional-buttons-row a:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.buttons-row button:active, 
.additional-buttons-row button:active,
.buttons-row a:active,
.additional-buttons-row a:active {
  transform: translateY(-2px);
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
}

/* Aseguramos que los contenedores no tengan efectos */
.buttons-row,
.additional-buttons-row {
  background: transparent;
  box-shadow: none;
}

/* Estilos para Swiper */
.mySwiper {
  width: 100%;
  padding: 10px;
}

:deep(.swiper-slide) {
  width: auto !important;
  height: auto !important;
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
    justify-content: center;
    flex-wrap: nowrap;
  }

  .mobile-view {
    display: none;
  }

  .buttons-row {
    display: flex;
    gap: 15px;
    justify-content: center;
    align-items: center;
    padding: 10px;
    width: 100%;
    overflow-x: auto;
  }

  .additional-buttons-row {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 20px;
    justify-items: center;
    align-items: center;
    padding: 10px;
  }

  .buttons-row::-webkit-scrollbar {
    display: none;
  }

  .buttons-row {
    -ms-overflow-style: none;
    scrollbar-width: none;
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

  .mySwiper {
    width: 100%;
    padding: 10px;
  }

  :deep(.swiper-slide) {
    width: auto !important;
    height: auto !important;
    display: flex;
    justify-content: center;
  }
}

/* Estilos para el slider móvil */
.promo-slider {
  width: 100%;
  padding: 10px 0;
  margin: 0;
}

.promo-slider .promo-card {
  width: 100%;
}

@media (max-width: 768px) {
  .promo-slider .home-image {
    height: 180px;
  }

  .promo-slider :deep(.swiper-slide) {
    width: 100% !important;
    padding: 0 10px;
  }

  .promo-slider .mySwiper {
    padding: 0;
    overflow: visible;
  }

  :deep(.swiper) {
    overflow: visible;
    margin: 0;
    width: 100%;
    margin-left: 0;
  }

  :deep(.swiper-wrapper) {
    display: flex;
    align-items: center;
    padding: 0;
    margin-left: 0;
  }

  .promo-slider .promo-card {
    width: 100%;
    padding: 0;
  }

  :deep(.swiper-slide:last-child) {
    margin-right: 0 !important;
  }
}
</style>
