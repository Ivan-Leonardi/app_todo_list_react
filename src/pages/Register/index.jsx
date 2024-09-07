import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { BackgroundIMG, Container, Form } from "./styles";
import { UserRound, Mail, LockKeyhole } from "lucide-react";

export function Register() {
  return (
    <Container>
      <BackgroundIMG />
      <Form>
        <h1>Seja bem vindo ao <span>Todo Experts</span></h1>
        <p>Um jeito prático e simples de salvar suas tarefas do dia a dia</p>
        <span>Crie sua conta!</span>

        <Input placeholder="Nome" type="text" icon={UserRound} />
        <Input placeholder="Email" type="text" icon={Mail} />
        <Input placeholder="Senha" type="text" icon={LockKeyhole} />

        <Button title="Enviar" />    

        <p>Já possui uma conta <span>Faça seu login</span></p>      
       
      </Form>
    </Container>
  );
}
