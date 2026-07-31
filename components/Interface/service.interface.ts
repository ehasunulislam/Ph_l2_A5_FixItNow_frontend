export interface IAvailability {
  id: string;
  date: string;
  startTime: string;
  endTime: string;
  isBooked: boolean;
}

export interface IUser {
  id: string;
  name: string;
  phone: string;
  address: string;
  profileImage: string;
}

export interface ITechnicianProfile {
  id: string;
  bio: string;
  experience: number;
  hourlyRate: string;
  location: string;
  averageRating: string;
  totalReviews: number;
  isVerified: boolean;

  user: IUser;

  availability: IAvailability[];
}

export interface ICategory {
  id: string;
  name: string;
  icon: string;
}

export interface IService {
  id: string;
  title: string;
  description: string;
  price: string;
  duration: number;

  category: ICategory;

  technicianProfile: ITechnicianProfile;
}