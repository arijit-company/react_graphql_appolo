import { ApolloServer, gql } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";


// creating schema 
const typeDefs = gql`
    type Query{
        greet: String
    }
`;


// resolver is like brain , which calculate all client request stuff and send response back to the client. 
const resolvers = {
    Query:{
        greet: ()=>{
            return "hello world"
        }
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins:[
        ApolloServerPluginLandingPageGraphQLPlayground
    ]
});
server.listen().then(({url})=>{
    console.log(url);
});