import React, { useState, useEffect } from "react";

function FetchUser() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch("https://randomuser.me/api/");
        if (!res.ok) throw new Error("Network response was not ok");
        const data = await res.json();
        setUser(data.results[0]);
      } catch (err) {
        setError(err.message);
      }
    };
    getUser();
  }, []);

  if (error) return <p>Error: {error}</p>;
  if (!user) return <p>Loading...</p>;

  return (
    <div className="card">
      <h2>Fetch User</h2>
      <img src={user.picture.large} alt={user.name.first} />
      <p>{user.name.first} {user.name.last}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default FetchUser;
