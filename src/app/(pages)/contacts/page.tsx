import SectionTitle from "components/section-title/SectionTitle";

import ContactsInfo from "./components/contacts-info/ContactsInfo";
import MessageSubmission from "./components/message-submission/MessageSubmission";

const ContactsPage = () => {
  return (
    <section className="py-14 min-h-screen" id="about">
      <div className="px-4 md:px-10">
        <SectionTitle>Contatos</SectionTitle>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 lg:max-w-5xl lg:mx-auto gap-x-10 gap-y-20">
          <MessageSubmission />

          <ContactsInfo />
        </div>
      </div>
    </section>
  );
};

export default ContactsPage;
