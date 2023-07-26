import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductCard from "../Componentes/ProductCard";
import "../App.css";
import products from "../Componentes/ProductList"; 

function Products() {
  return (
    <div>
      <Container className="content-container">
        <Row>
          <Col>
            <div className="text-container">
              <h1>Productos</h1> {/* Corregir el texto "Nuestos" a "Nuestros" */}
              <p>Te presentamos las mejores soluciones para ERP de tu empresa</p>
            </div>
          </Col>
        </Row>
        <Row>
          {/* Fila de productos */}
          {products.map((product) => (
            <Col key={product.id}>
              <ProductCard
                nombre={product.name} // Corregir el nombre de las propiedades
                precio={product.price} // Corregir el nombre de las propiedades
                imagen={product.image} // Corregir el nombre de las propiedades
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export { Products };
