import { useEffect, useState } from "react";

interface Repo {
  name: string;
  description: string;
}

function App() {
  const [repos, setRepos] = useState<Repo[]>([]);
  // const [filteredRepos, setFilteredRepos] = useState<Repo[]>([]);
  const [filter, setFilter] = useState("");

  console.log("App render");

  useEffect(() => {
    fetch("https://api.github.com/users/resendiK2/repos")
      .then((res) => res.json())
      .then((repos) => {
        setRepos(repos);
        // setFilteredRepos(repos); // [2]
      });
  }, []);

  // useEffect(() => {
  //   setFilteredRepos(
  //     repos.filter((repo) =>
  //       repo.name.toLowerCase().includes(filter.toLowerCase())
  //     )
  //   );
  // }, [filter]);

  const filteredRepos = filter?.length
    ? repos.filter((repo) =>
        repo.name.toLowerCase().includes(filter.toLowerCase())
      )
    : repos;

  return (
    <div>
      <input
        name='search'
        type='text'
        placeholder='Buscar...'
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      <ul>
        {filteredRepos.map((repo) => (
          <li key={repo.name}>
            <h2>{repo.name}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
