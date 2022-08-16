import "../styles/globals.css";
import Context from "../context/Context";

function MyApp({ Component, pageProps }) {
  
  // const [state, dispatch] = useReducer(reducerfunction, initialState);
  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products/")
  //     .then((res) => res.json())
  //     .then((data) => dispatch({ type: "ADD_PRODUCTS", payload: data }));
  // }, []);

  return (
    <Context >
      <Component {...pageProps} />
    </Context>
  );
}

export default MyApp;
