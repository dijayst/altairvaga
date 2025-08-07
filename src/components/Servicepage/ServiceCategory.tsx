import { useServiceStore } from "./useServiceStore";

export default function ServicesCategory() {
  const services = [
    "Content Marketing",
    "Email Marketing",
    "Brand Strategy",
    "Social Media",
    "Search Advertising",
    "SEO Optimization",
  ];

  //const selected = "Brand Strategy";

   const { selectedService, setSelectedService } = useServiceStore();

  return (
  <>
     
      <div className="bg-gradient-to-b from-purple-700 via-indigo-700 to-blue-700 p-6 font-nunito rounded-2xl w-full">
              <h2 className="text-white text-xl font-semibold mb-6">Services Category</h2>
              <ul className="space-y-3">
                  {services.map((service) => (
                      <li
                          key={service}
                          className={`flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-300 ${service === selectedService
                                  ? "bg-gradient-to-r from-pink-500 to-blue-500 text-white"
                                  : "bg-purple-900 text-white"}`}
                      >
                          <span className="text-sm font-medium">{service}</span>
                          <button
                              onClick={() => setSelectedService(service)}
                              className={`w-7 h-7 flex items-center justify-center rounded-md ${service === selectedService ? "bg-white text-blue-600" : "bg-white text-purple-600"}`}
                          >
                              ➜
                          </button>
                      </li>
                  ))}
              </ul>
          </div></>

  );
}