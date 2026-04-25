// name, category, cost, billingCycle, renewalDate
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddSaas = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [cost, setCost] = useState("");
  const [billingCyle, setBillingCycle] = useState("");
  const [renewalDate, setRenewalDate] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/saas/create",
        {
          name,
          category,
          cost,
          billingCyle,
          renewalDate,
        },
        {
          withCredentials: true,
        },
      );
      console.log(data.saas);
      navigate("/admin");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Add Saas Element</h1>
      <form onSubmit={submitHandler}>
        <ul>
          <li>
            {" "}
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </li>
          <li>
            {" "}
            <input
              type="text"
              placeholder="Category"
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            />
          </li>
          <li>
            {" "}
            <input
              type="text"
              placeholder="Cost"
              onChange={(e) => {
                setCost(e.target.value);
              }}
            />
          </li>
          <li>
            {" "}
            <select onChange={(e) => setBillingCycle(e.target.value)}>
              <option value="">Select Billing Cycle</option>
              <option value="monthly">Monthly</option>
              <option value="yearly">Yearly</option>
            </select>
          </li>
          <li>
            {" "}
            <input
              type="Date"
              placeholder="renewalDate "
              onChange={(e) => {
                setRenewalDate(e.target.value);
              }}
            />
          </li>
        </ul>
        <div>
          <button type="submit">Add Saas</button>
        </div>
      </form>
    </div>
  );
};

export default AddSaas;
