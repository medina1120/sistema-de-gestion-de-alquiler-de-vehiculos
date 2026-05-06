# Sistema de Gestion de Alquiler de Vehiculos

Proyecto full-stack para gestion de alquiler de vehiculos con NestJS + Next.js + PostgreSQL + Docker + Prisma

## Tecnologias

- **Backend:** NestJS + TypeScript + Prisma ORM
- **Frontend:** Next.js + TypeScript + Tailwind CSS
- **Base de datos:** PostgreSQL
- **Infraestructura:** Docker + Docker Compose

## Casos de Uso

- CU-01: Registrar vehículo con marca, modelo, año, placa, tipo (sedán, SUV, camioneta) y estado.
- CU-02: Registrar cliente con datos personales, licencia de conducción y contacto
- CU-03: Crear reserva seleccionando vehículo, fecha de inicio, fecha de fin y verificando disponibilidad
- CU-04: Generar contrato de alquiler al entregar el vehículo con condiciones y valor total.
- CU-05: Registrar devolución del vehículo con revisión de estado y cálculo de cargos adicionales

## Modelo de Datos

### Diagrama de Relaciones

```
Cliente            1 ──── N  Reserva
Vehiculo           1 ──── N  Reserva
Vehiculo           1 ──── N  Mantenimiento
Reserva            1 ──── 1  Contrato
Contrato           1 ──── 1  Devolucion
```

### Entidades

| Entidad | Campos Principales |
|---------|--------------------|
| **Vehiculo** | id, marca, modelo, anio, placa (unique), tipo (TipoVehiculo), estado (EstadoVehiculo), precioPorDia, kilometraje, createdAt, updatedAt |
| **Cliente** | id, nombres, apellidos, documentoIdentidad (unique), licenciaConduccion (unique), correo (unique), telefono, direccion, createdAt, updatedAt |
| **Reserva** | id, clienteId, vehiculoId, fechaInicio, fechaFin, estado (EstadoReserva), createdAt, updatedAt |
| **Contrato** | id, reservaId (unique), fechaEntrega, valorTotal, condiciones, estado (EstadoContrato), createdAt, updatedAt |
| **Devolucion** | id, contratoId (unique), fechaDevolucion, estadoVehiculo, kilometrajeRetorno, cargosAdicionales, observaciones, createdAt, updatedAt |
| **Mantenimiento** | id, vehiculoId, tipo (TipoMantenimiento), descripcion, costo, fecha, createdAt, updatedAt |

### Enumeraciones

| Enum | Valores |
|------|---------|
| **TipoVehiculo** | SEDAN, SUV, CAMIONETA, DEPORTIVO, FURGONETA |
| **EstadoVehiculo** | DISPONIBLE, ALQUILADO, MANTENIMIENTO, FUERA_DE_SERVICIO |
| **EstadoReserva** | PENDIENTE, CONFIRMADA, ACTIVA, FINALIZADA, CANCELADA |
| **EstadoContrato** | VIGENTE, FINALIZADO, CANCELADO |
| **TipoMantenimiento** | PREVENTIVO, CORRECTIVO, REVISION |

## Historias de Usuario

| HU | Descripción | Capa |
|----|-------------|------|
| HU-01 | Gestión de Vehículos (CRUD) | Backend |
| HU-02 | Gestión de Clientes (CRUD) | Backend |
| HU-03 | Crear Reserva con validación de fechas | Backend |
| HU-04 | Verificar Disponibilidad del Vehículo | Backend |
| HU-05 | Generar Contrato de Alquiler con cálculo de valor total | Backend |
| HU-06 | Registrar Devolución con cálculo de cargos | Backend |
| HU-07 | Actualizar Estado del Vehículo | Backend |
| HU-08 | Registrar Mantenimiento de Vehículo | Backend |
| HU-09 | Listar Vehículos Disponibles | Frontend |
| HU-10 | Consultar Historial de Reservas del Cliente | Frontend |

## Equipo

- Cristhian Gaitan Guzman
- Yilver Isnardo Medina Urrea

## Sprints

| Sprint | Periodo | Alcance |
|--------|---------|---------|
| Sprint 1 | Abr 05 - Abr 18 | Infraestructura y entidades base |
| Sprint 2 | Abr 19 - Abr 25 | Reservas y disponibilidad |
| Sprint 3 | Abr 26 - May 02 | Contratos y devoluciones |
| Sprint 4 | May 03 - May 16 | Frontend avanzado |
| Sprint 5 | May 17 - May 22 | Cierre y despliegue |

## Instalación y Ejecución

### Prerrequisitos

- Docker Desktop
- Node.js 22 LTS (solo para desarrollo local)
- Git

### Levantar con Docker

```bash
# 1. Clonar el repositorio
git clone https://github.com/medina1120/sistema-de-gestion-de-alquiler-de-vehiculos.git
cd sistema-de-gestion-de-alquiler-de-vehiculos

# 2. Crear archivo .env
cp .env.example .env

# 3. Levantar todo
docker compose up --build
```

### Servicios

| Servicio | URL |
|----------|-----|
| Frontend | http://localhost:3000 |
| API REST | http://localhost:3001/api/v1 |
| PostgreSQL | localhost:5432 |
