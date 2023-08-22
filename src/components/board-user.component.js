import React, { Component } from "react";

import UserService from "../services/user.service";
import EventBus from "../common/EventBus";
import ProductoService from "../services/productos.service";

export default class BoardUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
      productos: []
    };
  }

  componentDidMount() {
    UserService.getUserBoard().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });

        if (error.response && error.response.status === 401) {
          EventBus.dispatch("logout");
        }
      }
    );

    ProductoService.getProductos().then(response => {
      this.setState({
        productos: response.data
      })
  }, error => {
      this.setState({
        productos:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });
  });
  }

  render() {
    return (
      <div className="container">
      <header className="jumbotron">
          <h3>Productos</h3>
      </header>

      <table class="table">
          <thead>
              <tr>
                  <th scope="col">Nombre</th>
                  <th scope="col">Precio</th>
                  <th scope="col">Stock</th>
                  <th scope="col">Categoria</th>
                  <th scope="col">descripcion</th>
                  <th scope="col">imagen</th>
                  <th scope="col">Ver Detalle</th>
              </tr>
          </thead>
          <tbody>
          { this.state.productos.map(({ nombre, precio, stock, categoria, descripcion, imagen }) => (
                  <tr>
                  <td>{nombre}</td>
                  <td>{precio}</td>
                  <td>{stock}</td>
                  <td>{categoria}</td>
                  <td>{descripcion}</td>
                  <td>{imagen}</td>
              </tr>

              )) }
          </tbody>

      </table>
  </div>
    );
  }
}
