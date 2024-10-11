import { useEffect, useState } from 'react';
import { PokeTable } from '../components/PokeTable';
import { Loading } from '../components/ui/Loading';
import { useFetchPokemon } from '../hooks/useFetchPokemon';
import NotFound from './404';
import { useNavigate } from 'react-router-dom';
import { useQueryParams } from '../hooks/useQueryParams';
import { getNumberFromString } from '../utils/number';
import { POKEMON_QTY } from '../utils/consts';
import { PoketablePagination } from '../components/PokeTablePagination';

function Index() {
  const navigate = useNavigate();
  const query = useQueryParams();

  const [page, setPage] = useState<number>(
    getNumberFromString(query.get('start'))
  );

  const { pokemon, error, isLoading, hasNext } = useFetchPokemon(page);

  useEffect(() => {
    navigate(`?start=${page}`, { replace: true });
  }, [page, navigate]);

  const handleNextPage = () => {
    setPage((page) => page + POKEMON_QTY);
  };

  const handlePrevPage = () => {
    setPage((page) => page - POKEMON_QTY);
  };

  if (error) return <NotFound />;
  if (isLoading) return <Loading />;

  return (
    <div>
      <header className="bg-poke-red py-4">
        <h1 className="text-white text-bold text-2xl text-center">Pokedex</h1>
      </header>
      <div className="w-full bg-white flex flex-col items-center px-10 pt-10">
        <PokeTable pokemon={pokemon} />
        <PoketablePagination
          page={page}
          handleNext={handleNextPage}
          handlePrev={handlePrevPage}
          hasNext={hasNext}
        />
      </div>
    </div>
  );
}

export default Index;
