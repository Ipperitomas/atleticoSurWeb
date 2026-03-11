<template>
  <section class="sponsors section">
    <div class="container">

      <div class="section-header">
        <span class="section-label">Nos acompañan</span>
        <br>
        <h2>Sponsors</h2>
      </div>

      <!-- Main Sponsor -->
      <div class="main-sponsor">
        <div class="main-sponsor-card">
          <span class="main-sponsor-badge">Sponsor Principal</span>
          <img :src="mainSponsor.logo" :alt="mainSponsor.name" />
        </div>
      </div>

      <!-- Rest of sponsors -->
      <div class="sponsors-grid">
        <div
          v-for="(sponsor, i) in sponsors"
          :key="i"
          class="sponsor-card"
          :class="{ 'sponsor-dark': sponsor.dark }"
        >
          <img :src="sponsor.logo" :alt="sponsor.name" />
        </div>
      </div>

      <p class="sponsors-cta">
        ¿Querés ser sponsor del club?
        <NuxtLink to="/contacto">Contactanos</NuxtLink>
      </p>

    </div>
  </section>
</template>

<script setup>
const mainSponsor = {
  name: 'Fleitas Propiedades',
  logo: '/sponsors/fleitaspropiedades.png'
}

const sponsors = [
  { name: 'F9 Indumentaria', logo: '/sponsors/F9 Indumentaria_Letras-negras.png', dark: false },
  { name: 'Martinez del Sel', logo: '/sponsors/LOGO-Martinesdelsel-negro.png', dark: false },
  { name: 'Estudio Powazniak', logo: '/sponsors/LOGOPOWAZNIAK.png', dark: false },
  { name: 'Herrería Noguera', logo: '/sponsors/HerreriaNoguera-Short.png', dark: false },
  { name: 'Rebrit', logo: '/sponsors/Rebrit.png', dark: false },
  { name: 'Boletix', logo: '/sponsors/Boletix-ShortFrente.png', dark: false },
  { name: 'MO', logo: '/sponsors/logoMONegro.png', dark: false },
  { name: 'Tipp Sistemas', logo: '/sponsors/tippNegro.png', dark: false }
]
</script>

<style scoped>
.sponsors {
  background: var(--white);
}

/* Main Sponsor */
.main-sponsor {
  max-width: 480px;
  margin: 0 auto 50px;
}

.main-sponsor-card {
  position: relative;
  background: var(--white);
  border-radius: var(--radius-xl);
  padding: 44px 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--celeste);
  box-shadow: 0 4px 30px rgba(58, 175, 224, 0.1);
  transition: var(--transition-base);
}

.main-sponsor-card:hover {
  box-shadow: 0 8px 40px rgba(58, 175, 224, 0.18);
  transform: translateY(-4px);
}

.main-sponsor-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  font-family: var(--font-heading);
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--white);
  background: linear-gradient(135deg, var(--celeste-light), var(--celeste));
  padding: 6px 20px;
  border-radius: 50px;
  white-space: nowrap;
}

.main-sponsor-card img {
  max-height: 100px;
  max-width: 320px;
  width: auto;
  object-fit: contain;
}

/* Sponsors Grid */
.sponsors-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  max-width: 1100px;
  margin: 0 auto;
}

.sponsor-card {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  min-height: 160px;
  border-radius: var(--radius-md);
  border: 1px solid var(--gray-200);
  background: var(--white);
  transition: var(--transition-base);
}

.sponsor-card:hover {
  border-color: var(--celeste);
  box-shadow: var(--shadow-md);
  transform: translateY(-3px);
}

.sponsor-card img {
  height: 120px;
  width: auto;
  max-width: 100%;
  object-fit: contain;
  transition: var(--transition-base);
}

/* Dark variant for white logos */
.sponsor-dark {
  background: var(--navy);
  border-color: var(--navy);
}

.sponsor-dark:hover {
  border-color: var(--celeste);
}

/* CTA */
.sponsors-cta {
  text-align: center;
  margin-top: 40px;
  color: var(--gray-400);
  font-size: 15px;
}

.sponsors-cta a {
  color: var(--celeste);
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 3px;
}

.sponsors-cta a:hover {
  color: var(--celeste-dark);
}

@media (max-width: 768px) {
  .sponsors-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 14px;
  }

  .main-sponsor-card {
    padding: 32px 24px;
  }

  .main-sponsor-card img {
    max-height: 70px;
  }

  .sponsor-card img {
    max-height: 60px;
  }
}
</style>
