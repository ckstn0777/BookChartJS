import { FastifyPluginAsync } from "fastify";
import { getMongoRepository } from "typeorm";
import { Book } from "../../../entity/Book";

const bookRoute: FastifyPluginAsync = async (fastify, opts) => {
  /**
   * 출판사 별 보유 현황
   * GET /api/book/publisher
   */
  fastify.get("/publisher", async (request, reply) => {
    const bookRepository = getMongoRepository(Book);
    const result = await bookRepository
      .aggregate([
        {
          $match: {
            Publisher: { $ne: "" },
          },
        },
        {
          $group: {
            _id: "$Publisher",
            count: { $sum: 1 },
          },
        },
        {
          $sort: { count: -1 },
        },
      ])
      .toArray();

    return reply.send(result);
  });

  /**
   * 장르 별 보유 현황
   * GET /api/book/genre
   */
  fastify.get("/genre", async (request, reply) => {
    const bookRepository = getMongoRepository(Book);
    const result = await bookRepository
      .aggregate([
        {
          $group: {
            _id: "$Genre",
            count: { $sum: 1 },
          },
        },
      ])
      .toArray();

    return reply.send(result);
  });
};

export default bookRoute;
