import mongoose from "mongoose";

const connectionInstance = {}


async  function connectDatabase(){

    mongoose.set('strictQuery',true);

         if(connectionInstance.isConnected){

                console.log('We are already connected to the Database');
                return;
         }

        if(mongoose.connections.length >0){

             connectionInstance.isConnected = mongoose.connections[0].readyState;
             if(connectionInstance.isConnected === 1){

                console.log('Using the previous connection Database Name: '+ mongoose.connections[0].db.namespace);
                return;
             }

             await mongoose.disconnect();
        }

        const db = await mongoose.connect(process.env.DB_URI, {

             dbName:'shopyease'
        })


        console.log('new Connection to the Database: ' + db.connections[0].db.namespace)
        connectionInstance.isConnected = db.connections[0].readyState;
}

 async function disconnectFromDB(){

      if(connectionInstance.isConnected){

          if(process.env.NODE_ENV === 'production'){

                await mongoose.disconnect();
                connectionInstance.isConnected = false;

          }
          else {

              console.log('Not disconnecting from database we are in : ',process.env.NODE_ENV);
          }
      }
}

const database = {
      connectDatabase,
      disconnectFromDB
}

export default database;