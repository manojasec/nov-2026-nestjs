import { Role } from "../../common/enums/role.enum.js";
export class User {
    id: string;
    email: string;
    passwordHash: string;
    role: Role;
    createdAt: Date;
}