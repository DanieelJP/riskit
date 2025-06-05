<template>
  <button 
    :class="['gender-button', { selected: modelValue === gender }]" 
    @click="$emit('update:modelValue', gender)">
    {{ gender }}
  </button>
</template>

<script setup>
defineProps(["gender", "modelValue"]);
defineEmits(["update:modelValue"]);
</script>

<style scoped>
.gender-button {
  padding: 10px 20px;
  font-size: 18px;
  border: 2px solid Seagreen;
  background: #005A43;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.3s;
  width: 250px;
  height: 40px;
  flex-shrink: 0;
}

.gender-button.selected {
  background: white;
  color: #2B7555;
}
</style>
