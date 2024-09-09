import { useState } from "react";
import { Container, Form, BackgroundIMG2 } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Mail, LockKeyhole } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loginUser } = useAuth();
  const navigate = useNavigate();

  async function handleLoginUser() {
    await loginUser({ email, password });
    navigate("/dashboard");
  }
  return (
    <Container>
      <Form>
        <h1>
          <span>Todo Experts</span>
        </h1>
        <p>Um jeito prático e simples de salvar suas tarefas do dia a dia</p>

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

        <Button title="Entrar" onClick={handleLoginUser} />

        <p>
          Ainda não possui uma conta?
          <Link to={"/register"}>Registre-se agora</Link>
        </p>
      </Form>
      <BackgroundIMG2 />
    </Container>
  );
}
