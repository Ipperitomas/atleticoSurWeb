<template>
  <section class="fiesta-historia">
    <div class="container">
      <div class="content-block text-center">
        <span class="section-label">Nuestra Tradición</span>
        <br>
        <h2>Historia de la Fiesta</h2>
        <div class="divider divider-center"></div>
      </div>

      <div class="historia-content">
        <p>
          La <strong>Fiesta de la Música Popular y el Asado con Cuero de Búfalo</strong> es uno de los eventos más
          tradicionales organizados por el Club Atlético Sur de Gualeguaychú.
        </p>
        <p>
          Cada año, vecinos y visitantes de toda la región se reúnen en el predio del club para compartir una jornada
          donde la gastronomía, la música y las tradiciones argentinas son protagonistas.
        </p>
        <p>
          El evento tiene como plato principal el tradicional <strong>asado con cuero de búfalo</strong>, preparado por
          experimentados asadores, acompañado de comidas típicas y cantina popular.
        </p>
        <p>
          La fiesta también incluye espectáculos de música folklórica, bailes populares y destrezas criollas que forman
          parte de la cultura de nuestra región.
        </p>
        <p>
          Con entrada libre y gratuita, la fiesta representa el espíritu comunitario del club y busca fortalecer la
          identidad cultural de Gualeguaychú.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.fiesta-historia {
  padding: 100px 0;
  background: var(--white);
}

.content-block {
  margin-bottom: 48px;
}

.historia-content {
  max-width: 760px;
  margin: 0 auto;
}

.historia-content p {
  font-size: 17px;
  line-height: 1.9;
  color: var(--gray-700);
  margin-bottom: 20px;
}

.historia-content p:last-child {
  margin-bottom: 0;
}

.historia-content strong {
  color: var(--navy);
  font-weight: 600;
}

@media (max-width: 768px) {
  .fiesta-historia {
    padding: 60px 0;
  }

  .historia-content p {
    font-size: 16px;
  }
}
</style>
