import { createAccessControl } from "better-auth/plugins/access";
import {
  adminAc,
  defaultStatements,
} from "better-auth/plugins/admin/access";

export const adminAccessControl = createAccessControl(defaultStatements);

export const adminRole = adminAccessControl.newRole({
  ...adminAc.statements,
});
