import { api } from "@/lib/api";

export type TipoVehiculo = "SEDAN" | "SUV" | "CAMIONETA" | "DEPORTIVO" | "FURGONETA";
export type EstadoVehiculo = "DISPONIBLE" | "ALQUILADO" | "MANTENIMIENTO" | "FUERA_DE_SERVICIO";

export interface Vehiculo {
  id: number;
  marca: string;
  modelo: string;
  anio: number;
  placa: string;
  tipo: TipoVehiculo;
  estado: EstadoVehiculo;
  precioPorDia: number;
  kilometraje: number;
  createdAt: string;
  updatedAt: string;
}

export type CreateVehiculoDto = Omit<Vehiculo, "id" | "createdAt" | "updatedAt">;
export type UpdateVehiculoDto = Partial<CreateVehiculoDto>;

export const vehiculoService = {
  findAll: () => api.get<Vehiculo[]>("/vehiculo"),
  findDisponibles: () => api.get<Vehiculo[]>("/vehiculo/disponibles"),
  findOne: (id: number) => api.get<Vehiculo>(`/vehiculo/${id}`),
  create: (data: CreateVehiculoDto) => api.post<Vehiculo>("/vehiculo", data),
  update: (id: number, data: UpdateVehiculoDto) => api.put<Vehiculo>(`/vehiculo/${id}`, data),
  cambiarEstado: (id: number, estado: EstadoVehiculo) => api.patch<Vehiculo>(`/vehiculo/${id}/estado`, { estado }),
  remove: (id: number) => api.delete<void>(`/vehiculo/${id}`),
};