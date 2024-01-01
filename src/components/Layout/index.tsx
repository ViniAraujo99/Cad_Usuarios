import { Button } from "../Button";
import { Title } from "../Title";

interface Props {
  children: any;
  title: string;
  tableActive: boolean;
  onClick: () => void
}

export const Layout = ({ children, title, tableActive, onClick }: Props) => {
  return (
    <div>
      <div className={`
        flex justify-between items-center
      `}>
        <Title title={title} />
        {tableActive
          ? <Button
            color="green"
            onClick={onClick}>
            Novo Cliente
          </Button>
          : ""}
      </div>
      <hr
        className={`
       my-2 border-indigo-950
      `}
      />
      {children}
    </div>
  );
};
