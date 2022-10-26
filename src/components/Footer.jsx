import React from "react";
import Image from "../assets/images/logo.png";

export const Footer = () => {
  return (
    <div className="container_footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="text_footer">
              <h4>Aviso legal</h4>
              <p >
                Material exclusivo para el cuerpo médico Colombiano. Material
                sujeto a derechos de propiedad intelectual. Este material podría
                contener conceptos u opiniones que son responsabilidad de los
                autores y no comprometen las opiniones del laboratorio
                auspiciante. Algunos materiales pueden mencionar productos, por
                favor tenga en cuenta que la información de seguridad de los
                mismos puede cambiar, consulte la información vigente en la
                Dirección Médica de Boehringer Ingelheim S.A., Teléfono: (+601)
                319 91 00, e-mail: medfora.co@boehringer-ingelheim.com
                Dirección: Carrera 11 No. 84A-09 Piso 5, Bogotá D.C. Colombia.
                Código: PC-CO-103391.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="text_footer">
              <h4>Contacto</h4>
              <p className="info">
                Teléfono: (+601) 319 91 00 <br />
                e-mail: medfora.co@boehringer-ingelheim.com <br />
                Dirección: Carrera 11 No. 84A-09 Piso 5 <br />
                Bogotá D.C. Colombia <br />
                Boehringer Ingelheim S.A.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="terminos">
              <h4>Términos y condiciones</h4>
              <h4>Política de cookies</h4>
              <h4>Privacidad de datos</h4>
            </div>
          </div>
          <div className="col-md-12 mt-5 logo-boehringer">
            <img src={Image} alt="logo" />
          </div>
          <div className="col-md-12 d-flex justify-content-center mt-3">
            <span className="text-copyrigth">
              © 2010-2022 Boehringer Ingelheim GmbH Todos los derechos
              Reservados
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
