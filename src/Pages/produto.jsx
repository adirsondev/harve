import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CardProduto } from "../Componentes/CardProduto";

function Produto() {
  return (
    <Container>
      <Row>
        <Col>Produto</Col>
        <CardProduto 
        nome={"Meu Card"}
        preco={1000}
        linkImagem={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtvI2RJIZ_paK_Lsc9_33Hrm8ZW5ey5CkXLg&usqp=CAU"}
        descricao={"Esta es una descripcion del producto"}
        />
      </Row>
    </Container>
  );
}

export { Produto };