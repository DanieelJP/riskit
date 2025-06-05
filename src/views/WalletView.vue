<template>
  <ion-page>
    <div class="wallet-container">
      <!-- Banner superior -->
      <header class="top-bar">
        <span class="logo-text">RISK IT!</span>
        <div class="top-bar-gradient"></div>
      </header>

      <!-- Contenido principal -->
      <div class="main-content">
        <div class="wallet-card">
          <!-- Tarjeta de banco -->
          <div class="bank-card">
            <div class="card-content">
              <div class="card-header">
                <span class="card-label">Available Balance</span>
                <img src="/logo.png" alt="Risk It" class="card-logo" />
              </div>
              <div class="balance">
                <span class="currency">$</span>
                <number-animation 
                  ref="numberAnimation"
                  :from="0"
                  :to="currentBalance"
                  :duration="1"
                  :delay="0.5"
                  :format="numberWithCommas"
                />
              </div>
              <div class="card-footer">
                <span>**** **** **** 4242</span>
                <span>VIRTUAL CARD</span>
              </div>
            </div>
          </div>

          <!-- Botón para abrir modal -->
          <button @click="showModal = true" class="add-funds-button">
            Add Funds
          </button>

          <!-- Modal de depósito -->
          <div v-if="showModal" class="modal-overlay">
            <div class="modal-content">
              <h2>Add Funds</h2>
              <div class="amount-input">
                <span class="currency-symbol">$</span>
                <input 
                  type="number" 
                  v-model="depositAmount" 
                  placeholder="Enter amount"
                  min="0"
                />
              </div>
              <div class="modal-buttons">
                <button @click="showModal = false" class="cancel-button">
                  Cancel
                </button>
                <button @click="addFunds" class="confirm-button">
                  Add Funds
                </button>
              </div>
            </div>
          </div>

          <!-- Historial de transacciones -->
          <div class="transactions-section">
            <h3>Recent Transactions</h3>
            <div class="transaction-list">
              <div 
                v-for="(transaction, index) in transactions" 
                :key="index" 
                class="transaction-item"
              >
                <div class="transaction-info">
                  <span class="transaction-type deposit">Deposit</span>
                  <span class="transaction-date">{{ transaction.date }}</span>
                </div>
                <span class="transaction-amount positive">+${{ transaction.amount }}</span>
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
import { IonPage } from '@ionic/vue';
import NumberAnimation from 'vue-number-animation';
import MobileFooter from '@/components/MobileFooter.vue';

const currentBalance = ref(1234.56);
const depositAmount = ref('');
const transactions = ref([]);
const showModal = ref(false);

const numberWithCommas = (num) => {
  return num.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const addFunds = () => {
  const amount = parseFloat(depositAmount.value);
  if (amount > 0) {
    currentBalance.value += amount;
    transactions.value.unshift({
      amount: amount.toFixed(2),
      date: new Date().toLocaleDateString()
    });
    depositAmount.value = '';
    showModal.value = false;  // Cerrar modal después de añadir fondos
  }
};
</script>

<style scoped>
.wallet-container {
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

.wallet-card {
  background: rgba(0, 90, 67, 0.91);
  border: 1px solid #2B7555;
  border-radius: 20px;
  padding: 30px;
  width: 100%;
  max-width: 600px;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.bank-card {
  background: linear-gradient(135deg, #2B7555 0%, #1a4731 100%);
  border-radius: 20px;
  padding: 25px;
  margin-bottom: 30px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.card-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-label {
  font-size: 14px;
  opacity: 0.8;
}

.card-logo {
  width: 80px;
  height: 80px;
  object-fit: contain;
  margin-left: 10px;
}

.balance {
  font-size: 36px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 5px;
}

.currency {
  font-size: 24px;
  opacity: 0.8;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  opacity: 0.8;
}

.add-funds-button {
  width: 100%;
  padding: 15px;
  background: #e74c3c;  /* Color rojo */
  border: none;
  border-radius: 10px;
  color: white;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 30px;
}

.add-funds-button:hover {
  background: #c0392b;
  transform: translateY(-2px);
}

.transactions-section {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 30px;
}

.transactions-section h3 {
  font-size: 18px;
  margin-bottom: 20px;
}

.transaction-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.transaction-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
}

.transaction-info {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.transaction-type {
  font-weight: 500;
}

.transaction-type.deposit {
  color: #2ecc71;
}

.transaction-type.withdraw {
  color: #e74c3c;
}

.transaction-date {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
}

.transaction-amount {
  font-weight: 600;
}

.transaction-amount.positive {
  color: #2ecc71;
}

.transaction-amount.negative {
  color: #e74c3c;
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

/* Estilos del modal */
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
}

.modal-buttons {
  display: flex;
  gap: 15px;
  margin-top: 20px;
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
  background: #2ecc71;
  border: none;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
}

.cancel-button:hover,
.confirm-button:hover {
  transform: translateY(-2px);
}

/* Estilos del input en el modal */
.amount-input {
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
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
  background: rgba(43, 117, 85, 0.5); /* Color verde más oscuro */
  border: 2px solid #2B7555;
  border-radius: 10px;
  color: white;
  font-size: 18px;
  transition: all 0.3s ease;
}

input[type="number"]::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

input[type="number"]:focus {
  outline: none;
  border-color: #3cc47c;
  background: rgba(43, 117, 85, 0.7);
  box-shadow: 0 0 10px rgba(60, 196, 124, 0.3);
}

/* Quitar flechas del input number */
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

@media (max-width: 768px) {
  .wallet-card {
    padding: 20px;
  }

  .bank-card {
    padding: 20px;
  }

  .balance {
    font-size: 30px;
  }

  .logo-text {
    font-size: 40px;
  }

  .card-logo {
    width: 65px;
    height: 65px;
  }

  input[type="number"] {
    font-size: 16px;
    padding: 12px 12px 12px 30px;
  }

  .add-funds-button {
    padding: 10px;
  }

  .modal-content {
    width: 95%;
    padding: 20px;
  }

  .desktop-footer {
    display: none; /* Ocultar footer desktop en móvil */
  }

  .wallet-container {
    padding-bottom: 60px; /* Espacio para el footer móvil */
  }
}
</style> 