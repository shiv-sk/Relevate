export enum JobLevel {
  Intern = 'Intern',
  Entry = 'Entry',
  Associate = 'Associate',
  Senior = 'Senior',
}

export enum JobType {
  Internship = 'Internship',
  FullTime = 'FullTime',
  PartTime = 'PartTime',
  Contract = 'Contract',
}

export enum JobLocation {
  Onsite = 'Onsite',
  Remote = 'Remote',
}

export interface Job {
  title: string,
  description: string,
  salary: string,
  requiredSkills: string[],
  level: JobLevel,
  type: JobType,
  location: JobLocation
}

export interface JobDetail {
  title: string,
  description: string,
  salary: string,
  requiredSkills: string[],
  level: JobLevel,
  type: JobType,
  location: JobLocation,
  companyId:{
    _id: string,
    about: string,
    name: string,
    socialMedia: {
      name: string,
      link: string
    }[]
  }
}