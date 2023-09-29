import { Button } from "components/ui/button";
import { Input } from "components/ui/input";
import { Textarea } from "components/ui/textarea";

const MessageSubmission = () => {
  return (
    <section className="lg-order-last lg:col-span-2">
      <form className="space-y-6">
        <div className="flex flex-wrap gap-6 text-gray-primary">
          <Input placeholder="Seu nome" />

          <Input placeholder="Seu e-mail" />
        </div>

        <div className="text-gray-primary">
          <Input placeholder="Assunto" />
        </div>

        <div className="text-gray-primary">
          <Textarea placeholder="Mensagem" rows={7} />
        </div>

        <div className="text-end">
          <Button className="bg-blue-primary w-full md:max-w-[160px]">
            Enviar Menssagem
          </Button>
        </div>
      </form>
    </section>
  );
};

export default MessageSubmission;
