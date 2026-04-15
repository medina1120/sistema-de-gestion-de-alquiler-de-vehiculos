import { api } from "@/lib/api";

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
}

export type CreateReservaDto = Omit<Reserva, "id" | "createdAt" | "updatedAt">;
export type UpdateReservaDto = Partial<CreateReservaDto>;

export const reservaService = {
  findAll: () => api.get<Reserva[]>("/reserva"),
  findOne: (id: number) => api.get<Reserva>(`/reserva/${id}`),
  create: (data: CreateReservaDto) => api.post<Reserva>("/reserva", data),
  update: (id: number, data: UpdateReservaDto) => api.put<Reserva>(`/reserva/${id}`, data),
  remove: (id: number) => api.delete<void>(`/reserva/${id}`),
};
