import { useEffect } from "react";
import { useState } from "react";
import Spinner from "../components/Spinner"
import Product from "../components/Product";

const Blog = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading,setLoading]= useState(false);
  const [posts,setPosts]=useState([]);

  async function fetchProductData() {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      console.log(error);
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect(()=>{
    fetchProductData();
  },[])

  return (
   <div >
    {
      loading ? <Spinner/> :
      posts.length > 0 ?
        (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 max-w-5xl mx-auto ">
          {
          posts.map((post)=>{
            return <Product key={post.id} post={post} />;
          })
          }
        </div>
        ):
        (
        <div className="flex items-center justify-center ">
          <p>No Data Found</p>
        </div>
        )
    }
   </div>
  );
};

export default Blog;
