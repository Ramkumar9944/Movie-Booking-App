import "./Menu.css";
import Card from "../UI/Card/Card";
const Menu = (props) => {
  const menuCard =
    props.movieData &&
    props.movieData.map((movie) => (
      <div className="container">
        <img
          key={movie.id}
          id={movie.id}
          src={`${movie.image}`}
          alt=""
          style={{ height: "20rem", width: "40rem" }}
        />
      </div>
    ));
  return (
    <Card>
      <div className="cards-container">{menuCard}</div>
    </Card>
  );
};
export default Menu;
