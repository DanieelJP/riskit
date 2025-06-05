<template>
  <ion-page>
    <div class="casino-container">
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

        <h1 class="page-title">Casino</h1>

        <!-- Stream Croupier Section -->
        <section class="casino-section">
          <h2 class="section-title">Stream Croupier</h2>
          <div class="images-container desktop-view">
            <div class="promo-card">
              <img src="/casino1.png" alt="Casino Live" class="casino-image" />
              <div class="promo-overlay">
                <h3>Live Roulette</h3>
              </div>
            </div>
            <div class="promo-card">
              <img src="/casino2.png" alt="Casino Games" class="casino-image" />
              <div class="promo-overlay">
                <h3>Live Blackjack</h3>
              </div>
            </div>
            <div class="promo-card">
              <img src="/casino3.png" alt="Casino Events" class="casino-image" />
              <div class="promo-overlay">
                <h3>Live Poker</h3>
              </div>
            </div>
          </div>

          <!-- Slider móvil -->
          <div class="promo-slider mobile-view">
            <swiper
              :modules="[FreeMode]"
              :slides-per-view="1.2"
              :space-between="10"
              :free-mode="true"
              class="mySwiper"
            >
              <swiper-slide>
                <div class="promo-card">
                  <img src="/casino1.png" alt="Casino Live" class="casino-image" />
                  <div class="promo-overlay">
                    <h3>Live Roulette</h3>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="promo-card">
                  <img src="/casino2.png" alt="Casino Games" class="casino-image" />
                  <div class="promo-overlay">
                    <h3>Live Blackjack</h3>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="promo-card">
                  <img src="/casino3.png" alt="Casino Events" class="casino-image" />
                  <div class="promo-overlay">
                    <h3>Live Poker</h3>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </section>

        <!-- Slot Machine Section -->
        <section class="casino-section">
          <h2 class="section-title">Slot Machine</h2>
          <div class="images-container desktop-view">
            <div class="promo-card">
              <img src="/arcade1.png" alt="Arcade Games" class="casino-image" />
              <div class="promo-overlay">
                <h3>Classic Slots</h3>
              </div>
            </div>
            <div class="promo-card">
              <img src="/arcade2.png" alt="Arcade Events" class="casino-image" />
              <div class="promo-overlay">
                <h3>Modern Slots</h3>
              </div>
            </div>
          </div>

          <!-- Slider móvil -->
          <div class="promo-slider mobile-view">
            <swiper
              :modules="[FreeMode]"
              :slides-per-view="1.2"
              :space-between="10"
              :free-mode="true"
              class="mySwiper"
            >
              <swiper-slide>
                <div class="promo-card">
                  <img src="/arcade1.png" alt="Arcade Games" class="casino-image" />
                  <div class="promo-overlay">
                    <h3>Classic Slots</h3>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="promo-card">
                  <img src="/arcade2.png" alt="Arcade Events" class="casino-image" />
                  <div class="promo-overlay">
                    <h3>Modern Slots</h3>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
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
import SearchBar from '@/components/SearchBar.vue';
import HomeButton from '@/components/HomeButton.vue';
import WalletButton from '@/components/WalletButton.vue';
import ProfileButton from '@/components/ProfileButton.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500&display=swap');

/* Estilos base del contenedor */
.casino-container {
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

/* Secciones de casino */
.casino-section {
  margin-bottom: 40px;
}

.section-title {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
  color: white;
  text-align: center;
}

/* Contenedor de imágenes */
.images-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 30px 0;
  width: 100%;
}

.promo-card {
  position: relative;
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.promo-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

.casino-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 20px;
}

.promo-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 30px;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  color: white;
}

.promo-overlay h3 {
  font-size: 28px;
  font-weight: 600;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
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

  .main-content {
    max-width: 1400px;
    margin: 0 auto;
    padding: 40px;
  }

  .images-container .promo-card {
    width: calc(33.33% - 14px);
  }

  .casino-section:nth-child(3) .images-container .promo-card {
    width: calc(50% - 10px);
    height: 350px;
  }

  .casino-section:nth-child(3) .casino-image {
    height: 350px;
  }

  .casino-section {
    margin-bottom: 60px;
  }

  .section-title {
    font-size: 32px;
    margin-bottom: 30px;
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

  .page-title {
    font-size: 2rem;
  }

  .promo-slider {
    padding: 0 10px;
  }

  .promo-slider .casino-image {
    height: 180px;
  }

  .casino-section {
    margin-bottom: 30px;
  }

  .search-and-buttons {
    display: none;
  }
}

/* Estilos del footer y otros componentes comunes */
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
