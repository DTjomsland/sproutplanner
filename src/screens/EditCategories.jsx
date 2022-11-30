import { useState, useEffect } from 'react';
import StandardButton from "../components/Common/StandardButton";
import CatCard from "../components/Common/CatCard";
import CreateNewCard from "../components/Common/CreateNewCard";
import styles from "./EditCategories.module.scss";

const EditCategories = () => {
  const [cat, setCat] = useState([]);


  const cookieValue = document.cookie
  .split('; ')
  .find(row => row.startsWith('token'))
  .split('=')[1];

  useEffect(() => {
      fetch('http://localhost:5000/usercategory/',  {
        method: 'GET',
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + cookieValue,
        }
      })
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            setCat(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);



  return (
    <div className={`${styles["categories"]}`}>
      <h1>Categories</h1>
      {cat.map((category) => (
        <CatCard 
        key={category.user_category_id}
        title={category.user_category_name}
        />
      ))}
      
      
      
      <a href="./createcategory"><CreateNewCard /></a>
      <a href='./'><StandardButton
        buttonText="Back to Home"
        buttonStyle="small-green-border-button"
      /></a>
    </div>
  );
};

export default EditCategories;
