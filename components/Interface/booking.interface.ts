export interface IBooking {
  id: string;
  customerId: string;
  technicianProfileId: string;
  serviceId: string;
  availabilityId: string;

  bookingDate: string;
  address: string;
  note?: string;
  status:
    | "REQUESTED"
    | "ACCEPTED"
    | "DECLINED"
    | "PAID"
    | "COMPLETED";

  service: {
    id: string;
    title: string;
    price: string;

    category: {
      icon: string;
      name: string;
    };
  };

  technicianProfile: {
    user: {
      name: string;
      profileImage: string;
    };
  };

  availability: {
    startTime: string;
    endTime: string;
  };
}