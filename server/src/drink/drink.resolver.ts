import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { DrinkResolverBase } from "./base/drink.resolver.base";
import { Drink } from "./base/Drink";
import { DrinkService } from "./drink.service";

@graphql.Resolver(() => Drink)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class DrinkResolver extends DrinkResolverBase {
  constructor(
    protected readonly service: DrinkService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
