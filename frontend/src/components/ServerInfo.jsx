import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import Flag from "react-world-flags"
import mapping from "../utils/constants.js"

function ServerInfo() {
  const { id } = useParams();
  const [server, setServer] = useState(null);

  useEffect(() => {
    const getServerData = async () => {
      try {
        const res = await fetch(`http://localhost:5000/servers/${id}`);
        if (!res.ok) throw new Error("Failed to fetch server data");
        const serverData = await res.json();
        setServer(serverData);
      } catch (error) {
        toast.error(error.message);
      }
    };

    getServerData();
  }, [id]);

  if (!server) return <div>Loading...</div>;
  console.log(server.country);

  return (
    <div
      className="server-info"
    >
      {" "}
      <div
        style={{
          borderBottom: "1px solid #444",
          marginBottom: "20px",
          paddingBottom: "10px",
        }}
      >
      <Flag code={`${mapping[server.country]}`} style={{ width: '30px', height: 'auto', marginRight: '5px' }} />
        <h1 style={{ margin: "0", fontSize: "24px", fontWeight: "bold" }}>
          {server.name}
        </h1>

        <p style={{ margin: "5px 0", fontSize: "14px" }}>
          {server.mode} - {server.map} - {server.custom} - {server.hz} Hz
        </p>
        <p style={{ margin: "5px 0", fontSize: "14px" }}>
          {server.description}
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "15px 0",
            fontSize: "14px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "10px",
            }}
          >
            <span  style={{ fontWeight: 'bold' , fontSize : "18px"}}>PLAYERS</span>
            <span style={{ fontWeight: 'bold', fontSize : "18px" }}>PING</span>
            <span style={{ fontWeight: 'bold' , fontSize : "18px" }}>TICKRATE</span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "10px",
            }}
          >
            <span style={{fontSize : "16px"}}>{server.players}</span>
            <span style={{fontSize : "16px"}}>{server.ping}ms</span>
            <span style={{fontSize : "16px"}}>{server.tickrate}</span>
          </div>
        </div>
      </div>
      <div className="server-details">
        <div className="settings">
          <h2>Settings</h2>
          <ul>
            <div className="hover">
              <li>
                <span className="label">REGION:</span>
                <span className="value">{server.settings.region}</span>
              </li>
            </div>
            <div className="hover">
              <li>
                <span className="label">PUNKBUSTER:</span>
                <span className="value">{server.settings.punkbaster}</span>
              </li>
            </div>
            <div className="hover">
              <li>
                <span className="label">FAIRFIGHT:</span>
                <span className="value">{server.settings.fairfight}</span>
              </li>
            </div>
            <div className="hover">
              <li>
                <span className="label">PASSWORD:</span>
                <span className="value">{server.settings.password}</span>
              </li>
            </div>
            <div className="hover">
              <li>
                <span className="label">PRESET:</span>
                <span className="value">{server.settings.preset}</span>
              </li>
            </div>
          </ul>
        </div>
        <div className="advanced">
          <h2>Advanced</h2>
          <ul>
            <div className="hover">
              <li>
                <span className="label">MINIMAP:</span>
                <span className="value">{server.advanced.minimap}</span>
              </li>
            </div>
            <div className="hover">
              <li>
                <span className="label">ONLY SQUAD LEADER SPAWN:</span>
                <span className="value">
                  {server.advanced.onlySquadLeaderSpawn}
                </span>
              </li>
            </div>
            <div className="hover">
              <li>
                <span className="label">VEHICLES:</span>
                <span className="value">{server.advanced.vehicles}</span>
              </li>
            </div>
            <div className="hover">
              <li>
                <span className="label">TEAM BALANCE:</span>
                <span className="value">{server.advanced.teamBalance}</span>
              </li>
            </div>
            <div className="hover">
              <li>
                <span className="label">MINIMAP SPOTTING:</span>
                <span className="value">{server.advanced.minimapSpotting}</span>
              </li>
            </div>
            <div className="hover">
              <li>
                <span className="label">HUD:</span>
                <span className="value">{server.advanced.hud}</span>
              </li>
            </div>
            <div className="hover">
              <li>
                <span className="label">3P VEHICLE CAM:</span>
                <span className="value">
                  {server.advanced.threePVehicleCam}
                </span>
              </li>
            </div>
            <div className="hover">
              <li>
                <span className="label">REGENERATIVE HEALTH:</span>
                <span className="value">
                  {server.advanced.regenerativeHealth}
                </span>
              </li>
            </div>
            <div className="hover">
              <li>
                <span className="label">KILL CAM:</span>
                <span className="value">{server.advanced.killCam}</span>
              </li>
            </div>
            <div className="hover">
              <li>
                <span className="label">FRIENDLY FIRE:</span>
                <span className="value">{server.advanced.friendlyFire}</span>
              </li>
            </div>
            <div className="hover">
              <li>
                <span className="label">3D SPOTTING:</span>
                <span className="value">{server.advanced.threeDSpotting}</span>
              </li>
            </div>
            <div className="hover">
              <li>
                <span className="label">ENEMY NAME TAGS:</span>
                <span className="value">{server.advanced.enemyNameTags}</span>
              </li>
            </div>
          </ul>
        </div>
        <div className="rules">
          <h2>Rules</h2>
          <ul>
            <div className="hover">
              <li>
                <span className="label">TICKETS:</span>
                <span className="value">{server.rules.tickets}</span>
              </li>
            </div>
            <div className="hover">
              <li>
                <span className="label">VEHICLE SPAWN DELAY:</span>
                <span className="value">{server.rules.vehicleSpawnDelay}</span>
              </li>
            </div>
            <div className="hover">
              <li>
                <span className="label">BULLET DAMAGE:</span>
                <span className="value">{server.rules.bulletDamage}</span>
              </li>
            </div>
            <div className="hover">
              <li>
                <span className="label">PLAYER HEALTH:</span>
                <span className="value">{server.rules.playerHealth}</span>
              </li>
            </div>
            <div className="hover">
              <li>
                <span className="label">PLAYER RESPAWN TIME:</span>
                <span className="value">{server.rules.playerRespawnTime}</span>
              </li>
            </div>
            <div className="hover">
              <li>
                <span className="label">KICK AFTER IDLE:</span>
                <span className="value">{server.rules.kickAfterIdle}</span>
              </li>
            </div>
            <div className="hover">
              <li>
                <span className="label">BAN AFTER KICKS:</span>
                <span className="value">{server.rules.BanAfterKicks}</span>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ServerInfo;
