interface Category {
  id: number;
  name: string;
}

import axios from "axios";

axios.get<Category>("http://blabla").then((response) => response.data.id);

axios
  .get<Category[]>("http://blabla")
  .then((response) => response.data.map((cat) => cat.id));
