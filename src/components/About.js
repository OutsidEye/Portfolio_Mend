import React from 'react';

class About extends React.Component {
  render() {
    return (
      <div className="about__banner">
        <div className="logo__instagram"></div>
        <div className="logo__linkedin"></div>
        <div className="about__container">
          <h2 className="about__title">À propos</h2>
          <div className="about__picture"></div>
          <p className="about__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris scelerisque, diam vel accumsan fermentum, massa elit semper magna, non interdum odio augue porttitor nisl. Morbi dictum blandit ornare. Vestibulum varius dapibus lacus non dictum.
          </p>
        </div>

        <div className="contact__container">
          <h2 className="contact__title">Contact</h2>

          <form>
            <div className="info__box">
              <div className="info__circle">
                <p className="info__icon">i</p>
              </div>
              <p className="info__label">Informations personnelles</p>
            </div>

            <div className="input__box">
              <input type="text" placeholder="Prenom" className="your__firstName" />
              <input type="text" placeholder="Nom" className="your__lastName" />
              <input type="email" placeholder="Email" className="your__email" />

          <select className="contact__motif">
              <option className="default__option" default>Votre projet</option>
              <option value="Photographie">Photographie</option>
              <option value="Création numérique">Création numérique</option>
              <option value="Autre">Autre</option>
            </select>

            <textarea name="" id="" cols="30" rows="4" placeholder="Informations complementaires" className="other__informations"></textarea>
            <button type="submit" className="submit__informations">Envoyer</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default About;
