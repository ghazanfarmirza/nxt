import React, { useState } from "react";
import styles from "./Practice.module.css"; // Importing the CSS module

const Practice = () => {
  const [admins, setAdmins] = useState([
    {
      id: 1,
      name: "Ahmed",
      type: 1,
      email: "user@email.com",
      teams: "Development team",
      access: [
        "World cup event",
        "Workshop workspace",
        "Admin Workspace",
        "Fun Event",
        "Development Workspace",
      ],
      image:
        "https://iidamidamerica.org/wp-content/uploads/2020/12/male-placeholder-image.jpeg",
    },
    {
      id: 2,
      name: "Ali",
      type: 2,
      email: "user@email.com",
      teams: "Design team",
      access: ["World cup event", "Workshop workspace"],
      image:
        "https://iidamidamerica.org/wp-content/uploads/2020/12/male-placeholder-image.jpeg",
    },
    {
      id: 3,
      name: "Mohamed",
      type: 3,
      email: "user@email.com",
      teams: "QA team",
      access: ["World cup event", "Workshop workspace", "Fun Event"],
      image:
        "https://iidamidamerica.org/wp-content/uploads/2020/12/male-placeholder-image.jpeg",
    },
    {
      id: 4,
      name: "Omar",
      type: 3,
      email: "user@email.com",
      teams: "Development team",
      access: [
        "World cup event",
        "Workshop workspace",
        "Fun Event",
        "Development Workspace",
      ],
      image:
        "https://iidamidamerica.org/wp-content/uploads/2020/12/male-placeholder-image.jpeg",
    },
  ]);

  const [newAdmin, setNewAdmin] = useState({
    name: "",
    type: "",
    email: "",
    teams: "",
    access: "",
    image: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAdmin({ ...newAdmin, [name]: value });
  };

  const handleAddAdmin = (e) => {
    e.preventDefault();
    const id = admins.length ? admins[admins.length - 1].id + 1 : 1;
    const accessArray = newAdmin.access.split(",").map((item) => item.trim());
    const adminToAdd = { ...newAdmin, id, access: accessArray };
    setAdmins([...admins, adminToAdd]);
    setNewAdmin({
      name: "",
      type: "",
      email: "",
      teams: "",
      access: "",
      image: "",
    });
  };

  const handleDeleteAdmin = (id) => {
    setAdmins(admins.filter((admin) => admin.id !== id));
  };

  return (
    <div className={styles.container}>
      <h1>Admin Management</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Type</th>
            <th>Email</th>
            <th>Teams</th>
            <th>Access</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {admins.map((admin) => (
            <tr key={admin.id}>
              <td>{admin.id}</td>
              <td>{admin.name}</td>
              <td>{admin.type}</td>
              <td>{admin.email}</td>
              <td>{admin.teams}</td>
              <td>{admin.access.join(", ")}</td>
              <td>
                <img src={admin.image} alt={admin.name} width="50" />
              </td>
              <td className={styles.actions}>
                <button onClick={() => handleDeleteAdmin(admin.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Add New Admin</h2>
      <form className={styles.form} onSubmit={handleAddAdmin}>
        <input
          type="text"
          name="name"
          value={newAdmin.name}
          onChange={handleInputChange}
          placeholder="Name"
          required
        />
        <input
          type="number"
          name="type"
          value={newAdmin.type}
          onChange={handleInputChange}
          placeholder="Type"
          required
        />
        <input
          type="email"
          name="email"
          value={newAdmin.email}
          onChange={handleInputChange}
          placeholder="Email"
          required
        />
        <input
          type="text"
          name="teams"
          value={newAdmin.teams}
          onChange={handleInputChange}
          placeholder="Teams"
          required
        />
        <input
          type="text"
          name="access"
          value={newAdmin.access}
          onChange={handleInputChange}
          placeholder="Access (comma separated)"
          required
        />
        <input
          type="url"
          name="image"
          value={newAdmin.image}
          onChange={handleInputChange}
          placeholder="Image URL"
          required
        />
        <button type="submit">Add Admin</button>
      </form>
    </div>
  );
};

export default Practice;
