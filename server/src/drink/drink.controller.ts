import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DrinkService } from "./drink.service";
import { DrinkControllerBase } from "./base/drink.controller.base";

@swagger.ApiTags("drinks")
@common.Controller("drinks")
export class DrinkController extends DrinkControllerBase {
  constructor(
    protected readonly service: DrinkService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
