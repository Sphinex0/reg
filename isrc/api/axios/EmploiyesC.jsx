import React from "react";
import axios from 'axios';

class EmployesC extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            tab: [],
            filtab: []
        };
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then((res) => {
                this.setState({ tab: res.data });
            });
    }

    chercher ()  {
        const filtab = this.state.tab.filter((t) => t.postId == this.state.id);
        this.setState({ filtab });
        console.log(filtab);
    }

    render() {
        return (
            <div>
                <label>Tapez un postId</label>
                <input type="number" onChange={(e) => this.setState({ id: e.target.value })} />
                <button onClick={() => this.chercher()}>Chercher</button>
            </div>
        );
    }
}

export default EmployesC;