<template>
  <div class="container mx-auto py-8">
    <div class="flex justify-center">
      <!-- Home Tab -->
      <router-link :to="{ name: 'home' }" class="tab" :class="{ 'active': $route.name === 'home' }">Home</router-link>

      <!-- Todo Tab -->
      <router-link :to="{ name: 'todo' }" class="tab" :class="{ 'active': $route.name === 'todo' }">Todo</router-link>

      <!-- About Tab -->
      <router-link :to="{ name: 'about' }" class="tab" :class="{ 'active': $route.name === 'about' }">About</router-link>

      <!-- Practices Tab -->
      <router-link :to="{ name: 'practice' }" class="tab" :class="{ 'active': $route.name === 'practice' }">Practice</router-link>
    </div>

    <!-- Router View for rendering components -->
    <router-view/>
  </div>
</template>

<style scoped>
.tab {
  cursor: pointer;
  padding: 10px 20px;
  margin: 0 10px;
  border-radius: 5px;
  background-color: #e2e8f0;
  color: #4a5568;
  transition: background-color 0.3s ease;
}

.tab.active {
  background-color: #2d3748;
  color: #fff;
}
</style>
