import { useEffect } from "react";

export default function ApiCall() {
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        ""
        
      );
      const data = await response.json();
      
    }
    getData();
  }, []);
  return <h1>Api Call</h1>;
}
