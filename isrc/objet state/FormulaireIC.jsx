import React from "react";

class FormulaireIC extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nom: '',
      password: '',
      dateNaissance: '',
      ville: 'Choisir une ville',
      genre: '',
      loisirs: [],
    };
  }

  Loisirs = (ev) => {
    const { loisirs } = this.state;
    if (!loisirs.includes(ev.target.value)) {
      this.setState({
        loisirs: [...loisirs, ev.target.value],
      });
    } else {
      this.setState({
        loisirs: loisirs.filter((l) => l !== ev.target.value),
      });
    }
  };

  inscrire = (ev) => {
    ev.preventDefault();
    const { nom, password, dateNaissance, ville, genre, loisirs } = this.state;
    alert(`${nom}, ${password}, ${dateNaissance}, ${ville}, ${genre}, ${loisirs}`);
  };

  handleInputChange = (ev, fieldName) => {
    this.setState({
      [fieldName]: ev.target.value,
    });
  };

  render() {
    const { nom, password, dateNaissance, ville, genre, loisirs } = this.state;

    return (
      <div>
        <h1>Formulaire d'inscription</h1>
        <form onSubmit={this.inscrire}>
          <label>Nom</label>
          <input type="text" name="nom" onChange={(ev) => this.handleInputChange(ev, 'nom')} /><br />

          <label>Mot de passe</label>
          <input type="password" name="password" onChange={(ev) => this.handleInputChange(ev, 'password')} /><br />

          <label>Date de naissance</label>
          <input type="date" name="dateNaissance" onChange={(ev) => this.handleInputChange(ev, 'dateNaissance')} /><br />

          <label>Ville</label>
          <select name="ville" value={ville} onChange={(ev) => this.handleInputChange(ev, 'ville')}>
            <option>Choisir une ville</option>
            <option value="agadir">Agadir</option>
            <option value="tiznit">Tiznit</option>
          </select><br />

          <label>Genre</label>
          <input type="radio" name="genre" value="homme" onChange={(ev) => this.handleInputChange(ev, 'genre')} />homme
          <input type="radio" name="genre" value="femme" onChange={(ev) => this.handleInputChange(ev, 'genre')} />femme<br />

          <label>Loisirs</label>
          <input type="checkbox" name="loisirs" value="sport" onChange={(ev) => this.Loisirs(ev)} />sport
          <input type="checkbox" name="loisirs" value="lecture" onChange={(ev) => this.Loisirs(ev)} />lecture
          <input type="checkbox" name="loisirs" value="musique" onChange={(ev) => this.Loisirs(ev)} />musique<br />

          <input type="submit" value="S'inscrire" />
        </form>
      </div>
    );
  }
}

export default FormulaireIC;