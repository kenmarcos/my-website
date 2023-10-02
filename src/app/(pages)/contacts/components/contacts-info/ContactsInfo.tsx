import { LuAtSign, LuMap, LuSmartphone } from "react-icons/lu";

const contactsInfo = [
  {
    name: "Localização",
    icon: LuMap,
    description: "São Paulo, SP - Brasil",
  },
  {
    name: "E-mail",
    icon: LuAtSign,
    description: "marcosken13@gmail.com",
  },
  {
    name: "Celular",
    icon: LuSmartphone,
    description: "(11) 94231-2965",
  },
];

const ContactsInfo = () => {
  return (
    <section className="lg:order-first">
      <ul className="space-y-6">
        {contactsInfo.map(({ name, icon: Icon, description }) => (
          <li key={name}>
            <div className="flex items-center gap-4 bg-gray-light rounded-md p-4 shadow-xl shadow-gray-dark">
              <div className="bg-blue-dark rounded-full p-2">
                <Icon size={20} className="text-blue-primary" />
              </div>

              <div>
                <h3 className="text-xl font-bold">{name}</h3>

                <address className="text-sm break-all">{description}</address>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ContactsInfo;
