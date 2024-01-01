interface Props {
  title: string;
}

export const Title = ({ title }: Props) => {
  return (
    <h1
      className={`
    text-xl
  `}
    >
      {title}
    </h1>
  );
};
