// import { getAllServices } from "../_action/getAllServicesAction";
// import ServiceCard from "./ServiceCard";

// const ServiceGrid = async () => {
//   const result = await getAllServices({});

//   const services = result.data.services.data;

//   return (
//     <div className="max-w-7xl mx-auto py-20 px-5">
//       <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//         {services.map((service: any) => (
//           <ServiceCard
//             key={service.id}
//             service={service}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ServiceGrid;