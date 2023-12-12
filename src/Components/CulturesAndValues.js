import React from "react";

const CulturesAndValues = () => {
  return (
    <div className="bg-[rgb(171,175,124)] w-full md:h-[80vh] pt-2">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className=" text-yellow-400 text-4xl font-bold mb-6">
          Our Cultures and Values
        </h2>
        <p className="text-lg text-green-900 mb-8">
          At Sundari, we are committed to creating a positive and welcoming
          environment for our clients and team members. Our cultures and values
          define who we are and guide our actions every day.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <CultureCard
            title="Customer Satisfaction"
            description="Our top priority is the satisfaction of our customers. We strive to provide exceptional service and exceed their expectations."
          />
          <CultureCard
            title="Team Collaboration"
            description="We believe in the power of teamwork. Collaboration and communication are essential for creating a harmonious and productive work environment."
          />
          <CultureCard
            title="Wellness and Relaxation"
            description="We promote wellness and relaxation for both our clients and team members. A healthy and balanced lifestyle is crucial for happiness and success."
          />
        </div>
      </div>
    </div>
  );
};

const CultureCard = ({ title, description }) => {
  return (
    <div className="bg-yellow-400 p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-green-900 mb-4">{title}</h3>
      <p className="text-green-900">{description}</p>
    </div>
  );
};

export default CulturesAndValues;
