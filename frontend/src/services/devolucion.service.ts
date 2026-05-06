import { api } from "@/lib/api";
import type { Contrato } from "./contrato.service";

export interface Devolucion {
  id: number;
  contratoId: number;
  fechaDevolucion: string;
  estadoVehiculo: string;
  kilometrajeRetorno: number;
  cargosAdicionales: number;
  observaciones?: string;
  createdAt: string;
  updatedAt: string;
  contrato?: Contrato;
}

export type CreateDevolucionDto = {
  contratoId: number;
  fechaDevolucion: string;
  estadoVehiculo: string;
  kilometrajeRetorno: number;
  cargosAdicionales?: number;
  observaciones?: string;
};
export type UpdateDevolucionDto = Partial<CreateDevolucionDto>;

export const devolucionService = {
  findAll: () => api.get<Devolucion[]>("/devolucion"),
  findOne: (id: number) => api.get<Devolucion>(`/devolucion/${id}`),
  create: (data: CreateDevolucionDto) => api.post<Devolucion>("/devolucion", data),
  update: (id: number, data: UpdateDevolucionDto) => api.put<Devolucion>(`/devolucion/${id}`, data),
  remove: (id: number) => api.delete<void>(`/devolucion/${id}`),
};
