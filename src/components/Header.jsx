import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>GitHub OAuth App</h1>
      <nav>
        <Link to="/profile">Профиль</Link>
        <Link to="/repos">Репозитории</Link>
        <Link to="/users">Другие пользователи</Link>
      </nav>
    </header>
  );
}

export default Header;
