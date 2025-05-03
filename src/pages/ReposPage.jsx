import { useState, useEffect } from "react";
import axios from "axios";

function ReposPage() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [repoType, setRepoType] = useState("public");

  const fetchRepos = (type) => {
    setLoading(true);
    axios
      .get(`https://api.github.com/user/repos?type=${type}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setRepos(response.data);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchRepos(repoType);
  }, [repoType]);

  return (
    <div>
      <button onClick={() => setRepoType("public")}>Публичные репозитории</button>
      <button onClick={() => setRepoType("private")}>Приватные репозитории</button>

      {loading ? (
        <div>Загрузка...</div>
      ) : (
        <ul>
          {repos.map((repo) => (
            <li key={repo.id}>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                {repo.name}
              </a> - {repo.owner.login}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ReposPage;
