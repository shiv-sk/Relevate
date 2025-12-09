export interface ApplicationOptions {
    salaryExcepted: string,
    preferredLocation: string,
    availability: string,
    experience: string
}

export interface UserApplication {
    _id: string,
    jobId:{
        title: string,
        companyId:{
            _id: string
            name: string,
        }
    },
    userId: string,
    profileId: string,
    status: string,
    createdAt: string,
    updatedAt: string
}