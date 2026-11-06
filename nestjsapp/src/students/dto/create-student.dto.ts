import { IsEmail, IsNotEmpty, IsString, MinLength, Matches, IsInt, Min, Max } from 'class-validator';
import { Transform } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CreateStudentDto {
  @ApiProperty({ example: 'alex.rivera@university.edu', description: 'Institutional email' })
  @IsEmail({}, { message: 'Must be a valid email format' })
  @Transform(({ value }) => value?.trim().toLowerCase()) // Normalize input
  email: string;

  @ApiProperty({ example: 'Pass123!Secure', description: 'Min 8 chars with upper, lower, & number/symbol' })
  @IsString()
  @MinLength(8, { message: 'Password must be at least 8 characters' })
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Password must contain uppercase, lowercase, and a number or symbol',
  })
  password: string;

  @ApiProperty({ example: 'Alex', description: 'Legal first name' })
  @IsString()
  @IsNotEmpty({ message: 'First name cannot be empty' })
  @Transform(({ value }) => value?.trim())
  firstName: string;

  @ApiProperty({ example: 'Rivera', description: 'Legal last name' })
  @IsString()
  @IsNotEmpty({ message: 'Last name cannot be empty' })
  @Transform(({ value }) => value?.trim())
  lastName: string;

  @ApiProperty({ example: 'CS-2026-042', description: 'Format: CS-YYYY-XXX' })
  @IsString()
  @Matches(/^CS-\d{4}-\d{3}$/, { message: 'Roll number must follow format CS-YYYY-XXX' })
  rollNumber: string;

  @ApiProperty({ example: 'Computer Science' })
  @IsString()
  @IsNotEmpty()
  department: string;

  @ApiProperty({ example: 2026, minimum: 2020, maximum: 2035 })
  @IsInt()
  @Min(2020)
  @Max(2035)
  enrollmentYear: number;
}