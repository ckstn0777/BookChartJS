import { FastifyPluginCallback } from "fastify";
import bookRoute from "./book";

const apiRoute: FastifyPluginCallback = (fastify, opts, done) => {
  fastify.register(bookRoute, { prefix: "/book" });
  done();
};

export default apiRoute;
