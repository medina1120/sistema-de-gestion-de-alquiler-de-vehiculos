# Sistema de Gestion de Alquiler de Vehiculos
## 🎓 Sistema de Gestión de Alquiler de Vehículos

Proyecto full-stack guiado por el docente · Programación Avanzada 2026A  
Corporación Universitaria del Huila — CORHUILA · Ingeniería de Sistemas

![NestJS](https://img.shields.io/badge/NestJS-10-red)
![Next.js](https://img.shields.io/badge/Next.js-16-black)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-blue)
![Docker](https://img.shields.io/badge/Docker-latest-blue)
![Prisma](https://img.shields.io/badge/Prisma-7.5-darkblue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)

![Estado](https://img.shields.io/badge/Estado-Release%202-green)
![Sprints](https://img.shields.io/badge/Sprints-5%20de%205%20completos-blue)

---
## 📑 Tabla de Contenidos

- [📌 Descripción](#-descripción)
- [🚀 Tecnologías](#-tecnologías)
- [📚 Casos de Uso](#-casos-de-uso)
- [🗄️ Modelo de Datos](#️-modelo-de-datos)
- [📊 Tablero Kanban](#-tablero-kanban)
- [👥 Equipo](#-equipo)
- [📅 Sprints](#-sprints)
- [⚙️ Instalación y Ejecución](#️-instalación-y-ejecución)
- [🌐 Servicios](#-servicios)
## 📌 Descripción
Sistema para la gestión de alquiler de vehículos...

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
| **Vehiculo** | id, marca, modelo, año, placa (unique), tipo (TipoVehiculo), estado (EstadoVehiculo), precioPorDia, kilometraje,
| **Cliente** | id, nombres, apellidos, documento Identidad (unique), licenciaConduccion (unique), correo (unique), telefono, direccion, 
| **Reserva** | id, cliente, vehiculo, fechaInicio, fechaFin, estado (EstadoReserva)
| **Contrato** | id, reserva (unique), fechaEntrega, valorTotal, condiciones, estado (EstadoContrato), 
| **Devolucion** | id, contrato (unique), fechaDevolucion, estadoVehiculo, kilometrajeRetorno, cargosAdicionales, observaciones, 
| **Mantenimiento** | id, vehiculo, tipo (TipoMantenimiento), descripcion, costo, fecha, 

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
## 📊 Tablero Kanban

🔗 [Ver tablero Kanban](https://github.com/medina1120/sistema-de-gestion-de-alquiler-de-vehiculos/projects)

| Todo | In Progress | Done |
|------|------------|------|
| — | — | INFRA, HU-01, HU-02, HU-03, HU-04, HU-05, HU-06, HU-07, HU-08, HU-09, HU-10 (11 items) |

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
# 
Se usó asistencia de IA (Claude) para la implementación de la lógica 
