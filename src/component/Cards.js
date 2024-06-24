import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { addItem } from "./store/store.js";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Cards({ currentPosts }) {
  const currentUser = useSelector((state) => state.currentUser.currentUser);
  const dispatch = useDispatch();
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const res = await axios.get(`/getUserFavorites/${currentUser._id}`);
        setFavorites(res.data.Fav);
      } catch (error) {
        console.error("Error fetching favorites:", error);
      }
    };

    if (currentUser && currentUser._id) {
      fetchFavorites();
    }
  }, [currentUser]);

  // Add to Cart Button Functionality
  const handleAddToCart = async (product) => {
    try {
      dispatch(addItem(product));
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

  // Add to Favorites Button Functionality
  const handleAddToFav = async (product) => {
    try {
      await axios.post("/addToFav", { product, currentUser });
      setFavorites((prevFavorites) => {
        const isFavorite = prevFavorites.some((fav) => fav._id === product._id);
        if (isFavorite) {
          return prevFavorites.filter((fav) => fav._id !== product._id);
        } else {
          return [...prevFavorites, product];
        }
      });
    } catch (error) {
      console.error("Error adding item to favorites:", error);
    }
  };

  // handle Heart Coloring functionality
  const handleHeartClick = async (event, product) => {
    if (currentUser) {
      await handleAddToFav(product);
    } else {
      toast.error("You Have To Login First");
    }
  };

  return (
    <ul className='mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
      {currentPosts.length === 0 ? (
        <div>
          <h1>Loading.... Please Wait</h1>
        </div>
      ) : (
        currentPosts.map((product) => {
          if (product.quantity <= 0) {
            return null;
          }

          const isFavorite = favorites.some((fav) => fav._id === product._id);

          return (
            <li key={product._id}>
              <div className='group relative block overflow-hidden'>
                <div>
                  <button
                    onClick={(event) => {
                      handleHeartClick(event, product);
                    }}
                    className='absolute end-4 top-4 z-10 rounded-full bg-slate-200 p-1.5 text-gray-900 transition hover:text-gray-900/75'
                    aria-label='Add to Wishlist'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill={isFavorite ? "red" : "none"}
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      stroke='currentColor'
                      className='h-4 w-4'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
                      />
                    </svg>
                  </button>
                  <Link to={`/products/${product._id}`}>
                    <img
                      src={`/${product.image}`}
                      alt={product.title}
                      className='h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72'
                    />
                  </Link>
                </div>

                <div className='relative bg-white p-3'>
                  <h3 className='text-md font-semibold text-gray-700 group-hover:underline group-hover:underline-offset-4'>
                    {product.title}
                  </h3>

                  <p className='mt-2'>
                    <span className='sr-only'> Regular Price </span>

                    <span className='tracking-wider text-md font-semibold text-gray-900'>
                      ${product.price}{" "}
                    </span>
                  </p>
                </div>
              </div>
              <button
                onClick={() => handleAddToCart(product)}
                className='block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105'>
                Add to Cart
              </button>{" "}
            </li>
          );
        })
      )}
    </ul>
  );
}
