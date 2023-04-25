import { useRouteError } from "react-router-dom";
import './error.scss'

export default function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>{error.status}</h1>
      <p>Wystąpił błąd. Poniżej powinna znaleźć się informacja o błędzie.</p>
      <p className="errCode">
        <b>{error.status}</b>:&nbsp;
        {error.statusText || error.message}
      </p>
    </div>
  );
}