import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../decorators/roles.decorator.js';
import { Role } from '../../common/enums/role.enum.js';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    // const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
    //   context.getHandler(),
    //   context.getClass(),
    // ]);

    // if (!requiredRoles) return true; // No roles needed for this route

    // const { user } = context.switchToHttp().getRequest();
    // if (!user || !requiredRoles.includes(user.role)) {
    //   throw new ForbiddenException('Forbidden: Insufficient role permissions.');
    // }

    return true; // Authorized!
  }
}