import { api } from "@/lib/api";
import type { Cliente } from "./cliente.service";
import type { Vehiculo } from "./vehiculo.service";

export type EstadoReserva = "PENDIENTE" | "CONFIRMADA" | "ACTIVA" | "FINALIZADA" | "CANCELADA";

export interface Reserva {
  id: number;
  clienteId: number;
  vehiculoId: number;
  fechaInicio: string;
  fechaFin: string;
  estado: EstadoReserva;
  createdAt: string;
  updatedAt: string;
  cliente?: Cliente;
  vehiculo?: Vehiculo;
}

export type CreateReservaDto = {
  clienteId: number;
  vehiculoId: number;
  fechaInicio: string;
  fechaFin: string;
  estado?: EstadoReserva;
};
export type UpdateReservaDto = Partial<CreateReservaDto>;

export const reservaService = {
  findAll: () => api.get<Reserva[]>("/reserva"),
  findOne: (id: number) => api.get<Reserva>(`/reserva/${id}`),
  create: (data: CreateReservaDto) => api.post<Reserva>("/reserva", data),
  update: (id: number, data: UpdateReservaDto) => api.put<Reserva>(`/reserva/${id}`, data),
  remove: (id: number) => api.delete<void>(`/reserva/${id}`),
};
