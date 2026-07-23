import ViewGenreFilter from './ViewGenreFilter';
import useGenresFilter from './useGenresFilter';
import { useState } from 'react';

type props={
    currentGenre : number | null;
    setCurrentGenre: ()=>void;
}


const ContainerGenresFilter = ({ currentGenre, setCurrentGenre }:props) => {
  //   const [currentGenre, setCurrentGenre] = useState<number | null>(null);
  const { data, isLoading, error } = useGenresFilter();

  const genres = data ?? [];
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <ViewGenreFilter
      genres={genres}
      selectedGenre={currentGenre}
      onGenreChange={setCurrentGenre}
    />
  );
};

export default ContainerGenresFilter;
