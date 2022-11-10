const mongoose = require('mongoose');
const db = 'pirate'


mongoose.connect('mongodb://localhost/' + db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Database connection established'))
    .catch(err=>console.log('There was an err', err))