import firebase from "../config";
import Client from "@/core/Clients/clients";
import ClientsRepository from "@/core/Clients/clientsRepository";

export default class CollectionClient implements ClientsRepository {
	#conversor = {
		toFirestore(client: Client) {
			const data = {
				name: client.name,
				age: client.age,
			}
			return data
		},
		fromFirestore(
			snapshot: firebase.firestore.QueryDocumentSnapshot,
			options: firebase.firestore.SnapshotOptions
		): Client {
			const dados = snapshot.data(options);
			return new Client(dados.name, dados.age, snapshot.id);
		},
	};

	async save(client: Client): Promise<Client>  {

		console.log(client)

		if (client?.id) {
			await this.#collection().doc(client.id).set(client);
			return client;
		} else {
			const docRef = await this.#collection().add(client);
			const doc = await docRef.get();
			return doc.data()!;
		}
	}

	async delete(client: Client): Promise<void> {
		return this.#collection().doc(client.id).delete();
	}

	async getAll(): Promise<Client[]> {
		const query = await this.#collection().get();
		return query.docs.map((doc) => doc.data()) ?? [];
	}

	#collection() {
		return firebase
			.firestore()
			.collection("clients")
			.withConverter(this.#conversor);
	}
}
