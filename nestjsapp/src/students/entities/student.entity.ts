import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    OneToOne,
    JoinColumn
} from 'typeorm';


@Entity('students')
export class Student {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ unique: true, length: 30 })
    rollNumber: string; // e.g. "CS-2026-042"

    @Column({ length: 60 })
    firstName: string;

    @Column({ length: 60 })
    lastName: string;

    @Column({ length: 100 })
    department: string;

    @Column({ type: 'int' })
    enrollmentYear: number;

    @Column({ default: 'ACTIVE' })
    status: 'ACTIVE' | 'GRADUATED' | 'SUSPENDED';

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt?: Date;

    @Column()
    userId: string;
}