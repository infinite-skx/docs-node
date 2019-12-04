
const { MongoClient } = require('mongodb');


const client = new MongoClient(
   'mongodb+srv://<user>:<password>@<cluster-url>?retryWrites=true&w=majority',
);

async function run() {
   try {
      await client.connect();

      const database = client.db('sample_mflix');
      const collection = database.collection('movies');

      // create a query document to look up an exact match for a move with this title
      const query = { title: 'The Room' };
      const movie = await collection.findOne(query);
      // since this method returns the matched document, not a cursor, print it directly
      console.log(movie);
   } finally {
      await client.close();
   }
}
run().catch(console.dir);