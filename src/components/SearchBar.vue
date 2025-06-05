<template>
  <div class="search-bar-container">
    <input type="text" class="search-bar" placeholder="Buscar eventos..." />
    <button class="search-button">
      <svg class="search-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M21 21L16.65 16.65" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
  </div>
</template>

<style scoped>
/* Contenedor de la barra de búsqueda */
.search-bar-container {
  display: flex;
  align-items: center;
  background-color: #005A43; /* Color exacto de los inputs en LoginView */
  border-radius: 10px;
  border: 0.5px solid rgba(138, 160, 140, 0.24);
  padding: 5px;
  width: 100%;
  transition: all 0.3s ease;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.search-bar-container:focus-within {
  border-color: #2B7555;
}

/* Barra de búsqueda */
.search-bar {
  flex: 1;
  height: 45px;
  padding: 0 15px;
  border: none;
  border-radius: 8px;
  background: transparent;
  font-size: 16px;
  color: white;
  transition: all 0.3s ease;
}

.search-bar::placeholder {
  color: rgba(255, 255, 255, 0.7);
}

.search-bar:focus {
  outline: none;
}

/* Botón de búsqueda */
.search-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  border-radius: 8px;
}

.search-button:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

/* Icono de búsqueda */
.search-icon {
  width: 24px;
  height: 24px;
  color: white;
  opacity: 0.8;
  transition: opacity 0.3s ease;
}

.search-button:hover .search-icon {
  opacity: 1;
}

@media (max-width: 768px) {
  .search-bar {
    font-size: 14px;
    height: 40px;
  }
  
  .search-icon {
    width: 20px;
    height: 20px;
  }
}
</style>
