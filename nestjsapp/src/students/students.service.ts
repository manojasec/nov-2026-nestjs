import { Injectable, ConflictException } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto.js';
import { UpdateStudentDto } from './dto/update-student.dto.js';
import * as bcrypt from 'bcrypt';
import { Role } from "../common/enums/role.enum.js";
@Injectable()
export class StudentsService {
  private usersTable: any[] = [];
  private studentsTable: any[] = [];
  create(createStudentDto: CreateStudentDto) {
    return 'This action adds a new student';
  }

  findAll() {
    return `This action returns all students`;
  }

  findOne(id: number) {
    return `This action returns a #${id} student`;
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    return `This action updates a #${id} student`;
  }

  remove(id: number) {
    return `This action removes a #${id} student`;
  }

  async registerStudent(dto: CreateStudentDto) {
    // 1. Check if email already registered
    const existingUser = this.usersTable.find((u) => u.email === dto.email);
    if (existingUser) {
      throw new ConflictException(`Email '${dto.email}' is already in use.`);
    }

    // 2. Check if roll number already assigned
    const existingRoll = this.studentsTable.find((s) => s.rollNumber === dto.rollNumber);
    if (existingRoll) {
      throw new ConflictException(`Roll number '${dto.rollNumber}' already exists.`);
    }

    // 3. Hash password with bcrypt (10 rounds of salt)
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(dto.password, saltRounds);

    // 4. Create base user record with STUDENT role
    const newUser = {
      id: `usr_${Date.now()}`,
      email: dto.email,
      passwordHash,
      role: Role.STUDENT,
      createdAt: new Date(),
    };
    this.usersTable.push(newUser);

    // 5. Create student profile linked to the user
    const newStudent = {
      id: `std_${Date.now()}`,
      userId: newUser.id,
      firstName: dto.firstName,
      lastName: dto.lastName,
      rollNumber: dto.rollNumber,
      department: dto.department,
      enrollmentYear: dto.enrollmentYear,
      status: 'ACTIVE',
    };
    this.studentsTable.push(newStudent);

    // 6. Return sanitized response WITHOUT password hash
    return {
      message: 'Student registered successfully',
      student: newStudent,
      user: { id: newUser.id, email: newUser.email, role: newUser.role },
    };
  }
}
