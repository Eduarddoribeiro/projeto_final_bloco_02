import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Categoria } from '../entities/categoria.entity';
import { ILike, Repository } from 'typeorm';

@Injectable()
export class CategoriaService {

  constructor(
    @InjectRepository(Categoria)
    private categoriaRepository: Repository<Categoria>
  ) {}

  findAll(): Promise<Categoria[]> {
    return this.categoriaRepository.find();
  }

  findById(id: number): Promise<Categoria | null> {
    return this.categoriaRepository.findOneBy({ id });
  }

  findByNome(nome: string): Promise<Categoria[]> {
    return this.categoriaRepository.find({
      where: {
        nome: ILike(`%${nome}%`)
      }
    });
  }

  create(categoria: Categoria): Promise<Categoria> {
    return this.categoriaRepository.save(categoria);
  }

  update(categoria: Categoria): Promise<Categoria> {
    return this.categoriaRepository.save(categoria);
  }

  async delete(id: number) {
    return await this.categoriaRepository.delete(id);
  }
}
