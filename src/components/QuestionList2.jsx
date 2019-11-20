import React, { Component } from "react";

class Item extends Component {
    state = {
        listitems: ["Kinkku vai juusto", "Musta vai valkoinen", "Auto vai polkupyörä", "Javascript vai Java", "Superman or Batman"]
    };

    render() {
        return (
            <React.Fragment>
                <ul className="list-group-flush">
                    {this.state.listitems.map(listitem => (
                        <li className="list-group-item list-group-item">
                            {listitem}
                        </li>
                    ))}
                </ul>
            </React.Fragment>
        );
    }
}

export default Item;