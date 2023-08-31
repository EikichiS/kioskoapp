import React, { Component } from "react";
import { withRouter } from '../common/with-router';
import ProductoService from "../services/productos.service"; // Asegúrate de importar ProductoService

class DetalleProducto extends Component {

    constructor(props) {
        super(props);

        this.state = {
            producto: {
                id: ""
            }
        };
    }

    componentDidMount() {
        const searchParams = new URLSearchParams(this.props.router.location.search);
        const id = searchParams.get('id');

        ProductoService.getProductoPorId(id).then(response => {
            this.setState({ producto: response.data });
        }).catch(error => {
            this.setState({
                producto: (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
            });
        });
    }

    render() {

        return (
            <div className="container">
                <header className="jumbotron">
                    <h3>Producto </h3>
                </header>
            </div>
        );
    }
}

export default withRouter(DetalleProducto);