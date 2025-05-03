import { useEffect, useState } from "react";
import { getUserData } from "../../api/github";

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getUserData(token).then((res) => {
        setUser(res.data);
      });
    }
  }, []);

  if (!user) return <p>Загрузка...</p>;

  return (
    <div>
      <img src={user.avatar_url} alt="avatar" width="100" />
      <h2>{user.name}</h2>
      <p>{user.login}</p>
      <p>{user.email}</p>
      <p>{user.company}</p>
      <p>{user.location}</p>
      <p>{user.bio}</p>
      <a href={user.html_url} target="_blank">Ссылка на профиль</a>
    </div>
  );
}

export default Profile;
