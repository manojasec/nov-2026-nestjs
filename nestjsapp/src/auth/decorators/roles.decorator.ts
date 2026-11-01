import { SetMetadata } from '@nestjs/common';
import { Role } from '../../common/enums/role.enum.js';

export const ROLES_KEY = 'roles';
// Custom decorator attaching metadata to route handlers
export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);