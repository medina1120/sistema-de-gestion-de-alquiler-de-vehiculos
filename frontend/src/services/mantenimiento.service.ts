import { api } from "@/lib/api";
import type { Vehiculo } from "./vehiculo.service";

export type TipoMantenimiento = "PREVENTIVO" | "CORRECTIVO" | "REVISION";

export interface Mantenimiento {
  id: number;
  vehiculoId: number;
  tipo: TipoMantenimiento;
  descripcion: string;
  costo: number;
  fecha: string;
  createdAt: string;
  updatedAt: string;
  vehiculo?: Vehiculo;
}

export type CreateMantenimientoDto = {
  vehiculoId: number;
  tipo: TipoMantenimiento;
  descripcion: string;
  costo: number;
  fecha: string;
};

export type UpdateMantenimientoDto = Partial<CreateMantenimientoDto>;

export const mantenimientoService = {
  findAll: () => api.get<Mantenimiento[]>("/mantenimiento"),
  findOne: (id: number) => api.get<Mantenimiento>(`/mantenimiento/${id}`),
  create: (data: CreateMantenimientoDto) => api.post<Mantenimiento>("/mantenimiento", data),
  update: (id: number, data: UpdateMantenimientoDto) => api.put<Mantenimiento>(`/mantenimiento/${id}`, data),
  remove: (id: number) => api.delete<void>(`/mantenimiento/${id}`),
};
