import { User } from './user.model';

export class Ticket {
  constructor(
    public id: string,
    public titulo: string,
    public usuario: User,
    public usuarioAtribuido: User
  ) {}
}
