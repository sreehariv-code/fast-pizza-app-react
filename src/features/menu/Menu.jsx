//Load data into component using custom hook "useLoaderData"
import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData();

  return (
    <ul>
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

//Menu Loader (data fetching convention)
export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
