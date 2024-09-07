import { Container, Form, BackgroundIMG2 } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Mail, LockKeyhole } from "lucide-react";
import { Link } from "react-router-dom";

export function Login() {
    return (
        <Container>        
        <Form>
          <h1>
           <span>Todo Experts</span>
          </h1>
          <p>Um jeito prático e simples de salvar suas tarefas do dia a dia</p>
          <span>Faça seu login</span>  
      
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
  
          <Button title="Enviar" />
  
          <p>
            Ainda não possui uma conta? <Link to={"/register"}>Registre-se agora</Link>
          </p>
        </Form>
        <BackgroundIMG2 />
      </Container>
    )
}