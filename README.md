# NestJS Multi-Tenant Auth API. Reservas, citas, gestor de tiempos.

## 🚀 Descripción

API de autenticación multitenant mediante `tenantId`, `apiKey` y `apiSecret`. Emite tokens JWT válidos por 24h. Además da la
posibilidad de registrar recursos por tenant y gestionar reservas de tiempo para esos recursos.

## 🧪 Endpoints

- `POST /auth/login` → genera JWT
- `POST /resources` → crea un recurso de una empresa(tenantId) y devuelve el resultado creado
- `POST /reservations` → crea una reserva de una fecha inicial a una final
- `GET /reservations/{resourceId}` → devuelve lista de reservas de un recurso a través de su id y tenantId recuperado desde token

## 🔧 Uso

```bash
docker-compose up -d
npm install
npm run seed
npm run start
```

## 📖 Swagger

Disponible en: `http://localhost:3000/api`

## 🛠 Requisitos

- Node.js 22.14.0
- MongoDB
