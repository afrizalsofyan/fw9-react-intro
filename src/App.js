import React from "react";
import { Row, Col } from "react-bootstrap";

const axios = require("axios");

const App = () => {
  const [data, setData] = React.useState([]);
  const getData = async () => {
    const res = await axios.get("https://rickandmortyapi.com/api/character");
    setData(res.data.results);
  };
  React.useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Row className="gx-0 gy-0">
        {data.forEach((element) => {
          // console.log(element.name);
          return (
            <Col md={4} className="p-5">
              <figure>
                <img src={element.image} alt={`Image_${element.name}`} className="w-100" />
                <figcaption className="fs-3 text-center pt-3">
                  {element.name}
                </figcaption>
              </figure>
            </Col>
          );
        })}
      </Row>
    </>
  );
};
export default App;