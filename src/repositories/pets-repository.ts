import { Prisma, Pet } from '@prisma/client'

export interface FindByAdoptionParams {
  petId: string
}

export interface SearchManyParams {
  query?: string
  city: string
  page: number
}
export interface PetsRepository {
  create(data: Prisma.PetUncheckedCreateInput): Promise<Pet>
  searchMany(params: SearchManyParams): Promise<Pet[]>
  findAvailableById(params: FindByAdoptionParams): Promise<Pet | null>
}
