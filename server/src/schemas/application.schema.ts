import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from './user.schema';
import { Job } from './job.schema';
import { ApplicationStatus } from 'commons/application.common';
import { Profile } from './profile.schema';

export type ApplicationDocument = HydratedDocument<Application>;

@Schema({ timestamps: true })
export class Application {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  })
  userId: User;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job',
    required: true,
  })
  jobId: Job;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Profile',
    required: true,
  })
  profileId: Profile;
  @Prop({
    type: {
      skills: { type: [String], default: [] },
      lookingFor: { type: String, trim: true },
      name: { type: String, trim: true },
      email: { type: String, trim: true },
      currentLocation: { type: String, trim: true },
      experience: {
        type: [
          {
            company: { type: String, trim: true },
            role: { type: String, trim: true },
            years: { type: Number, default: 0 },
            noticePeriod: { type: String, trim: true },
          },
        ],
        default: [],
      },
      projects: {
        type: [
          {
            name: { type: String, trim: true },
            description: { type: String, trim: true },
            links: {
              github: { type: String, trim: true },
              live: { type: String, trim: true },
              demo: { type: String, trim: true },
            },
          },
        ],
        default: [],
      },
    },
    default: {},
  })
  profileSnapshot?: {
    lookingFor: string;
    name: string;
    email: string;
    currentLocation: string;
    skills?: string[];
    experience?: {
      company: string;
      role: string;
      years: number;
      noticePeriod?: string;
    }[];
    projects?: {
      name?: string;
      description?: string;
      links?: {
        github?: string;
        live?: string;
        demo?: string;
      };
    }[];
  };

  @Prop({
    type: String,
    enum: ApplicationStatus,
    default: ApplicationStatus.Applied,
    trim: true,
  })
  status: ApplicationStatus;
}

export const ApplicationSchema = SchemaFactory.createForClass(Application);
