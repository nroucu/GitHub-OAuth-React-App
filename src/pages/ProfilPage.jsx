import { useState, useEffect } from "react";
import axios from "axios";

function ProfilePage() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.github.com/user", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setUserData(response.data);
      })
      .catch((err) => console.error("Ошибка при получении данных пользователя", err));
  }, []);

  const handleSave = () => {
    alert("Данные профиля сохранены!");
  };

  if (!userData) return <div>Загрузка...</div>;

  return (
    <div>
      <h1>Профиль</h1>
      <img src={userData.avatar_url} alt="Avatar" width={100} />
      <p>Имя: {userData.name}</p>
      <p>Логин: {userData.login}</p>
      <p>Электронная почта: {userData.email || "Не указана"}</p>
      <p>Компания: {userData.company || "Не указана"}</p>
      <p>Местоположение: {userData.location || "Не указано"}</p>
      <p>Описание профиля: {userData.bio || "Не указано"}</p>
      <p>
        <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
          Перейти в профиль
        </a>
      </p>
      <button onClick={handleSave}>Сохранить изменения</button>
    </div>
  );
}

export default ProfilePage;
