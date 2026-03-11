<template>
  <nav class="navbar" :class="{ scrolled: isScrolled, 'menu-open': menuOpen }">
    <div class="nav-container">

      <NuxtLink to="/" class="logo">
        <img src="/logo.png" alt="Atlético Sur" class="logo-img" />
        <div class="logo-text">
          <span class="logo-name">Atlético Sur</span>
          <span class="logo-sub">Gualeguaychú</span>
        </div>
      </NuxtLink>

      <ul class="menu" :class="{ open: menuOpen }">
        <li><NuxtLink to="/" @click="menuOpen = false">Inicio</NuxtLink></li>
        <li><NuxtLink to="/el-club" @click="menuOpen = false">El Club</NuxtLink></li>
        <li><NuxtLink to="/futbol" @click="menuOpen = false">Fútbol</NuxtLink></li>
        <li><NuxtLink to="/noticias" @click="menuOpen = false">Noticias</NuxtLink></li>
        <li><NuxtLink to="/socios" @click="menuOpen = false">Socios</NuxtLink></li>
        <li><NuxtLink to="/contacto" @click="menuOpen = false">Contacto</NuxtLink></li>
      </ul>

      <NuxtLink to="/socios" class="nav-cta">Hacete Socio</NuxtLink>

      <button class="hamburger" @click="menuOpen = !menuOpen" aria-label="Menú">
        <span></span>
        <span></span>
        <span></span>
      </button>

    </div>
  </nav>
</template>

<script setup>
const isScrolled = ref(false)
const menuOpen = ref(false)

onMounted(() => {
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 50
  })
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 16px 0;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.navbar.scrolled {
  background: rgba(10, 22, 40, 0.95);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  padding: 10px 0;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.15);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
}

/* Logo */
.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  color: white;
  z-index: 10;
}

.logo-img {
  height: 44px;
  width: auto;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
  transition: var(--transition-base);
}

.navbar.scrolled .logo-img {
  height: 36px;
}

.logo-text {
  display: flex;
  flex-direction: column;
}

.logo-name {
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 18px;
  letter-spacing: 0.02em;
  line-height: 1.1;
}

.logo-sub {
  font-size: 11px;
  opacity: 0.6;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-weight: 500;
}

/* Menu */
.menu {
  display: flex;
  gap: 8px;
  list-style: none;
}

.menu a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-family: var(--font-heading);
  font-weight: 500;
  font-size: 14px;
  padding: 8px 16px;
  border-radius: 6px;
  transition: var(--transition-fast);
  letter-spacing: 0.02em;
}

.menu a:hover,
.menu a.router-link-active {
  color: white;
  background: rgba(255, 255, 255, 0.1);
}

.menu a.router-link-exact-active {
  color: var(--celeste-light);
  background: rgba(58, 175, 224, 0.1);
}

/* CTA Button */
.nav-cta {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 13px;
  padding: 10px 24px;
  border-radius: 6px;
  background: linear-gradient(135deg, var(--gold), var(--gold-dark));
  color: var(--navy);
  text-decoration: none;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  transition: var(--transition-base);
  box-shadow: 0 2px 10px rgba(201, 168, 76, 0.3);
}

.nav-cta:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 20px rgba(201, 168, 76, 0.4);
}

/* Hamburger */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  z-index: 10;
  box-shadow: none;
}

.hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background: white;
  border-radius: 2px;
  transition: var(--transition-base);
}

.menu-open .hamburger span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.menu-open .hamburger span:nth-child(2) {
  opacity: 0;
}

.menu-open .hamburger span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

/* Mobile */
@media (max-width: 960px) {
  .hamburger {
    display: flex;
  }

  .nav-cta {
    display: none;
  }

  .menu {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(10, 22, 40, 0.98);
    backdrop-filter: blur(20px);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    opacity: 0;
    visibility: hidden;
    transition: var(--transition-base);
  }

  .menu.open {
    opacity: 1;
    visibility: visible;
  }

  .menu a {
    font-size: 20px;
    padding: 14px 32px;
  }
}
</style>
