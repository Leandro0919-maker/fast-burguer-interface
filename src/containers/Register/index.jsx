import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { api } from '../../services/api.js';
import { Container } from './styles.js';
import Logo from '../../assets/Logo.png';
import { LeftContainer, Link, RightContainer, Title, Form, InputContainer } from './styles.js';
import { Button } from '../../components/Button';

export function Register() {

const navigate = useNavigate();

  const schema = yup
    .object({
      name: yup.string().required('Nome é obrigatório'),
      email: yup.string().email('Email inválido').required('Email é obrigatório'),
      password: yup.string().min(8, 'Senha deve ter pelo menos 8 caracteres').required('Senha é obrigatória'),
      confirmPassword: yup.string()
        .oneOf([yup.ref('password')], 'As senhas devem corresponder')
        .required('Confirmação de senha é obrigatória'),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // 1. Defina a função onSubmit no escopo principal do componente
  const onSubmit = async (data) => {
    // 2. Coloque o try...catch AQUI DENTRO, envolvendo a chamada da API
    try {
      const { status } = await api.post(
        '/users',
        {
          name: data.name,
          email: data.email,
          password: data.password,
        },
        {
          validateStatus: () => true,
        }
      );

      if (status === 200 || status === 201) {
        setTimeout(() => {
          navigate('/login'); // Redireciona para a página de login após o cadastro bem-sucedido
        }, 2000);
        toast.success('Conta criada com sucesso!');
      } else if (status === 400) { // Exemplo: status para email já existente
        toast.error('Este e-mail já está em uso.');
      } else {
        throw new Error(); // Força a ida para o bloco catch
      }
    } catch (error) {
      toast.error("😓 Falha no sistema, tente novamente.");
    }
  };

  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="Fast Burguer Logo" />
      </LeftContainer>
      <RightContainer>
        <Title>Criar Conta</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label> Nome </label>
            {/* O tipo correto para texto é 'text' e não 'texto' */}
            <input type="text" placeholder="Digite seu nome" {...register('name')} />
            <p>{errors?.name?.message}</p>
          </InputContainer>

          <InputContainer>
            <label> Email </label>
            <input type="email" placeholder="Digite seu email" {...register('email')} />
            <p>{errors?.email?.message}</p>
          </InputContainer>

          <InputContainer>
            <label> Senha </label>
            <input type="password" {...register('password')} placeholder="Digite sua senha" />
            <p>{errors?.password?.message}</p>
          </InputContainer>

          <InputContainer>
            <label> Confirmar Senha </label>
            <input type="password" {...register('confirmPassword')} placeholder="Confirme sua senha" />
            <p>{errors?.confirmPassword?.message}</p>
          </InputContainer>

          <Button type="submit">Criar Conta</Button>
        </Form>
        <p> Ja possui conta? <Link to="/login"> Clique aqui</Link> </p>
      </RightContainer>
    </Container>
  );
}