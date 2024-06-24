import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import { useSelector } from "react-redux";
import axios from "axios";

export default function Favorites() {
  const currentUser = useSelector((state) => state.currentUser.currentUser);
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("/getAdds");
        setProducts(res.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    const fetchFavorites = async () => {
      try {
        const res = await axios.get(`/getUserFavorites/${currentUser._id}`);
        setFavorites(res.data.Fav);
      } catch (error) {
        console.error("Error fetching favorites:", error);
      }
    };

    fetchProducts();
    if (currentUser && currentUser._id) {
      fetchFavorites();
    }
  }, [currentUser]);

  const favoriteProducts = products.filter((product) =>
    favorites.some((fav) => fav._id === product._id)
  );

  return (
    <div>
      <Cards currentPosts={favoriteProducts} />
    </div>
  );
}
