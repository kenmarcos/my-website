import ContactsInfo from "./components/contacts-info/ContactsInfo";
import MessageSubmission from "./components/message-submission/MessageSubmission";

const ContactsPage = () => {
  return (
    <section className="py-14 min-h-screen" id="about">
      <div className="px-4 md:px-10">
        <h2 className="text-4xl text-blue-primary decoration-4 underline underline-offset-[16px]">
          Contatos
        </h2>

        <div className="mt-12 px-8">
          <div className="flex flex-col md:flex-row md:justify-center gap-20">
            <ContactsInfo />

            <MessageSubmission />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsPage;
