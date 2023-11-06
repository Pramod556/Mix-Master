import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { Cocktail, Landing, HomeLayout, Error, About } from "./pages";
import { loader as landingLoader } from "./pages/Landing";
import { loader as singleCocktailLoader } from "./pages/Cocktail";
import SinglePageError from "./pages/SinglePageError";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        loader: landingLoader(queryClient),
        errorElement: <SinglePageError />,
      },
      {
        path: "cocktail/:id",
        loader: singleCocktailLoader(queryClient),
        element: <Cocktail />,
        errorElement: <SinglePageError />,
      },
      {
        path: "about",
        element: <About />,
        errorElement: <SinglePageError />,
      },
    ],
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};
export default App;
