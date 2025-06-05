<template>
  <div class="mobile-footer">
    <HomeButton class="footer-icon" />
    <WalletButton class="footer-icon" />
    <ProfileButton class="footer-icon" />
  </div>
</template>

<script setup>
import HomeButton from './HomeButton.vue';
import WalletButton from './WalletButton.vue';
import ProfileButton from './ProfileButton.vue';
</script>

<style scoped>
.mobile-footer {
  display: none;
}

@media (max-width: 768px) {
  .mobile-footer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background: rgba(0, 90, 67, 0.95);
    backdrop-filter: blur(10px);
    border-top: 1px solid #2B7555;
    z-index: 1000;
  }

  .footer-icon :deep(img) {
    width: 30px;
    height: 30px;
    filter: brightness(0) invert(1);
  }
}
</style> 