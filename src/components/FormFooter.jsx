import React from 'react'
import { FormComponent } from './FormComponent'

export const FormFooter = () => {
  return (
    <div className='footer-form'>
        <div className="row">
            <div className="col-md">
                <div className="footer_form">
                    <div className="title_form_footer">
                        <h1>SEPARE SU CUPO</h1>
                    </div>
                    <div className="container_inputs_input_footer">
                        <FormComponent/>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}
