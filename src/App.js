import "./App.css";
import Row from "./Components/Row";
import Banner from "./Components/Banner";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
function App() {
  const fetchTrending = `/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;
  const neflixOriginal = `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_networks=213`;
  const fetchTopRated = `/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;
  const fetchActionmovies = `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=28`;
  const fetchComedyMovies = `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=35`;
  const fetchHorrorMovies = `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=27`;

  return (
    <div className="App">
      <Nav />
      <Banner fetchURL={neflixOriginal} />
      <Row
        title="NETFLIX ORIGINALS"
        fetchURL={neflixOriginal}
        isLargeRow={true}
      />
      <Row title="TRENDING" fetchURL={fetchTrending} />
      <Row title="TOP RATED" fetchURL={fetchTopRated} />
      <Row title="ACTION MOVIES" fetchURL={fetchActionmovies} />
      <Row title="COMEDY MOVIES" fetchURL={fetchComedyMovies} />
      <Row title="HORROR MOVIES" fetchURL={fetchHorrorMovies} />
      <Footer />
    </div>
  );
}

export default App;
