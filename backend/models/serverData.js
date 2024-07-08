import mongoose from 'mongoose';

const serverSchema = new mongoose.Schema({
    country : {type : String},
    name: { type: String, required: true },
    mode: { type: String },
    map: { type: String },
    custom: { type: String },
    hz: { type: String },
    players: { type: String },
    ping: { type: String },
    tickrate : {type : String , default : "60 Hz"},
    region: { type: String },
    description: { type: String },
    settings: {
        region: { type: String },
        punkbaster: { type: String },
        fairfight: { type: String },
        password: { type: String },
        preset: { type: String },
    },
    advanced: {
        minimap: { type: String },
        onlySquadLeaderSpawn: { type: String },
        vehicles: { type: String },
        teamBalance: { type: String },
        minimapSpotting: { type: String },
        hud: { type: String },
        threePVehicleCam: { type: String },
        regenerativeHealth: { type: String , default : "ON"},
        killCam: { type: String , default : "ON"},
        friendlyFire: { type: String , default : "OFF"},
        threeDSpotting: { type: String ,default : "ON"},
        enemyNameTags: { type: String ,default : "OFF"},
    },
    rules: {
        tickets: { type: Number },
        vehicleSpawnDelay: { type: Number },
        bulletDamage: { type: Number },
        playerHealth: { type: Number },
        playerRespawnTime: { type: Number },
        kickAfterIdle: { type: Number },
        BanAfterKicks: { type: Number },
    },
});

const ServerData = mongoose.model('ServerData', serverSchema);
export default ServerData;
