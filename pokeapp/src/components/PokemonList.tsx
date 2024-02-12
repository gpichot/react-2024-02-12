
interface PokemonListProps {
  children: React.ReactNode;
}

export default function PokemonList(props: PokemonListProps) {
  return <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',

    gap: '1rem',
  }}>
    {props.children}
  </div>
}
