import React from "react";
import "./UserCards.css"; // optional separate CSS

function UserCards() {
  // 🟢 Sample JSON data (could also come from an API later)
  const users = [
    { id: 1, name: "Alice", role: "Frontend Developer" },
    { id: 2, name: "Bob", role: "Backend Developer" },
    { id: 3, name: "Charlie", role: "Full-Stack Developer" },
  ];

  return (
    <div className="usercards-container">
      {users.map((user) => (
        <div className="usercard" key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.role}</p>
        </div>
      ))}
    </div>
  );
}

export default UserCards;
