import React from 'react';

import { FormComponent } from './FormComponent';

export const MainContent = () => {

const fecha = '03';
const mes = 'NOVIEMBRE';
const hotel = 'Hotel Sonesta';
const ciudad = 'Pereira';

  return (
    <div>
        <div className="row">
            <div className="col-md-4">
               <div className="boxes_container_title">
                    <div className="box_one">
                        <h2>Descubra junto a los  <br />
                        expertos cómo recetar <br />
                        una alimentación real <br />
                        a sus pacientes.
                        
                         </h2>
                    </div>
                    <div className="box_twot">
                      <div className="city_hotel">
                          <h1> {ciudad } / { hotel }  </h1>
                      </div>
                        <div className="date">
                      <div className="day"> { fecha }</div> <div className="mes"><h2>DE</h2><h2>{ mes }</h2></div>
                        </div>
                    </div>
               </div>
            </div>
            <div className="col-md-8">
               
              <div className="image_box">
          <div className="box_form">
          <div className="registro_title">
                   <div className="cotent_title_registro">
                        <h2>Separe su cupo</h2>
                   </div>
                </div>
              <div className="container_inputs">
                        <FormComponent/>
                    </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}
