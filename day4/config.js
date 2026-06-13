//17
const config = {
  env: "development",
  port: 3000,
  dbUrl: "mongodb://localhost:27017/mydb"
};
if (!config.env) throw new Error("env is missing");
if (!config.port) throw new Error("port is missing");
if (!config.dbUrl) throw new Error("dbUrl is missing");
export default config;


//63
const config = {
  env: "development",
  port: 3000
};
export default config;