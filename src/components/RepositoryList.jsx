import { RepositoryItem } from './RepositoryItem';
import '../styles/repositories.scss';
import { useState, useEffect } from 'react';

//https://api.github.com/orgs/rocketseat/repos

const repository = {
  name: 'unform2',
  description: 'Forms on react',
  link: 'https://github.com/unform/unform',
};

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);
  //use effect, para disparar uma função quando algo acontecer na aplicação(ex mudança de uma variável)
  //primeiro parâmetro, qual função vai ser executada, segundo parâmetro, a condição para execução
  //caso seja passado um array vazio para o useEffect, somente vai executar a primeira vez que for exibido em tela essa função
  //caso seja passado sem o array, o mesmo ficara em looping
  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <section className='repository-list'>
      <h1>Lista de repositórios</h1>
      <ul>
        {repositories.map((repository) => {
          return (
            <RepositoryItem key={repository.name} repository={repository} />
          );
        })}
      </ul>
    </section>
  );
}
