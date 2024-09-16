import { useState } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { BackgroundIMG, Container, Form } from "./styles";
import { UserRound, Mail, LockKeyhole } from "lucide-react";
import { useNavigate, Link } from "react-router-dom"
import { api } from "../../services/api";
import * as yup from "yup";

export function Register() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const schemaRegister = yup.object().shape({
    firstName: yup
      .string()
      .min(3, "O nome deve conter pelo menos 3 caracteres")
      .required("O nome é obrigatório"),
    email: yup
      .string()
      .email("Insira um email válido")
      .required("Email obrigatório"),
    password: yup
      .string()
      .min(6, "A senha deve conter pelo menos 6 caracteres")
      .required("Senha obrigatória"),
  });

  async function handleRegister() {
    const data = {
      firstName,
      email,
      password,
    };

    try {
      await schemaRegister.validate(data);

      await api
        .post("/users", {
          firstName,
          email,
          password,
        })
        .then(() => {
          alert("Usuário cadatrado com sucesso!");

          navigate("/");

          setFirstName("");
          setEmail("");
          setPassword("");
        });
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        alert(error.errors);
      } else {
        alert("Erro ao realizar registro");
      }
    }
  }

  return (
    <Container>
      <BackgroundIMG />
      <Form>
        <h1>
          Seja bem vindo ao <span>Todo Experts</span>
        </h1>
        <p>Um jeito prático e simples de salvar suas tarefas do dia a dia</p>
        <span>Crie sua conta!</span>

        <Input
          placeholder="Nome"
          type="text"
          icon={UserRound}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <Input
          placeholder="Email"
          type="text"
          icon={Mail}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha"
          type="password"
          icon={LockKeyhole}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button title="Enviar" onClick={handleRegister} />

        <p>
          Já possui uma conta? <Link to={"/"}>Faça seu login</Link>
        </p>
      </Form>
    </Container>
  );
}
