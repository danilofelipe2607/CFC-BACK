const mongoose = require("mongoose");

module.exports = async (req, res, next) => {
  class MongoConnections {
    constructor() {
      this.connectionsClients = [];

      setInterval(() => {
        const indexDelete = [];
        for (let i = 0; i < this.connectionsClients.length; i++) {
          const connection = this.connectionsClients[i];
          const currentDate = new Date();
          if (
            connection.usingAt.getTime() <=
            currentDate.getTime() - 1000 * 60 * 60
          ) {
            indexDelete.push(i);
            connection.connection.close();
          }
        }

        this.connectionsClients = this.connectionsClients.filter(
          (item, index) => !indexDelete.includes(index)
        );
      }, 1000 * 60 * 10);
    }
    static getInstance() {
      if (!this._intance) {
        this._intance = new MongoConnections();
      }

      return this._intance;
    }
  }

  const tenant = req.headers["tenant"];

  if (tenant) {
    const clientConnection = MongoConnections.getInstance().connectionsClients.find(
      (c) => c.tenant === tenant
    );

    if (!clientConnection) {
      req.mongoConnection = await mongoose.createConnection(
        `mongodb+srv://admin:admin@dbteste-sn9zi.mongodb.net/${tenant}?retryWrites=true&w=majority`,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        }
      );
      MongoConnections.getInstance().connectionsClients.push({
        tenant,
        connection: req.mongoConnection,
        createAt: new Date(),
        usingAt: new Date(),
      });
    } else {
      req.mongoConnection = clientConnection.connection;
      clientConnection.usingAt = new Date();
    }
  }
  next();
};
