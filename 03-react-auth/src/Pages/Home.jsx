import { useState, useEffect } from "react";
import { getAllItemsService } from "../Services/itemServices";

const Home = () => {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    const fetchItemData = async () => {
      try {
        const response = await getAllItemsService();
        if (response.status === 200) {
          setItemList(response.data);
        }
      } catch (error) {
        console.log("Ocurrió un error en Home", error);
      }
    };
    fetchItemData();
  }, []); // Ejecuta el efecto solo una vez

  return (
    <>
      <h1>Bienvenido al Home</h1>
      <div className="d-flex flex-row flex-wrap justify-content-center">
        {itemList.map((item) => (
          <div className="card" style={{ width: "18rem" }} key={item.id}>
            <img
              className="card-img-top"
              style={{ maxHeight: "300px" }}
              src={item.image}
              alt={item.product_name}
            />
            <div className="card-body">
              <h5 className="card-title">{item.product_name}</h5>
              <p className="card-text">{item.description}</p>
              <button className="btn btn-primary">Comprar</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;