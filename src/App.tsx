import './App.css';
import ContainerMoviesTable from './components/MoviesTable/ContainerMoviesTable';
import MoviesFilterProvider from './components/MoviesFilterContext/MoviesFilterProvider';

function App() {
  return (
    <>
      <MoviesFilterProvider>
        <ContainerMoviesTable />
      </MoviesFilterProvider>
    </>
  );
}

export default App;
