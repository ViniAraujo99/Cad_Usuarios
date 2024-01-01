import Client from "./clients";

export default interface ClientsRepository {
  save(client: Client): Promise<Client>
  delete(client: Client): Promise<void>
  getAll(): Promise<Client[]>
}