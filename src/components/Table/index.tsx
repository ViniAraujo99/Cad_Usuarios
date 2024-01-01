"use client";
import { BsPencilSquare } from "react-icons/bs";
import { IoTrashOutline } from "react-icons/io5";
import { Button } from "../Button";
import Client from "@/core/Clients/clients";

interface Props {
  onEdit: (client: Client) => void;
  onDelete: (client: Client) => void;
  clients?: Client[];
}

export const Table = ({ onEdit, onDelete, clients = [] }: Props) => {
  const classTd = "text-center py-2 px-4";

  return (
    <>
      {clients?.length > 0 && (
        <table
          className={`
    w-full
    `}
        >
          <thead>
            <tr
              className={`
        bg-indigo-600 text-white
      `}
            >
              <th className={`${classTd}`}>Código</th>
              <th className={`${classTd}`}>Nome</th>
              <th className={`${classTd}`}>Idade</th>
              <th className={`${classTd}`}>Ações</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client, i) => (
              <tr
                className={`
           ${i % 2 === 0 ? `bg-indigo-200` : `bg-indigo-300`}
          `}
                key={client.id}
              >
                <td className={`${classTd}`}>{client.id}</td>
                <td className={`${classTd}`}>{client.name}</td>
                <td className={`${classTd}`}>{client.age}</td>
                <td className={`${classTd}`}>
                  {
                    <div
                      className={`
                     flex gap-2 justify-center
                    `}
                    >
                      <Button onClick={() => onEdit(client)}>
                        <BsPencilSquare />
                      </Button>
                      <Button onClick={() => onDelete(client)} color="red">
                        <IoTrashOutline />
                      </Button>
                    </div>
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};
