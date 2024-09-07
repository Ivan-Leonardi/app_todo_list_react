import { useState } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { BackgroundIMG, Container, Form } from "./styles";
import { UserRound, Mail, LockKeyhole } from "lucide-react";
import { Link } from "react-router-dom";
import { api } from "../../services/api";

export function Register() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleRegister() {    
    if (!firstName || !email || !password) {
      return alert("Todos os campos são obrigatórios!")
    }

    api.post("/users", {
      firstName,
      email,
      password,
    }).then(() => {
      alert("Usuário cadatrado com sucesso!");
    }).catch((error) => {
      if(error.response) {
        alert(error.response.data.message);
      } else {
        alert("Erro ao realizar registro")
      }
    })
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
        onChange={e => setFirstName(e.target.value)} 
        />
        <Input 
        placeholder="Email" 
        type="text" 
        icon={Mail}
        onChange={e => setEmail(e.target.value)} 
        />
        <Input 
        placeholder="Senha" 
        type="password" 
        icon={LockKeyhole} 
        onChange={e => setPassword(e.target.value)}
        />

        <Button 
        title="Enviar" 
        onClick={handleRegister}
        />

        <p>
          Já possui uma conta? <Link to={"/"}>Faça seu login</Link>
        </p>
      </Form>
    </Container>
  );
}
