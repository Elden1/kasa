import React from "react"
import { housing } from "../../housing.js"
import { useParams, useSearchParams } from "react-router-dom";

function FormHousing() {
  const { index } = useParams();
  return (
   <div>
    <h2>Now showing post {index}</h2>
   </div>
  );
 }
export default FormHousing