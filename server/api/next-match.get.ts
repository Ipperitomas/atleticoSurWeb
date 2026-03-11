export default defineEventHandler(async () => {
  // TODO: Reemplazar esta URL con tu API real
  // Ejemplo: const data = await $fetch('https://tu-api.com/next-match')

  // Por ahora devolvemos datos fake simulando la respuesta de una API
  const data = {
    home: {
      name: 'Atlético Sur',
      logo: '/logo.png',
      isLocal: true
    },
    away: {
      name: 'Defensores del Oeste',
      logo: '/logovisitante.png',
      isLocal: false
    },
    date: '2026-03-12T22:00:00',
    league: 'Copa Gualeguaychú -Liga Departamental',
    venue: 'Estadio Municipal',
    matchday: 'Fecha 2'
  }

  return data
})
