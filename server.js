const app = require('./app');
const mongoose = require('mongoose');

const { DB_HOST, PORT = 3001 } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    const dbName = mongoose.connection.name;
    console.log(`Connected to database: ${dbName}`);
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(error => {
    console.log(error.message);
    process.exit(1);
  });

