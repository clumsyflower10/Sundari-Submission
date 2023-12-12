import React from "react";

const ServicesDetails = () => {
  return (
    <div name="Services" className="bg-[rgb(171,175,124)] w-full">
      <div className="max-w-screen-lg p-6 mx-auto flex flex-col items-center justify-center w-full h-full">
        <div className="pb-8">
          <h1 className="text-yellow-400 text-4xl font-bold pt-4">Massage</h1>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 px-2 sm:px-0 pb-6">
          {massageServices.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center shadow-md shadow-gray-600 rounded-lg p-4"
            >
              <p className="text-green-900 text-xl font-semibold mb-2">
                {service.name}
              </p>
              <p className="text-green-900 text-center">
                {service.description}
              </p>
              <p className="text-green-900 text-center mt-2">
                Price: {service.price}
              </p>
            </div>
          ))}
        </div>

        <div className="pb-8">
          <h1 className="text-yellow-400 text-4xl font-bold pt-4">Facials</h1>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 px-2 sm:px-0 pb-6">
          {facialServices.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center shadow-md shadow-gray-600 rounded-lg p-4"
            >
              <p className="text-green-900 text-xl font-semibold mb-2">
                {service.name}
              </p>
              <p className="text-green-900 text-center">
                {service.description}
              </p>
              <p className="text-green-900 text-center mt-2">
                Price: {service.price}
              </p>
            </div>
          ))}
        </div>

        <div className="pb-8">
          <h1 className="text-yellow-400 text-4xl font-bold pt-4">
            Hair Treatments
          </h1>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 px-2 sm:px-0 pb-6">
          {hairTreatmentServices.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center shadow-md shadow-gray-600 rounded-lg p-4"
            >
              <p className="text-green-900 text-xl font-semibold mb-2">
                {service.name}
              </p>
              <p className="text-green-900 text-center">
                {service.description}
              </p>
              <p className="text-green-900 text-center mt-2">
                Price: {service.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const massageServices = [
  {
    name: "Balinese Massage",
    description:
      "Traditional Balinese massage to relax and rejuvenate your body.",
    price: "IDR 300,000",
  },
  {
    name: "Therapeutic Massage",
    description:
      "Relax and rejuvenate your body with our luxurious body treatments.",
    price: "IDR 250,000",
  },
  {
    name: "Sport Massage",
    description: "Enjoy a deep tissue body massage with hot oil.",
    price: "IDR 200,000",
  },
];

const facialServices = [
  {
    name: "Organic Facial",
    description: "Indulge in our facial treatments with organic ingredients.",
    price: "IDR 300,000",
  },
  {
    name: "Anti Aging Facial",
    description: "Anti-aging facial treatments for youthful skin.",
    price: "IDR 250,000",
  },
  {
    name: "Hydra Facial",
    description: "Facial treatments for glowing and radiant skin.",
    price: "IDR 200,000",
  },
];

const hairTreatmentServices = [
  {
    name: "Fruit Hair Mask",
    description: "Nourishing hair treatment with a fruity twist.",
    price: "IDR 300,000",
  },
  {
    name: "Hairfall Treatments",
    description:
      "Revitalize your hair and combat hairfall with our specialized treatment.",
    price: "IDR 250,000",
  },
  {
    name: "Scalp Rejuvenation",
    description:
      "Indulge in the ultimate relaxation for your scalp with our rejuvenating treatment.",
    price: "IDR 200,000",
  },
];

export default ServicesDetails;
