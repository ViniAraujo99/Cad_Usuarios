"use client";

import Client from "@/core/Clients/clients";
import CollectionClient from "@/backend/db/collectionClient";
import { Forms } from "@/components/Forms";
import { Layout } from "@/components/Layout";
import { Table } from "@/components/Table";
import ClientsRepository from "@/core/Clients/clientsRepository";
import { useEffect, useState } from "react";

export default function Home() {
  const repo: ClientsRepository = new CollectionClient();

  const [tableActive, setTableActive] = useState(true);
  const [client, setClient] = useState<Client>(Client.empty());
  const [clients, setClients] = useState<Client[]>([]);

  const getAll = () => {
    repo.getAll().then((clients) => {
      setClients(clients);
      setTableActive(true);
    });
  };

  //eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(getAll, []);

  const selectClient = (client: Client) => {
    setClient(client);
    setTableActive(false);
  };

  const newClient = () => {
    setClient(Client.empty());
    setTableActive(false);
  };

  const saveClient = async (client: Client | undefined) => {
    if (client !== undefined) {
      await repo.save(client);
      getAll();
    } else {
      throw new Error("Sem cliente para salvar");
    }
  };

  const deleteClient = async (client: Client) => {
    await repo.delete(client);
    getAll();
  };

  return (
    <main
      className={`mHeight h-auto overflow-hidden
      bg-slate-100 p-4 rounded-md w-2/3
    `}
    >
      <Layout
        title={
          tableActive ? "Clientes Cadastrados" : "Cadastrar/Alterar Cliente"
        }
        tableActive={tableActive}
        onClick={newClient}
      >
        {tableActive ? (
          <Table
            clients={clients}
            onEdit={selectClient}
            onDelete={deleteClient}
          />
        ) : (
          <Forms client={client} sendClient={saveClient} onBack={getAll} />
        )}
      </Layout>
    </main>
  );
}
