import React from "react";
import { MdPayment } from "react-icons/md";
const ServiceCard = () => {
  return (
    <section className="flex items-center justify-center  px-[60px] flex-wrap mb-4">
      {[...Array(5)].map((i) => (
        <Card
          key={i}
          icon={<MdPayment />}
          caption="Online Payment"
          subcaption="Secure Payment Services"
        />
      ))}
    </section>
  );
};

export default ServiceCard;

const Card = ({ icon, caption, subcaption }) => {
  return (
    <div className="border w-[250px] flex items-center justify-center flex-col">
      <figure className="text-accent mb-2 text-6xl">{icon}</figure>
      <figcaption className="text-sm capitalize">{caption}</figcaption>
      <p className="font-light text-xs capitalize mb-1">{subcaption}</p>
    </div>
  );
};
