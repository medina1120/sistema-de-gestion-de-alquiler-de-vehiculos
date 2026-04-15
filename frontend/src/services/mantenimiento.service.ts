import { api } from "@/lib/api";

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
}

export type CreateMantenimientoDto = Omit<Mantenimiento, "id" | "createdAt" | "updatedAt">;
export type UpdateMantenimientoDto = Partial<CreateMantenimientoDto>;

export const mantenimientoService = {
  findAll: () => api.get<Mantenimiento[]>("/mantenimiento"),
  findOne: (id: number) => api.get<Mantenimiento>(`/mantenimiento/${id}`),
  create: (data: CreateMantenimientoDto) => api.post<Mantenimiento>("/mantenimiento", data),
  update: (id: number, data: UpdateMantenimientoDto) => api.put<Mantenimiento>(`/mantenimiento/${id}`, data),
  remove: (id: number) => api.delete<void>(`/mantenimiento/${id}`),
};
