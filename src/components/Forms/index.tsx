import { Button } from "../Button";
import { Fields } from "../Fields";
import Client from "@/core/Clients/clients";
import { useState } from "react";

interface Props {
  onBack: () => void;
  sendClient: (client: Client | undefined) => void;
  client?: Client;
}

export const Forms = ({ onBack, sendClient, client = undefined }: Props) => {

  const id = client?.id
  const [name, setName] = useState<string>(client?.name ?? '');
  const [age, setAge] = useState<number>(client?.age ?? 0);

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className={` w-full
      flex flex-col gap-3

    `}
    >
      {client?.id ? (
        <Fields
          label="ID"
          readOnly={true}
          fieldValue={client?.id}
        />
      ) : (
        ""
      )}
      <Fields label="Nome" fieldValue={name} finalValue={setName} />
      <Fields
        label="Idade"
        type="number"
        fieldValue={age}
        finalValue={setAge}
      />
      <div
        className={`
       flex justify-end gap-2
      `}
      >
        <Button onClick={() => sendClient?.(new Client(name, age, id))}>
          {client?.id ? "Alterar" : "Salvar"}
        </Button>
        <Button onClick={onBack} color="gray">
          Cancelar / Voltar
        </Button>
      </div>
    </form >
  );
};
