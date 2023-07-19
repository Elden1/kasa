import { useRouteError } from "react-router-dom";
import './assets/error-page.scss'

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <p>404</p>
      <h1>Oups! La page que vous demandez n'existe pas.</h1>
      <br />
      <a href={'http://localhost:3000/'}><h2>Retourner sur la page d'accueil</h2></a>
      <br />
    </div>
  );
}