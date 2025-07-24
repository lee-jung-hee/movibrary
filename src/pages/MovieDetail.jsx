import React from "react";
import { useParams } from "react-router-dom";

function MovieDetail() {
  const { id } = useParams();
  return <div>MovieDetail</div>;
}

export default MovieDetail;
