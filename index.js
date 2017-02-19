const express     = require('express');
const port        = process.env.PORT || 4000;
const app         = express();
const dest        = `${__dirname}/public`;

app.use(express.static(dest));

app.get('/*', (req, res) => res.sendFile(`${dest}/index.html`));

// app.use('/api', expressJWT({ secret: secret })
//   .unless({
//     path: [
//       { url: '/api/login', methods: ['POST'] },
//       { url: '/api/register', methods: ['POST'] }
//     ]
//   }));

app.listen(port, () => console.log(`Express has started on port: ${port}`));
