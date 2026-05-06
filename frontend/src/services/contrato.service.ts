import { api } from "@/lib/api";
import type { Reserva } from "./reserva.service";

export type EstadoContrato = "VIGENTE" | "FINALIZADO" | "CANCELADO";

export interface Contrato {
  id: number;
  reservaId: number;
  fechaEntrega: string;
  condiciones?: string;
  valorTotal: number;
  estado: EstadoContrato;
  createdAt: string;
  updatedAt: string;
  reserva?: Reserva;
}

export type CreateContratoDto = {
  reservaId: number;
  fechaEntrega: string;
  condiciones?: string;
  estado?: EstadoContrato;
};
export type UpdateContratoDto = Partial<CreateContratoDto>;

export const contratoService = {
  findAll: () => api.get<Contrato[]>("/contrato"),
  findOne: (id: number) => api.get<Contrato>(`/contrato/${id}`),
  create: (data: CreateContratoDto) => api.post<Contrato>("/contrato", data),
  update: (id: number, data: UpdateContratoDto) => api.put<Contrato>(`/contrato/${id}`, data),
  remove: (id: number) => api.delete<void>(`/contrato/${id}`),
};
