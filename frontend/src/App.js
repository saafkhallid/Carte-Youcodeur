import React, { Component } from 'react';
import "./App.css";


class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Create Accounte</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="block">
            <label htmlFor="Matricule">Matricule</label>
              <input
                className=""
                placeholder="Matricule"
                type="text"
                name="Matricule"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div className="block">
            <label htmlFor="firstName">Nom</label>
              <input
                className=""
                placeholder="Nom"
                type="text"
                name="firstName"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div className="block">
            <label htmlFor="firstName">Prénom</label>
              <input
                className=""
                placeholder="Prénom"
                type="text"
                name="firstName"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div className="block">
            <label htmlFor="firstName">Téléphone</label>
              <input
                className=""
                placeholder="Téléphone"
                type="text"
                name="firstName"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div className="block">
            <label htmlFor="firstName"> Email</label>
              <input
                className=""
                placeholder="Email"
                type="text"
                name="firstName"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div className="block">
            <label htmlFor="firstName"> Adresse</label>
              <input
                className=""
                placeholder="Adresse"
                type="text"
                name="firstName"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div className="block">
            <label htmlFor="firstName"> login</label>
              <input
                className=""
                placeholder=" login "
                type="text"
                name="firstName"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div className="block">
            <label htmlFor="firstName"> mots de passe</label>
              <input
                className=""
                placeholder=" mots de passe"
                type="text"
                name="firstName"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            


          </form>

        </div>
        
      </div>
    );
  }
}

export default App;