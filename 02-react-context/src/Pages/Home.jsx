import SongDetail from "../Components/SongDetail/SongDetail";
import SongList from "../Components/SongList/SongList";
import "./home.css"

const Home = () => {
  return (
    <div className="home-container">
      <div className="left">
        <p>Lado Izquierdo</p>
        <SongList />
      </div>
      <div className="right">
        <p>Lado Derecho</p>
        <SongDetail />
      </div>
    </div>
  );
};

export default Home;