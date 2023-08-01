import { useDispatch, useSelector } from "react-redux";
import { addProductToCart, getProducts } from "../redux/slices/productsSlice";
import { Fragment, useEffect, useState } from "react";
import { LIMIT } from "../const";

const HomeP = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const { products, totalProducts, loading } = useSelector(
    (state) => state.products
  );
  useEffect(() => {
    dispatch(getProducts(page));
  }, [dispatch, page]);
  let pages = totalProducts / LIMIT;
  return (
    <div>
      {loading ? (
        <div>...Loading</div>
      ) : (
        <Fragment>
          <div style={{textAlign: "center", fontSize: "20px"}}>Total Product: {totalProducts}</div>
          <div className="all_card">
            {products.map(({ id, title, price }, index) => (
              <div className="card" key={index}>
                <h3>{title}</h3>
                <p>{price}</p>
                <button onClick={() => dispatch(addProductToCart(id))}>
                  Add to the Cart {id}
                </button>
              </div>
            ))}
          </div>

          <div className="pagination" style={{ marginTop: "20px", textAlign: "center" }}>
            {Array(pages)
              .fill(1)
              .map((_, i) => (
                <button
                  style={{
                    marginRight: "20px",
                    padding: "5px 10px",
                    cursor: "pointer",
                    marginTop: "20px",
                    backgroundColor: page == i + 1 ? "red" : "grey",
                  }}
                  key={i}
                  onClick={() => setPage(i + 1)}
                >
                  {i + 1}
                </button>
              ))}
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default HomeP;
