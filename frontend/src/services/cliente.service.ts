import { api } from "@/lib/api";
import type { Reserva } from "./reserva.service";

export interface Cliente {
  id: number;
  nombres: string;
  apellidos: string;
  documentoIdentidad: string;
  licenciaConduccion: string;
  correo: string;
  telefono: string;
  direccion?: string;
  createdAt: string;
  updatedAt: string;
  reservas?: Reserva[];
}

export type CreateClienteDto = Omit<Cliente, "id" | "createdAt" | "updatedAt" | "reservas">;
export type UpdateClienteDto = Partial<CreateClienteDto>;

export const clienteService = {
  findAll: () => api.get<Cliente[]>("/cliente"),
  findOne: (id: number) => api.get<Cliente>(`/cliente/${id}`),
  create: (data: CreateClienteDto) => api.post<Cliente>("/cliente", data),
  update: (id: number, data: UpdateClienteDto) => api.put<Cliente>(`/cliente/${id}`, data),
  remove: (id: number) => api.delete<void>(`/cliente/${id}`),
};
