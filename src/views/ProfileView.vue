<template>
  <ion-page>
    <div class="profile-container">
      <!-- Banner superior -->
      <header class="top-bar">
        <span class="logo-text">RISK IT!</span>
        <div class="top-bar-gradient"></div>
      </header>

      <!-- Contenido principal -->
      <div class="main-content">
        <div class="profile-card">
          <div class="profile-header">
            <div class="profile-avatar">
              <div class="avatar-placeholder"></div>
              <button class="edit-avatar-btn">
                Edit
              </button>
            </div>
            <h1 class="username">Username</h1>
          </div>

          <div class="profile-info">
            <div class="info-item">
              <span class="label">Email</span>
              <span class="value">user@example.com</span>
            </div>
            <div class="info-item">
              <span class="label">Password</span>
              <span class="value">••••••••</span>
            </div>
            <div class="info-item">
              <span class="label">Country</span>
              <span class="value">Spain</span>
            </div>
            <div class="info-item">
              <span class="label">Mobile Number</span>
              <span class="value">+34 600 000 000</span>
            </div>
            <div class="info-item">
              <span class="label">Member since</span>
              <span class="value">January 2024</span>
            </div>
          </div>

          <div class="profile-actions">
            <button class="action-button logout">
              Logout
            </button>
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
import { IonPage } from '@ionic/vue';
import MobileFooter from '@/components/MobileFooter.vue';
</script>

<style scoped>
.profile-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #006C52;
  padding-top: 90px;
  color: white;
  font-family: 'Poppins', sans-serif;
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
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
}

.profile-card {
  background: rgba(0, 90, 67, 0.91);
  border: 1px solid #2B7555;
  border-radius: 20px;
  padding: 30px;
  width: 100%;
  max-width: 600px;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.profile-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
}

.profile-avatar {
  position: relative;
  width: 120px;
  height: 120px;
}

.avatar-placeholder {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  border: 3px solid #2B7555;
}

.edit-avatar-btn {
  position: absolute;
  bottom: 0;
  right: 0;
  background: #2B7555;
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
}

.username {
  font-size: 24px;
  font-weight: 600;
  margin: 0;
}

.profile-info {
  margin-bottom: 30px;
}

.info-item {
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.label {
  color: rgba(255, 255, 255, 0.7);
}

.value {
  font-weight: 500;
}

.profile-actions {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.action-button {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  background: rgba(43, 117, 85, 0.3);
  color: white;
}

.action-button:hover {
  background: rgba(43, 117, 85, 0.5);
  transform: translateY(-2px);
}

.action-button.logout {
  background: rgba(220, 53, 69, 0.3);
}

.action-button.logout:hover {
  background: rgba(220, 53, 69, 0.5);
}

.footer {
  width: 100%;
  background: rgba(0, 90, 67, 0.91);
  backdrop-filter: blur(10px);
  padding: 20px 0;
  border-top: 1px solid #2B7555;
}

.footer-content {
  text-align: center;
  padding: 0 20px;
}

@media (max-width: 768px) {
  .profile-card {
    padding: 20px;
  }

  .username {
    font-size: 20px;
  }

  .action-button {
    padding: 12px;
    font-size: 14px;
  }

  .desktop-footer {
    display: none;
  }

  .profile-container {
    padding-bottom: 60px; /* Espacio para el footer móvil */
  }
}
</style> 