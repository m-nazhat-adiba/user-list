import React from "react";
import UserCard from "../../components/UserCard";
import axios from "axios";
import { useState, useEffect } from "react";

export default function UsersList() {
  const [users1, setUsers1] = useState([]);
  const [users2, setUsers2] = useState([]);
  const [combinedData, setCombinedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = axios.get("https://reqres.in/api/users?page=1");
        const response2 = axios.get("https://reqres.in/api/users?page=2");

        const [dataFromApi1, dataFromApi2] = await Promise.all([
          response1,
          response2,
        ]);
        setUsers1(dataFromApi1.data.data);
        setUsers2(dataFromApi2.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Combine data when both API calls are complete
    if (users1.length > 0 && users2.length > 0) {
      // Combine or merge data as needed
      const combined = [...users1, ...users2];
      setCombinedData(combined);
    }
  }, [users1, users2]);

  console.log(combinedData);

  return (
    <div className="grid grid-cols-4 gap-8">
      {combinedData.map((item) => (
        <UserCard userData={item} key={item.id} />
      ))}
    </div>
  );
}
