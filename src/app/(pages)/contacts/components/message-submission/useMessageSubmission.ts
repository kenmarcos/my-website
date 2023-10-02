import { useState } from "react";
import { useForm } from "react-hook-form";

import { useToast } from "components/ui/use-toast";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(1, "*Nome é obrigatório"),
  email: z
    .string()
    .min(1, "*E-mail é obrigatório")
    .email({ message: "*Digite um e-mail válido" }),
  subject: z.string().min(1, "*Assunto é obrigatório"),
  message: z.string().min(1, "*Mensagem é obrigatória"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export const useMessageSubmission = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({ resolver: zodResolver(contactFormSchema) });

  const handleFormSubmit = async (data: ContactFormData) => {
    setIsLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`response status: ${response.status}`);
      }

      const responseData = await response.json();
      console.log(responseData);
      toast({
        title: "Mensagem enviada com sucesso!",
        className: "bg-green-600 text-white-primary",
      });
    } catch (error) {
      toast({
        title: "Erro ao enviar mensagem",
        variant: "destructive",
      });
      console.log(error);
    } finally {
      setIsLoading(false);
    }

    reset();
  };

  return {
    handleSubmit,
    handleFormSubmit,
    register,
    errors,
    isLoading,
  };
};
