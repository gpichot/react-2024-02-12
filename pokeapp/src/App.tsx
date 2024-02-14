import "./App.css";
import {
  Link,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import PokemonListPage from "./pages/PokemonListPage";
import PokemonDetailPage from "./pages/PokemonDetailPage";
import React from "react";

function Menu() {
  return (
    <nav style={{ display: "flex", gap: "1rem" }}>
      <Link to="/Gabriel">Accueil</Link>
      <Link to="/new">Nouveau pokemon</Link>
      <Link to="/about">A propos</Link>
      <Link to="/table">Table</Link>
    </nav>
  );
}

function Root() {
  return (
    <>
      <Menu />
      <Outlet />
    </>
  );
}

const PokemonForm = React.lazy(async () => {
  const mod = await import("./components/PokemonForm");
  return mod;
});

function Table() {
  const [transposed, setTransposed] = React.useState(true);
  const values = [1, 2, 3, 4];
  const rows = transposed
    ? [...values, ...values].toReversed().map((x) => [x])
    : [[...values, ...values]];

  return (
    <>
      <button onClick={() => setTransposed((v) => !v)}>toggle</button>
      <table>
        {rows.map((row) => (
          <tr key={row[0]}>
            {row.map((value) => (
              <td key={value}>{value}</td>
            ))}
          </tr>
        ))}
      </table>
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/:name?",
        element: <PokemonListPage />,
      },
      {
        path: "/table",
        element: <Table />,
      },
      {
        path: "/new",
        element: (
          <React.Suspense fallback="Loading">
            <PokemonForm />
          </React.Suspense>
        ),
      },
      {
        path: "/pokemons/:pokemonId",
        element: <PokemonDetailPage />,
      },
      {
        path: "/about",
        element: <h1>A propos</h1>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
