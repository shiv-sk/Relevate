import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Company } from './company.schema';
import { JobLevel, JobLocation, JobStatus, JobType } from 'commons/job.common';

export type JobDocument = HydratedDocument<Job>;

@Schema({ timestamps: true })
export class Job {
  @Prop({ required: true, trim: true, index: true })
  title: string;

  @Prop({ required: true, trim: true })
  description: string;

  @Prop({ required: true, trim: true })
  salary: string;

  @Prop({ type: [String], required: true, trim: true })
  requiredSkills: string[];

  @Prop({ required: true, trim: true })
  address: string;

  @Prop({ type: String, enum: JobLevel, default: JobLevel.Entry, trim: true })
  level: JobLevel;

  @Prop({ type: String, enum: JobType, default: JobType.FullTime, trim: true })
  type: JobType;

  @Prop({
    type: String,
    enum: JobLocation,
    default: JobLocation.Onsite,
    trim: true,
  })
  location: JobLocation;

  @Prop({ type: String, enum: JobStatus, default: JobStatus.Open, trim: true })
  status: JobStatus;

  @Prop({ required: true, trim: true })
  contact: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company',
    required: true,
  })
  companyId: Company;
}

export const JobSchema = SchemaFactory.createForClass(Job);
