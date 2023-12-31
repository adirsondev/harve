import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ComponenteCarousel from "../Componentes/ComponenteCarousel";
import ProductCard from "../Componentes/ProductCard";
import "../App.css";
import products from "../Componentes/ProductList"; 

function Home() {
  return (
    <div>
      {/* Carrusel */}
      <ComponenteCarousel />
      {/* Título y descripción */}
      <Container className="content-container">
        <Row>
          <Col>
            <div className="text-container"> 
              <h1>Nuestros productos destacados</h1>
              <p>Te presentamos las mejores soluciones para ERP de tu empresa</p>
            </div> 
          </Col>
        </Row>
        <Row>
          {/* Fila de productos */}
          {products.map((product) => (
            <Col key={product.id}>
              <ProductCard
                nombre={product.name}
                precio={product.price}
                imagen={product.image}
              />
            </Col>
          ))}
        </Row>
      </Container>  
    </div>
  );
}

export { Home };