let { ACAR } = require('../../Clients/Global.Clients')

let client = global.client = new ACAR({
    token: "",
    MongoURI: "mongodb+srv://renciaxd:Vahap2020@cluster0.hvjhn.mongodb.net/?retryWrites=true&w=majority",
    prefix: [".","!"],
    owners: ["728931818182541392","841620030482284564"]
})

client.on('ready', () => {
  client.guilds.cache.map(async (x) => {
    await x.members.fetch().then(guild => { })
  })
})

client.fetchCommands()
client.fetchEvents()
client.connect()