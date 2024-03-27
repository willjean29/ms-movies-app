import { MovieEntity } from "@domain/entities/movie.entity";

export interface IFavoriteRepository {
  create(movieDto: MovieEntity, userId: string): Promise<MovieEntity>;
  findAll(userId: string): Promise<MovieEntity[]>;
  findById(id: string): Promise<MovieEntity | null>;
}
