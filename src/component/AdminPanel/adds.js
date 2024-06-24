import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Pagination from "../Pagination";

export default function Adds() {
  const [adds, setAdds] = useState([]);
  const [counter, setCounter] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(8);
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = adds.slice(firstPostIndex, lastPostIndex);
  const totalPages = Math.ceil(adds.length / postPerPage);

  const deleteAdd = async (id) => {
    try {
      const response = await axios.delete(`/deleteAdd/${id}`);
      console.log(response.data);
      setCounter(counter + 1);
      toast.success("Add deleted successfully.");
    } catch (error) {
      console.error("Error deleting Add:", error);
    }
  };

  // Products Fetching
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/getAdds");
        setAdds(response.data);
      } catch (error) {
        console.error("Error fetching Adds:", error);
      }
    };
    fetchProducts();
  }, [counter]);

  // Update Quantity
  function Update_Quantity(id, quantity) {
    axios
      .put(`/updateQuantity/${id}`, {quantity:quantity})
      .then((response) => {
        // console.log(response.data.msg, response.data);
        setCounter(counter + 1);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className='overflow-x-auto'>
      <table className='min-w-full divide-y-2 divide-gray-200 bg-white text-sm'>
        <thead className='ltr:text-left rtl:text-right'>
          <tr>
            <th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>
              Image
            </th>
            <th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>
              Title
            </th>
            <th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>
              Price
            </th>
            <th className='px-4 py-2'></th>
          </tr>
        </thead>

        <tbody className='divide-y divide-gray-200'>
          {currentPosts.map((add) => {
            return (
              <tr key={add._id}>
                <td className='whitespace-nowrap border-2 px-4 py-2 font-medium text-gray-900'>
                  <img
                    className='w-20 aspect-square'
                    src={`/${add.image}`}
                    alt={add.title}
                  />
                </td>
                <td className='whitespace-nowrap border-2 px-4 py-2 text-gray-700'>
                  {add.title}
                </td>
                <td className='whitespace-nowrap border-2 px-4 py-2 text-gray-700'>
                  ${add.price}
                </td>
                <td className='flex justify-around items-center px-4 py-2 text-gray-700'>
                  <div className='whitespace-nowrap flex w-full justify-around items-center text-gray-700'>
                    <div>{add.quantity}</div>
                    <button
                      onClick={() => {
                        let newQty = prompt("enter New Quantity");
                        Update_Quantity(add._id, +newQty);
                      }}
                      className='inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700'>
                      Update Quantity
                    </button>
                  </div>
                </td>

                <td className='whitespace-nowrap border-2 px-4 py-2'>
                  <button
                    onClick={() => deleteAdd(add._id)}
                    className='inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700'>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className='flex justify-center mt-4'>
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
}