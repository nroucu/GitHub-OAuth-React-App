import { useState } from "react";
import axios from "axios";

function UsersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    setLoading(true);
    axios
      .get(`https://api.github.com/search/users?q=${searchQuery}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setUsers(response.data.items);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Ошибка при поиске пользователей", err);
        setLoading(false);
      });
  };

  const handleSelectUser = (username) => {
    axios
      .get(`https://api.github.com/users/${username}/repos`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setRepos(response.data);
        setSelectedUser(username);
      });
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Поиск по пользователям"
      />
      <button onClick={handleSearch}>Поиск</button>

      {loading && <div>Загрузка...</div>}

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <button onClick={() => handleSelectUser(user.login)}>
              {user.login}
            </button>
          </li>
        ))}
      </ul>

      {selectedUser && (
        <div>
          <h2>Репозитории пользователя {selectedUser}</h2>
          <ul>
            {repos.map((repo) => (
              <li key={repo.id}>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  {repo.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default UsersPage;
