interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  };
}

export function RepositoryItem(props: RepositoryItemProps) {
  return (
    //sempre que for passar uma função js, colocar entre{}
    //?? desconsidera que o 0 ou vazio é um valor invalido
    // props.repository?.name onde o ? verifica se o repositorio está nulo, se estiver, ja retorna o valor padrão
    <li>
      <strong>{props.repository?.name}</strong>
      <p>{props.repository.description}</p>
      <a href={props.repository.html_url}>acessar repositorio</a>
    </li>
  );
}
