import { RouterProvider } from "react-router-dom";
import router from "./Routing/routes";
import { Provider } from "react-redux";
import store from "./Redux/Store";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />;
    </Provider>
  );
}

export default App;
