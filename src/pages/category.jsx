import React from "react";
import { request } from "../config/request";
import SuggestionsBar from "../components/suggstionBar";

export const Category = () => {
  const [state, setState] = React.useState([]);

  React.useEffect(() => {
    request.get("/messages").then((res) => {
      setState(res.data);
    });
  }, []);

  const handleDelete = (id) => {
    request.delete(`/messages/${id}`).then(() => {
      setState(state.filter((item) => item.id !== id));
    });
  };

  return (
    <div>
      <SuggestionsBar />
      <h1 className="text-3xl">Mahsulotlar</h1>

      <div className="space-y-4">
        {state.map((item) => (
          <div
            key={item.id}
            className="flex items-center p-4 bg-white shadow rounded"
          >
            <span className="flex-1 font-medium text-gray-700">
              {item.product}
            </span>
            <span className="flex-1 text-gray-500">{item.price} USD</span>
            <button
              onClick={() => handleDelete(item.id)}
              className="ml-2 px-2 py-1 bg-red-500 text-white rounded"
            >
              O'chirish
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
