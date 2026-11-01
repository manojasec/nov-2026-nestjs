import { User } from "../../users/entities/user.entity.js";
export class Student {
    id: string;
    userId: string;
    user?: User;

    firstName: string;
    lastName: string;
    rollNumber: string;    // e.g. "CS-2026-042"
    department: string;    // e.g. "Computer Science"
    enrollmentYear: number;
    status: 'ACTIVE' | 'GRADUATED' | 'SUSPENDED';
}