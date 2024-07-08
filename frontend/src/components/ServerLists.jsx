import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import Flag from "react-world-flags";
// import './ServerLists.css'; // Ensure you create this CSS file
import "../ServerLists.css";
import mapping from "../utils/constants.js"


function ServerLists() {
  const [serversList, setServersList] = useState([]);

  const getServersList = async () => {
    try {
      const res = await fetch("/api/servers");
      if (!res.ok) throw new Error("Failed to fetch servers");
      const servers = await res.json();
      setServersList(servers);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getServersList();
  }, []); // Run only once after the component mounts

  return (
    <div className="server-browser">
      <h2>Server Browser</h2>
      {serversList.length === 0 ? (
        <div>No servers available</div>
      ) : (
        <ul className="server-list">
          {serversList.map((server) => (
            <li key={server._id} className="server-item">
              <Link to={`/server/${server._id}`}>
                <div className="server-info">
                  <div className="server-header">
                    <Flag
                      code={`${mapping[server.country]}`}
                      style={{
                        width: "30px",
                        height: "auto",
                        marginRight: "10px",
                      }}
                    />
                    <h3 className="server-name">{server.name}</h3>
                  </div>
                  <p className="server-details">
                    {server.mode} - {server.map} - {server.custom} - {server.hz}
                    <p className="server-status">
                      <span style={{marginRight : "60px"}}>Players: {server.players}</span> {'  '}
                      <span>Ping: {server.ping}</span>
                    </p>
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ServerLists;
