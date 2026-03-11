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

## 4. Noticias - Pantallas (app\components\NewsSection.vue y app\pages\noticias.vue)

El frontend consume noticias de forma publica. El backend debe proveer un CRUD completo para el panel de gestion y un endpoint publico de lectura.

### 4.1 Listar noticias (publico)

**GET** `/api/news`

Devuelve las noticias publicadas, paginadas y ordenadas por fecha de publicacion (mas reciente primero).

#### Query Parameters

| Parametro  | Tipo   | Default | Descripcion                                      |
|-----------|--------|---------|--------------------------------------------------|
| `page`     | int    | 1       | Numero de pagina                                 |
| `per_page` | int    | 10      | Cantidad por pagina (max 50)                     |
| `category` | string | -       | Filtrar por categoria (ej: "Primera", "Escuelita") |

#### Response exitoso (200)

```json
{
  "data": [
    {
      "id": 1,
      "title": "Gran victoria de Atletico Sur",
      "excerpt": "El equipo de primera division logro una importante victoria por 2 a 0.",
      "content": "El equipo de primera division logro una importante victoria por 2 a 0 en la ultima fecha del campeonato. Un gran partido que deja al Sureno bien posicionado en la tabla.",
      "category": "Primera",
      "image_url": "https://tu-dominio.com/storage/news/imagen.jpg",
      "published_at": "2026-03-10T18:00:00-03:00",
      "created_at": "2026-03-10T15:00:00-03:00"
    }
  ],
  "meta": {
    "current_page": 1,
    "last_page": 3,
    "per_page": 10,
    "total": 25
  }
}
```

| Campo          | Tipo        | Descripcion                                    |
|---------------|-------------|------------------------------------------------|
| `id`           | int         | ID de la noticia                               |
| `title`        | string      | Titulo                                         |
| `excerpt`      | string      | Resumen corto (max ~200 caracteres)            |
| `content`      | string      | Contenido completo                             |
| `category`     | string      | Categoria (Primera, Escuelita, Institucional, etc.) |
| `image_url`    | string/null | URL de la imagen de portada (nullable)         |
| `published_at` | string      | Fecha de publicacion ISO 8601                  |
| `created_at`   | string      | Fecha de creacion ISO 8601                     |

#### Ejemplo fetch

```js
const response = await fetch('https://TU_DOMINIO/api/news?per_page=3', {
  headers: { 'Accept': 'application/json' },
});

const { data, meta } = await response.json();
// data = array de noticias
// meta = info de paginacion
```

---

### 4.2 Ver una noticia (publico)

**GET** `/api/news/{id}`

#### Response exitoso (200)

```json
{
  "data": {
    "id": 1,
    "title": "Gran victoria de Atletico Sur",
    "excerpt": "El equipo de primera division logro una importante victoria por 2 a 0.",
    "content": "Contenido completo de la noticia...",
    "category": "Primera",
    "image_url": "https://tu-dominio.com/storage/news/imagen.jpg",
    "published_at": "2026-03-10T18:00:00-03:00",
    "created_at": "2026-03-10T15:00:00-03:00"
  }
}
```

#### Response no encontrado (404)

```json
{
  "message": "Noticia no encontrada"
}
```

---

### 4.3 Crear noticia (panel de gestion, requiere autenticacion)

**POST** `/api/admin/news`

#### Request Body

```json
{
  "title": "Nueva noticia del club",
  "excerpt": "Resumen corto de la noticia",
  "content": "Contenido completo de la noticia...",
  "category": "Institucional",
  "image": "(archivo, opcional)",
  "is_published": true
}
```

| Campo          | Tipo    | Requerido | Max  | Descripcion                          |
|---------------|---------|-----------|------|--------------------------------------|
| `title`        | string  | si        | 255  | Titulo de la noticia                 |
| `excerpt`      | string  | si        | 500  | Resumen corto                        |
| `content`      | string  | si        | -    | Contenido completo (texto o HTML)    |
| `category`     | string  | si        | 100  | Categoria                            |
| `image`        | file    | no        | 2MB  | Imagen de portada (jpg, png, webp)   |
| `is_published` | boolean | no        | -    | Si es true, se publica inmediatamente. Si es false, queda como borrador. Default: false |

#### Response exitoso (201)

```json
{
  "message": "Noticia creada correctamente",
  "data": { ... }
}
```

#### Response con errores de validacion (422)

```json
{
  "message": "The title field is required.",
  "errors": {
    "title": ["The title field is required."]
  }
}
```

---

### 4.4 Editar noticia (panel de gestion, requiere autenticacion)

**PUT** `/api/admin/news/{id}`

Mismos campos que el POST de creacion. Todos opcionales (solo se actualizan los enviados).

#### Response exitoso (200)

```json
{
  "message": "Noticia actualizada correctamente",
  "data": { ... }
}
```

---

### 4.5 Eliminar noticia (panel de gestion, requiere autenticacion)

**DELETE** `/api/admin/news/{id}`

#### Response exitoso (200)

```json
{
  "message": "Noticia eliminada correctamente"
}
```

---

### 4.6 Publicar / Despublicar noticia (panel de gestion, requiere autenticacion)

**PATCH** `/api/admin/news/{id}/toggle-publish`

Cambia el estado de publicacion de la noticia. Si esta publicada la despublica, y viceversa.

#### Response exitoso (200)

```json
{
  "message": "Noticia publicada correctamente",
  "is_published": true,
  "published_at": "2026-03-11T14:00:00-03:00"
}
```

---

### Notas sobre Noticias

- Solo las noticias con `is_published = true` aparecen en el GET publico `/api/news`.
- Las rutas `/api/admin/news/*` requieren autenticacion (middleware `auth:sanctum`).
- Las categorias sugeridas son: **Primera**, **Escuelita**, **Institucional**, **Juveniles**. Pero el campo es libre (string), asi pueden agregar nuevas categorias sin tocar codigo.
- La imagen se sube como `multipart/form-data` en el POST/PUT de creacion/edicion.
- El frontend del sitio publico solo necesita los endpoints 4.1 (listar) y 4.2 (ver una).

---

## Notas

- Si el backend esta en un dominio distinto al frontend, los CORS ya estan configurados por Laravel Sanctum.
- Los errores de validacion (422) siempre devuelven un objeto `errors` con los campos que fallaron.
- El campo `date` del partido viene en formato ISO 8601 con timezone, lo pueden parsear directo con `new Date(match.date)`.
