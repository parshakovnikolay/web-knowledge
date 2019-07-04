import React, {Component} from 'react';

class Feedback extends Component {

    submitForm = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        fetch('http://localhost:80', {
            method: 'POST',
            body: data
        })
    };

    render() {
        return (
            <form onSubmit={this.submitForm}>
                <h1>Форма обратной связи</h1>
                <div><input type="text" placeholder="Имя"/></div>
                <div><input type="phone" placeholder="Телефон"/></div>
                <input type="submit" value="Отправить"/>
            </form>
        )
    }
}

export default Feedback