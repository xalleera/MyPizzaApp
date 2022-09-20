import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { DrinkServiceBase } from "./base/drink.service.base";

@Injectable()
export class DrinkService extends DrinkServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
