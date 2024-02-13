import "./App.css";
import { pokemons } from "./mocks";
import PokemonList from "./components/PokemonList";
import PokemonCard from "./components/PokemonCard";
import PokemonForm from "./components/PokemonForm";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

// PokemonListPage
// PokemonFormPage

function Menu() {
  return (
    <nav style={{ display: "flex", gap: "1rem" }}>
      <a href="/">Accueil</a>
      <a href="/new">Nouveau pokemon</a>
      <a href="/about">A propos</a>
    </nav>
  );
}

function PokemonListPage() {
  return (
    <PokemonList>
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </PokemonList>
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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <PokemonListPage />,
      },
      {
        path: "/new",
        element: <PokemonForm />,
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
