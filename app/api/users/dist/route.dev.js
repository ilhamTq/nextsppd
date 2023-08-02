"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.POST = void 0;

var _server = require("next/server");

var _client = require("@prisma/client");

var prisma = new _client.PrismaClient();

var POST = function POST(request) {
  var body, user;
  return regeneratorRuntime.async(function POST$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(request.json());

        case 2:
          body = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(prisma.user.create({
            data: {
              nama: body.nama,
              email: body.email,
              telp: body.telp,
              username: body.username,
              password: body.password
            }
          }));

        case 5:
          user = _context.sent;
          return _context.abrupt("return", _server.NextResponse.json(user));

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.POST = POST;