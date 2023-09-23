import SectionTitle from "components/section-title/SectionTitle";

import ContactsInfo from "./components/contacts-info/ContactsInfo";
import MessageSubmission from "./components/message-submission/MessageSubmission";

const ContactsPage = () => {
  return (
    <section className="py-14 min-h-screen" id="about">
      <div className="px-4 md:px-10">
        <SectionTitle>Contatos</SectionTitle>

        <div className="mt-12 flex flex-wrap-reverse gap-y-20 gap-x-10 justify-center">
          <ContactsInfo />

          <MessageSubmission />
        </div>
      </div>
    </section>
  );
};

export default ContactsPage;
