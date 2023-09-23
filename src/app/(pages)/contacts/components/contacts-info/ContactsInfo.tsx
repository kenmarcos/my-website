import { AtSignIcon, MapPinIcon, SmartphoneIcon } from "lucide-react";

const contactsInfo = [
  {
    name: "Localização",
    icon: MapPinIcon,
    description: "São Paulo, SP - Brasil",
  },
  {
    name: "E-mail",
    icon: AtSignIcon,
    description: "marcosken13@gmail.com",
  },
  {
    name: "Celular",
    icon: SmartphoneIcon,
    description: "(11) 94231-2965",
  },
];

const ContactsInfo = () => {
  return (
    <section>
      <ul className="space-y-6">
        {contactsInfo.map(({ name, icon: Icon, description }) => (
          <li key={name}>
            <div className="flex items-center gap-4">
              <div className="bg-blue-dark rounded-full p-2">
                <Icon className="text-blue-primary" />
              </div>

              <div>
                <h3 className="text-2xl font-bold">{name}</h3>

                <address className="text-sm">{description}</address>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ContactsInfo;
