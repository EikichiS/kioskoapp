import React, {Component} from "react";

import VentaService from "../services/venta.service";

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ventas: []
        };
    }

    componentDidMount() {
        VentaService.getVentas().then(response => {
            this.setState({
                ventas: response.data
            })
        }, error => {
            this.setState({
                ventas:
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
                    <h3>Ventas</h3>
                </header>

                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Producto</th>
                            <th scope="col">Monto</th>
                            <th scope="col">Medio de Pago</th>
                            <th scope="col">Fecha</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Ver Detalle</th>
                        </tr>
                    </thead>
                    <tbody>
                    { this.state.ventas.map(({ idProducto, monto, medioPago, fecha, estado }) => (
                            <tr>
                            <td>{idProducto}</td>
                            <td>{monto}</td>
                            <td>{medioPago}</td>
                            <td>{fecha}</td>
                            <td>{estado}</td>
                        </tr>

                        )) }
                    </tbody>

                </table>
            </div>
        );
    }
}
