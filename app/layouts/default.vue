<template>
  <div class="app-layout">
    <Navbar />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}
</style>
