import { RepositoryItem } from "./RepositoryItem";
import { useEffect, useState } from "react";

import '../styles/repository.scss';

const repository = {
  name: "unform",
  description: "Forms in react",
  link: "https://github.com/unform/unform",
};

export function RepositoryList() {
const [repositories, setRepositories] = useState([])

useEffect(() => {
  fetch('https://api.github.com/orgs/rocketseat/repos')
  .then(response => response.json())
  .then(data => setRepositories(data))

}, [repositories]); // Sempre colocar o segundo parametro

// Todo código aqui pode ser renderizado novamente caso o estado mude

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  );
}
