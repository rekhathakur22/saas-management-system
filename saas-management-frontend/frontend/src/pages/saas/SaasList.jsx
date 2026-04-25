import axios from "axios";
import { useEffect, useState } from "react";
function SaasList() {
  const [saasList, setSaasList] = useState([]);
  useEffect(() => {
    const getAllSaas = async () => {
      const response = await axios.get(
        "http://localhost:4000/api/saas/all-saas",
        {
          withCredentials: true,
        },
      );
      setSaasList(response.data);
    };
    getAllSaas();
  }, []);

  return (
    <div>
      <h3>Saas-tool</h3>
      {saasList.map((item) => (
        <div key={item._id}>
          <p>
            {item.name} - ₹{item.cost}
          </p>
        </div>
      ))}
    </div>
  );
}

export default SaasList;
