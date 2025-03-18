import { Link } from "react-router";

export const NotFoundPage = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>404 - Página No Encontrada</h1>
      <p>Lo sentimos, la página que estás buscando no existe.</p>
      <p>
        Vuelve a la <Link to="/">página principal</Link> para continuar
        explorando.
      </p>
    </div>
  );
};
