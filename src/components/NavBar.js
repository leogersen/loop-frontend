import React, { Component } from 'react';
import { APP_NAME } from '../constants';
import NavBarItem from './NavBarItem';


class NavBar extends Component {

    constructor(props) {
        super(props);

        this.state = {

            items: [
                { name: "Listar Tarefas", href: "/", active: false },
                { name: "Nova Tarefa", href: "/form", active: false },
            ]
        }

        this.onClickHandler = this.onClickHandler.bind(this);

    }
    onClickHandler(itemClicked) {
        const items = [...this.state.items];

        items.forEach(item => {
            if (item.name === itemClicked.name) {
                item.active = true;
            } else {
                item.active = false;
            }

            this.setState({ items });


        })



    }

    render() {
        return (
            <div>

                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">{APP_NAME}</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">

                                {this.state.items.map(

                                    i => <NavBarItem
                                        key={i.name}
                                        item={i}
                                        onClick={this.onClickHandler} />)}

                            </div>

                        </div>
                    </div>
                </nav>

            </div>
        );
    }
}

export default NavBar;