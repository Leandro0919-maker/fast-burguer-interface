import { yupResolver } from '@hookform/resolvers/yup'
import { set, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {api} from '../../services/api.js';
import { Container } from './styles.js';
import Logo from '../../assets/Logo.png';
import { LeftContainer, Link, RightContainer, Title, Form, InputContainer } from './styles.js';
import { Button } from '../../components/Button';




export function Login() {

  const navigate = useNavigate();

  const schema = yup
.object({
  email: yup.string().email('Email inválido').required('Email é obrigatório'),
  password: yup.string().min(8, 'Senha deve ter pelo menos 8 caracteres').required('Senha é obrigatória'),
})
.required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  console.log(errors);
  
  const onSubmit = async (data) => {
    const { data: { token },
  } = await  toast.promise(
      api.post('/sessions', {
      email: data.email,
      password: data.password,
    }),
    {
      pending: 'verificando seus dados...',
      success: {
        render: () => {
          setTimeout(() => {
            navigate('/'); // Redireciona para a página inicial após o login bem-sucedido
          }, 2000);
          return 'Seja Bem-vindo 👌'; // Mensagem de sucesso
        },
      },
      error: 'Email ou senha incorretos 🤯'
    }
  );
    localStorage.setItem('token', token);
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  };

    
    
    

  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="Fast Burguer Logo" />
      </LeftContainer>
      <RightContainer>
        <Title>
          Olá, seja bem vindo ao <span>Fast Burguer!</span>
          <br />
          Acesse com seu <span>Login e senha</span>
        </Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label> Email </label>
            <input type="email" placeholder="Digite seu email" {...register('email')}/>
            <p>{errors?.email?.message}</p>
          </InputContainer>

          <InputContainer>
            <label> Senha </label>
            <input type="password" {...register('password')} placeholder="Digite sua senha"/>
            <p>{errors?.password?.message}</p>
          </InputContainer>
          <Button type="submit"> Entrar </Button>
        </Form>
        <p> Nao possui conta? <Link to="/cadastro"> Clique aqui</Link> </p>
      </RightContainer>
    </Container>
  );
}
