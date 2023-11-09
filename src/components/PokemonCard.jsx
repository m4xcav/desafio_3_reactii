import { Card } from "react-bootstrap";

const PokemonCard = ({ pokemon }) => {
  const { name, stats, src, tipo } = pokemon;
  return (
    <Card
      style={{ width: "34rem" }}
      className="mt-5 mx-auto flex-row p-2"
    >
      <Card.Img
        height="300"
        variant="top"
        src={src}
      />
      <Card.Body>
        <Card.Title className="fw-bold">{name}</Card.Title>
        <ul className="text-left">
          <Card.Text>
            {stats?.map((stat, i) => (
              <li key={i}>
                {stat.stat.name}: {stat.base_stat}
              </li>
            ))}
          </Card.Text>
        </ul>
        {tipo?.map((type, i) => (
             <Card.Text key={i} className="text-secondary">{type}</Card.Text>
            ))
        }
      </Card.Body>
    </Card>
  );
};
export default PokemonCard;
