import "../styles/globals.css";
import { reducerfunction, initialState } from "../reducer/index";
import { useEffect, useReducer } from "react";
import { pContext } from "../context/productContext";

function MyApp({ Component, pageProps }) {
  
  const [state, dispatch] = useReducer(reducerfunction, initialState);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "ADD_PRODUCTS", payload: data }));
  }, []);

  return (
    <pContext.Provider value={state}>
      <Component {...pageProps} />
    </pContext.Provider>
  );
}

export default MyApp;
