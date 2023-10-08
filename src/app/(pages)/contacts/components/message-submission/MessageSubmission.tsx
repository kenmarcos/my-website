"use client";

import { LuLoader2 } from "react-icons/lu";

import { Button } from "components/ui/button";
import { Input } from "components/ui/input";
import { Textarea } from "components/ui/textarea";

import { useMessageSubmission } from "./useMessageSubmission";

const MessageSubmission = () => {
  const { handleSubmit, handleFormSubmit, register, errors, isLoading } =
    useMessageSubmission();

  return (
    <section className="lg-order-last lg:col-span-2">
      <form className="space-y-6" onSubmit={handleSubmit(handleFormSubmit)}>
        <div>
          <Input placeholder="Seu nome" {...register("name")} />
          {errors.name && (
            <small className="text-red-500">{errors.name.message}</small>
          )}
        </div>

        <div>
          <Input placeholder="Seu e-mail" {...register("email")} />
          {errors.email && (
            <small className="text-red-500">{errors.email.message}</small>
          )}
        </div>

        <div>
          <Input placeholder="Assunto" {...register("subject")} />
          {errors.subject && (
            <small className="text-red-500">{errors.subject.message}</small>
          )}
        </div>

        <div>
          <Textarea placeholder="Mensagem" rows={7} {...register("message")} />
          {errors.message && (
            <small className="text-red-500">{errors.message.message}</small>
          )}
        </div>

        <div className="text-end">
          <Button
            type="submit"
            className="w-full md:max-w-[250px]"
            disabled={isLoading}
          >
            Enviar Menssagem
            {isLoading && <LuLoader2 className="ml-2 animate-spin" size={20} />}
          </Button>
        </div>
      </form>
    </section>
  );
};

export default MessageSubmission;
