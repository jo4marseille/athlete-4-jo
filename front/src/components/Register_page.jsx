import React from 'react';
import Header from './Header';

const Register_page = () => {
    return (
        <>
          <Header/>   
            <div class="form_wrapper">
              <div class="form_container">
                <div class="title_container">
                  <h2>S'enregistrer</h2>
                </div>
                <div class="row clearfix">
                  <div class="">
                    <form>
                      <div class="input_field"> <span><i aria-hidden="true" class="fa fa-envelope"></i></span>
                        <input type="email" name="email" placeholder="Email" />
                      </div>
                      <div class="input_field"> <span><i aria-hidden="true" class="fa fa-lock"></i></span>
                        <input type="password" name="password" placeholder="Mot de passe" />
                      </div>
                      <div class="input_field"> <span><i aria-hidden="true" class="fa fa-lock"></i></span>
                        <input type="password" name="password" placeholder="Confirmez le mot de passe" />
                      </div>
                     <input class="button" type="submit" value="Valider" />
                    </form>
                  </div>
                </div>
              </div>
            </div>

        </>
    );
};

export default Register_page;
