<template>
  <section class="fiesta-galeria">
    <div class="container">
      <div class="content-block text-center">
        <span class="section-label">Momentos</span>
        <br>
        <h2>Galería de la Fiesta</h2>
        <div class="divider divider-center"></div>
      </div>

      <div class="galeria-grid">
        <div class="galeria-item galeria-featured">
          <img src="/fiestabufalo/fotoasado.jpeg" alt="Asado con cuero de búfalo" loading="lazy" />
        </div>
        <div
          v-for="(foto, i) in fotos"
          :key="i"
          class="galeria-item"
        >
          <img :src="foto.src" :alt="foto.alt" loading="lazy" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const fotos = [
  { src: '/fiestabufalo/caballosformados.jpeg', alt: 'Desfile de caballos con banderas' },
  { src: '/fiestabufalo/fotocaballostodos.jpeg', alt: 'Formación completa de jinetes' },
  { src: '/fiestabufalo/fotocaballito.jpeg', alt: 'Jinetes y tradición gaucha' },
  { src: '/fiestabufalo/fotopredio.jpeg', alt: 'Predio del Club Atlético Sur' },
  { src: '/fiestabufalo/fotofleitas.jpeg', alt: 'Público en la fiesta' },
]
</script>

<style scoped>
.fiesta-galeria {
  padding: 100px 0;
  background: var(--gray-50);
}

.content-block {
  margin-bottom: 48px;
}

.galeria-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 220px;
  gap: 8px;
}

.galeria-item {
  border-radius: var(--radius-md);
  overflow: hidden;
}

.galeria-featured {
  grid-column: 1 / 3;
  grid-row: 1 / 3;
}

.galeria-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: var(--transition-slow);
}

.galeria-item:hover img {
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .fiesta-galeria {
    padding: 60px 0;
  }

  .galeria-grid {
    grid-template-columns: 1fr;
  }

  .galeria-featured {
    grid-column: auto;
    grid-row: auto;
    aspect-ratio: 4/3;
  }
}
</style>
