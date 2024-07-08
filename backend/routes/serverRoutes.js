import express from "express";
import ServerData from "../models/serverData.js";

const router = express.Router();

// get lists of all servers ...
router.get("/", async (req, res) => {
  try {
    const servers = await ServerData.find();
    res.json(servers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// get certain server by id ...
router.get("/:id", async (req, res) => {
  try {
    const server = await ServerData.findById(req.params.id);
    if (server === null)
      return res.status(404).json({ message: "Can not find server !" });
    res.json(server);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// create new server Post
router.post("/", async (req, res) => {
  const server = new ServerData({
    country : req.body.country ,
    name: req.body.name,
    mode: req.body.mode,
    map: req.body.map,
    custom: req.body.custom,
    hz: req.body.hz,
    players: req.body.players,
    ping: req.body.ping,
    region: req.body.region,
    description: req.body.description,
    settings: {
      region: req.body.settings.region,
      punkbaster: req.body.settings.punkbaster,
      fairfight: req.body.settings.fairfight,
      password: req.body.settings.password,
      preset: req.body.settings.preset,
    },
    advanced: {
      minimap: req.body.advanced.minimap,
      onlySquadLeaderSpawn: req.body.advanced.onlySquadLeaderSpawn,
      vehicles: req.body.advanced.vehicles,
      teamBalance: req.body.advanced.teamBalance,
      minimapSpotting: req.body.advanced.minimapSpotting,
      hud: req.body.advanced.hud,
      threePVehicleCam: req.body.advanced.threePVehicleCam,
      regenerativeHealth: req.body.regenerativeHealth,
      killCam: req.body.killCam,
      friendlyFire: req.body.friendlyFire,
      threeDSpotting: req.body.threeDSpotting,
      enemyNameTags: req.body.enemyNameTags,
    },
    rules: {
      tickets: req.body.rules.tickets,
      vehicleSpawnDelay: req.body.rules.vehicleSpawnDelay,
      bulletDamage: req.body.rules.bulletDamage,
      playerHealth: req.body.rules.playerHealth,
      playerRespawnTime: req.body.rules.playerRespawnTime,
      kickAfterIdle: req.body.rules.kickAfterIdle,
      BanAfterKicks: req.body.rules.BanAfterKicks,
    },
  });

  try {
    const newServerData = await server.save();
    if(!newServerData) return res.status(400).json({message :"null data point" });
    res.status(201).json(newServerData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
