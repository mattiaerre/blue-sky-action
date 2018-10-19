import { Lokka } from 'lokka';
import { Transport } from 'lokka-transport-http';

const client = baseUrl =>
  new Lokka({
    transport: new Transport(`${baseUrl}/graphql`)
  });

export default client;
