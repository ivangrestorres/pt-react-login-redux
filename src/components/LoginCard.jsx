import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { useForm } from "../hooks/useForm";
import { useAuth } from "../hooks/useAuth";

export const LoginCard = () => {
    const [values, handleOnChange] = useForm({
        email: "kminchelle",
        password: "0lelplR",
    });

    const { login } = useAuth();

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        await login(values.email, values.password);
    };

    return (
        <Card>
            <Card.Header>
                <h6>Iniciar sesion</h6>
            </Card.Header>
            <Card.Body>
                <Form onSubmit={handleOnSubmit}>
                    <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Label>Usuario</Form.Label>
                        <Form.Control
                            type="name"
                            name="email"
                            placeholder="Escribe tu usuario..."
                            onChange={handleOnChange}
                            value={values.email}
                        />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={handleOnChange}
                            value={values.password}
                        />
                    </Form.Group>
                    <div className="text-center">
                        <Button variant="primary" type="submit">
                            Iniciar sesión
                        </Button>
                    </div>
                </Form>
            </Card.Body>
        </Card>
    );
};
