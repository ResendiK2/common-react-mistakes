import { useEffect, useState } from "react";

interface Repo {
  name: string;
  description: string;
}

function App() {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/resendiK2/repos")
      .then((res) => res.json())
      .then((repos) => setRepos(repos));
  }, []);

  return (
    <div>
      <input name='search' type='text' placeholder='Buscar...' />

      <ul>
        {repos.map((repo) => (
          <li key={repo.name}>
            <h2>{repo.name}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
