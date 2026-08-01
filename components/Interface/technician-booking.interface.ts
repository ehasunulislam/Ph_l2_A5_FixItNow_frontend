export interface ITechnicianBooking {
  id: string;
  customerId: string;
  technicianProfileId: string;
  serviceId: string;
  availabilityId: string;

  bookingDate: string;
  address: string;
  note: string | null;

  status:
    | "REQUESTED"
    | "ACCEPTED"
    | "DECLINED"
    | "PAID"
    | "COMPLETED";

  createdAt: string;
  updatedAt: string;

  customer: {
    id: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    profileImage: string | null;
  };

  service: {
    id: string;
    title: string;
    description: string;
    price: string;
    duration: number;

    category: {
      id: string;
      name: string;
      icon: string;
    };
  };

  availability: {
    id: string;
    date: string;
    startTime: string;
    endTime: string;
    isBooked: boolean;
  };
}