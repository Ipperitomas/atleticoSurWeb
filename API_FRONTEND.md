# API Endpoints para el Frontend

Base URL: `https://TU_DOMINIO/api`

podemos hacer un .env o un lugar global para cambiarlo solo una vez.

Todos los endpoints son **publicos** (no requieren autenticacion).

Los requests deben incluir los headers:
```
Content-Type: application/json
Accept: application/json
```

---

## 1. Solicitud de Socio -  Pantalla (app\pages\socios.vue)

**POST** `/api/membership-requests`

Envia una solicitud para ser socio del club.

### Request Body

```json
{
  "first_name": "Juan",
  "last_name": "Perez",
  "email": "juan@email.com",
  "phone": "3446-123456",
  "message": "Me gustaria ser socio del club"
}
```

| Campo        | Tipo   | Requerido | Max  | Descripcion         |
|-------------|--------|-----------|------|---------------------|
| `first_name` | string | si        | 255  | Nombre              |
| `last_name`  | string | si        | 255  | Apellido            |
| `email`      | string | si        | 255  | Email (formato valido) |
| `phone`      | string | no        | 50   | Telefono            |
| `message`    | string | no        | 2000 | Mensaje             |

### Response exitoso (201)

```json
{
  "message": "Solicitud enviada correctamente"
}
```

### Response con errores de validacion (422)

```json
{
  "message": "The first name field is required.",
  "errors": {
    "first_name": ["The first name field is required."],
    "email": ["The email field must be a valid email address."]
  }
}
```

### Ejemplo fetch

```js
const response = await fetch('https://TU_DOMINIO/api/membership-requests', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  body: JSON.stringify({
    first_name: 'Juan',
    last_name: 'Perez',
    email: 'juan@email.com',
    phone: '3446-123456',
    message: 'Me gustaria ser socio del club',
  }),
});

if (response.ok) {
  const data = await response.json();
  // { message: "Solicitud enviada correctamente" }
} else if (response.status === 422) {
  const errors = await response.json();
  // errors.errors contiene los campos con error
}
```

---

## 2. Mensaje de Contacto - Pantalla (app\pages\contacto.vue)

**POST** `/api/contact-messages`

Envia un mensaje de contacto.

### Request Body

```json
{
  "name": "Maria Garcia",
  "email": "maria@email.com",
  "message": "Queria consultar sobre los horarios de actividades"
}
```

| Campo     | Tipo   | Requerido | Max  | Descripcion         |
|----------|--------|-----------|------|---------------------|
| `name`    | string | si        | 255  | Nombre              |
| `email`   | string | si        | 255  | Email (formato valido) |
| `message` | string | si        | 5000 | Tu mensaje          |

### Response exitoso (201)

```json
{
  "message": "Mensaje enviado correctamente"
}
```

### Response con errores de validacion (422)

```json
{
  "message": "The message field is required.",
  "errors": {
    "message": ["The message field is required."]
  }
}
```

### Ejemplo fetch

```js
const response = await fetch('https://TU_DOMINIO/api/contact-messages', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  body: JSON.stringify({
    name: 'Maria Garcia',
    email: 'maria@email.com',
    message: 'Queria consultar sobre los horarios de actividades',
  }),
});

if (response.ok) {
  const data = await response.json();
  // { message: "Mensaje enviado correctamente" }
} else if (response.status === 422) {
  const errors = await response.json();
  // errors.errors contiene los campos con error
}
```

---

## 3. Siguiente Partido -  Pantalla (app\components\NextMatch.vue)

**GET** `/api/next-match`

Devuelve los datos del proximo partido del club.

### Response exitoso (200) - Con partido configurado

```json
{
  "home": {
    "name": "Atletico Sur",
    "logo": "/logo.png",
    "isLocal": true
  },
  "away": {
    "name": "Defensores del Oeste",
    "logo": "https://ejemplo.com/logo-visitante.png",
    "isLocal": false
  },
  "date": "2026-03-12T22:00:00-03:00",
  "league": "Copa Gualeguaychu - Liga Departamental",
  "venue": "Estadio Municipal",
  "matchday": "Fecha 2"
}
```

| Campo            | Tipo    | Descripcion                              |
|-----------------|---------|------------------------------------------|
| `home.name`      | string  | Nombre del equipo local                  |
| `home.logo`      | string  | URL del logo del equipo local            |
| `home.isLocal`   | boolean | Si es el equipo de casa                  |
| `away.name`      | string  | Nombre del equipo visitante              |
| `away.logo`      | string  | URL del logo del equipo visitante        |
| `away.isLocal`   | boolean | Si es el equipo de casa                  |
| `date`           | string  | Fecha y hora en formato ISO 8601         |
| `league`         | string  | Nombre de la liga o torneo               |
| `venue`          | string  | Nombre del estadio o cancha              |
| `matchday`       | string  | Jornada o fecha del torneo               |

### Response sin partido configurado (200)

```json
null
```

### Ejemplo fetch

```js
const response = await fetch('https://TU_DOMINIO/api/next-match', {
  headers: {
    'Accept': 'application/json',
  },
});

const match = await response.json();

if (match) {
  // Hay un proximo partido
  console.log(match.home.name);   // "Atletico Sur"
  console.log(match.away.name);   // "Defensores del Oeste"
  console.log(match.date);        // "2026-03-12T22:00:00-03:00"
  console.log(match.league);      // "Copa Gualeguaychu - Liga Departamental"
  console.log(match.venue);       // "Estadio Municipal"
  console.log(match.matchday);    // "Fecha 2"
} else {
  // No hay partido configurado
}
```

---

## Notas

- Si el backend esta en un dominio distinto al frontend, los CORS ya estan configurados por Laravel Sanctum.
- Los errores de validacion (422) siempre devuelven un objeto `errors` con los campos que fallaron.
- El campo `date` del partido viene en formato ISO 8601 con timezone, lo pueden parsear directo con `new Date(match.date)`.
