import { morgan } from 'morgan';
// import express from 'express';
import postgraphile from 'postgraphile';
// import cors from 'cors';
// import 'dotenv/config'
// const app = express();
// app.use(express.json());
// app.use(cors())
// app.use(
//   postgraphile(
//     process.env.POSTGRES_GRAPHIL_URL as string,
//     'public',
//     {
//       watchPg: true,
//       graphiql: true,
//       enhanceGraphiql: true,
//       dynamicJson:true,
//       classicIds:true,
//       retryOnInitFail: true, // Add this line

//     }
//   )
// );
// console.log(process.env.POSTGRES_GRAPHIL_URL as string);

// app.listen(4000);
// console.log(`:rocket: Server ready at http://localhost:4000/`);


// import morgan from "morgan";
//  import cors from "cors";
// import pg from 'pg';
// import { ApolloServer } from 'apollo-server';
// import { makeSchemaAndPlugin } from 'postgraphile-apollo-server';
// import http from "http";
// import express,{ request, response} from 'express'
// import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";

//     const pgPool = new pg.Pool({
//       connectionString: "postgres://zeev:dp05LCj0YwdJE3AKhLlims7jxrp2OnpJ@dpg-cm3v2ha1hbls73a9tb10-a.oregon-postgres.render.com/users?sslmode=true"
//   });
  


//   const app = express();
//   const httpServer = http.createServer(app);
  
//   const main = async() => {
//     const { schema, plugin } = await makeSchemaAndPlugin(
//       pgPool,
//       'public', 
//       {
//         watchPg: true,
//         graphiql: true,
//         enhanceGraphiql: true,
//         ownerConnectionString: 'owner',
//         jwtSecret: "secret",
//         pgDefaultRole: true,
   
//       }
//     );

//     const server = new ApolloServer({
//       schema,
//       plugins: [plugin ,ApolloServerPluginDrainHttpServer({ httpServer }), ],
//       context: ({ request, response })

//     });

//     app.use(
//       "/graphql",
//       cors<cors.CorsRequest>(),
//       express.json(),
//       morgan("tiny"),
//     );
//     const { url } = await server.listen();
//     console.log(`🚀 Server ready at ${url}`);
//    }


// main().catch(e => {
//   console.error(e);
//   process.exit(1);
// });


// import express  from "express";
// import morgan from "morgan";
// import postgraphile from "postgraphile";
// import cors from "cors";

// const app = express();


// const Option = {
//   origin: 'http://localhost:4200'
// }
// app.use(express.json());
// app.use(morgan('tiny'));
// app.use(cors(Option))

// app.use(postgraphile("postgres://postgres:212208409@localhost:5432/users", 
// "public", {
//   watchPg: true,
//   graphiql: true,
//   enhanceGraphiql: true
// }))

// app.listen(4000, "localhost", () => {
//   console.log(`[ready] http://localhost:4000/graphql`);
  
// })
import cors from 'cors';
import express from 'express';

const app = express();

const { PORT } = process.env;

app.use(cors());
app.use(express.json());
app.use(postgraphile)

app.listen(PORT, () => console.log(`http://localhost:${PORT}/graphiql`))

