import React, { useState } from "react";

export const FormComponent = () => {
  const [specialidad, setSpecialidad] = useState("");
  const [communicasion, setCommunicasion] = useState("");
  const [checked, setChecked] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);

  const [valor, setValor] = useState({
    name: "anyi",
    last_name: "lozano",
    specialty_type: "pediatra",
    document: "1132301212",
    professional_card: "fdfd",
    phone: "3025784510",
    email: "arelozano210914@gmail.com",
    country: "colombia",
    select_perfil: specialidad,
    ips_name: "sanitas",
    position: "",
    assistance_type: "presencial",
    comunication: communicasion,
  });

  const handdleChange = (e) => {
    setValor({
      ...valor,
      ...communicasion,
      ...specialidad,
      [e.target.name]: e.target.value,
    });
    // console.log(setValor({...valor, [e.target.name]: e.target.value }));
    console.log(valor);
  };

  const handdleSubmit = async (e) => {
    console.log("enviando...");
    e.preventDefault();
    const body = { ...communicasion, ...specialidad, ...valor };
    console.log(body);
    // eslint-disable-next-line
    const resp_ = await fetch("http://apiboehringer.eml.com.co/api/datos", {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-type": "application/json" },
    });
  };

  return (
    <>
      <form onSubmit={handdleSubmit}>
        <div className="form-group">
          <input
            name="name"
            value={valor.name}
            onChange={handdleChange}
            type="text"
            placeholder="Nombres"
            className="form-c"
          />
          <input
            name="last_name"
            value={valor.last_name}
            onChange={handdleChange}
            type="text"
            placeholder="Apellidos"
            className="form-c"
          />
        </div>

        <div className="form-group">
          <input
            onChange={handdleChange}
            value={valor.document}
            name="document"
            type="text"
            placeholder="Cedula o ID"
            className="form-c"
          />
          <input
            name="professional_card"
            value={valor.professional_card}
            onChange={handdleChange}
            type="text"
            placeholder="Tarjeta Profesional"
            className="form-c"
          />
        </div>

        <div className="form-group">
          <input
            name="country"
            value={valor.country}
            onChange={handdleChange}
            type="text"
            placeholder="Pais"
            className="form-c"
          />

          <input
            name="phone"
            value={valor.phone}
            onChange={handdleChange}
            type="text"
            placeholder="Telefono / celular"
            className="form-c"
          />
        </div>
        {/* e=>setSpecialidad(e.target.value) */}

        <div className="form-group">
          <input
            name="email"
            value={valor.email}
            onChange={handdleChange}
            type="text"
            placeholder="Correco electronico"
            className="form-c"
          />
          <select
            name="select_perfil"
            value={setSpecialidad}
            onChange={handdleChange}
            className="form-c"
          >
            <option disabled selected>
              Seleccione el perfil
            </option>
            <option>Medico</option>
            <option>Artista</option>
            <option>Desarrollador</option>
            <option>Diseñador</option>
          </select>
        </div>

        <div className="form-group">
          <input
            name="ips_name"
            value={valor.ips_name}
            onChange={handdleChange}
            type="text"
            placeholder="IPS donde labora"
            className="form-c"
          />

          <input
            name="specialty_type"
            value={valor.specialty_type}
            onChange={handdleChange}
            type="text"
            placeholder="Cargo"
            className="form-c"
          />
        </div>

        <div className="form-wrapper">
          <select
            name="comunication"
            value={communicasion}
            onChange={handdleChange}
            className="form-c"
          >
            <option disabled selected value={setCommunicasion}>
              Como se entero del evento
            </option>
            <option>via web</option>
            <option>Amigos</option>
          </select>
        </div>

        <div className="conten_obligatorio">
          <br />
          <br />
          <div className="content_title_obligatorio">
            <div className="row">
              <div className="col-md-1 col-sm-1">
                <div className="container-checkbox" onClick={() => setChecked(!checked)}>
                  {checked && (
                    <img
                      alt=""
                      src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKIHdpZHRoPSIzNDRwdCIgaGVpZ2h0PSIzNDRwdCIgdmlld0JveD0iMCAwIDM0NC4wMDAwMDAgMzQ0LjAwMDAwMCIKIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiPgoKPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsMzQ0LjAwMDAwMCkgc2NhbGUoMC4xMDAwMDAsLTAuMTAwMDAwKSIKZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSJub25lIj4KPHBhdGggZD0iTTE5MTggMTk1OCBsLTM3NiAtMzgzIC0xOTkgMTk4IGMtMTcyIDE3MCAtMjAzIDE5NyAtMjMwIDE5NyAtNDYgMAotNzcgLTMwIC03NyAtNzQgMCAtMzUgMTMgLTUwIDIzNSAtMjcyIDIyMCAtMjE5IDIzNyAtMjM0IDI3MSAtMjM0IDM0IDAgNTYgMjAKNDQzIDQxMyAyMjQgMjI2IDQxMSA0MjIgNDE2IDQzNCAxMCAyOCAtNyA4MCAtMzEgOTMgLTU2IDMwIC01NSAzMSAtNDUyIC0zNzJ6Ii8+CjwvZz4KPC9zdmc+Cg=="
                    />
                  )}
                </div>
                <input
                  id="checkbox"
                  className="checkbox"
                  type="checkbox"
                  name=""
                  checked={checked}
                  style={{display: "none"}}
                />
              </div>
              <div className="col-md-11 col-sm-11">
                <div className="title_obligatorio_bajo">
                  <p
                    onClick={() => setChecked(!checked)}
                  >
                    Autorizo expresamente a Boehringer Ingelheim S.A., en
                    calidad de responsable del tratamiento, paraque por sí mismo
                    o en asocio con terceros, realice el tratamiento de los
                    datos personales aquí suministrados con las finalidades
                    precisadas en el siguiente aviso de privacidad. Para más
                    información consulte nuestra “Política de Tratamiento de
                    Datos Personales”.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="content_title_obligatorio">
            <div className="row">
            <div className="col-md-1 col-sm-1">
                <div className="container-checkbox" onClick={() => setChecked1(!checked1)}>
                  {checked1 && (
                    <img
                      alt=""
                      src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKIHdpZHRoPSIzNDRwdCIgaGVpZ2h0PSIzNDRwdCIgdmlld0JveD0iMCAwIDM0NC4wMDAwMDAgMzQ0LjAwMDAwMCIKIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiPgoKPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsMzQ0LjAwMDAwMCkgc2NhbGUoMC4xMDAwMDAsLTAuMTAwMDAwKSIKZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSJub25lIj4KPHBhdGggZD0iTTE5MTggMTk1OCBsLTM3NiAtMzgzIC0xOTkgMTk4IGMtMTcyIDE3MCAtMjAzIDE5NyAtMjMwIDE5NyAtNDYgMAotNzcgLTMwIC03NyAtNzQgMCAtMzUgMTMgLTUwIDIzNSAtMjcyIDIyMCAtMjE5IDIzNyAtMjM0IDI3MSAtMjM0IDM0IDAgNTYgMjAKNDQzIDQxMyAyMjQgMjI2IDQxMSA0MjIgNDE2IDQzNCAxMCAyOCAtNyA4MCAtMzEgOTMgLTU2IDMwIC01NSAzMSAtNDUyIC0zNzJ6Ii8+CjwvZz4KPC9zdmc+Cg=="
                    />
                  )}
                </div>
                <input
                  id="checkbox"
                  className="checkbox"
                  type="checkbox"
                  name=""
                  checked={checked1}
                  style={{display: "none"}}
                />
              </div>
              <div className="col-md-11 col-sm-11">
                <div className="title_obligatorio_bajo">
                  <p
                  onClick={() => setChecked1(!checked1)}
                  >
                    Declaro, así mismo, haber leído y aceptado los Términos y
                    Condiciones de este sitio web.T&C.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="content_title_obligatorio">
            <div className="row">
            <div className="col-md-1 col-sm-1">
                <div className="container-checkbox" onClick={() => setChecked2(!checked2)}>
                  {checked2 && (
                    <img
                      alt=""
                      src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKIHdpZHRoPSIzNDRwdCIgaGVpZ2h0PSIzNDRwdCIgdmlld0JveD0iMCAwIDM0NC4wMDAwMDAgMzQ0LjAwMDAwMCIKIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiPgoKPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsMzQ0LjAwMDAwMCkgc2NhbGUoMC4xMDAwMDAsLTAuMTAwMDAwKSIKZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSJub25lIj4KPHBhdGggZD0iTTE5MTggMTk1OCBsLTM3NiAtMzgzIC0xOTkgMTk4IGMtMTcyIDE3MCAtMjAzIDE5NyAtMjMwIDE5NyAtNDYgMAotNzcgLTMwIC03NyAtNzQgMCAtMzUgMTMgLTUwIDIzNSAtMjcyIDIyMCAtMjE5IDIzNyAtMjM0IDI3MSAtMjM0IDM0IDAgNTYgMjAKNDQzIDQxMyAyMjQgMjI2IDQxMSA0MjIgNDE2IDQzNCAxMCAyOCAtNyA4MCAtMzEgOTMgLTU2IDMwIC01NSAzMSAtNDUyIC0zNzJ6Ii8+CjwvZz4KPC9zdmc+Cg=="
                    />
                  )}
                </div>
                <input
                  id="checkbox"
                  className="checkbox"
                  type="checkbox"
                  name=""
                  checked={checked2}
                  style={{display: "none"}}
                />
              </div>
              <div className="col-md-11 col-sm-11">
                <div className="title_obligatorio_bajo">
                  <p onClick={() => setChecked1(!checked2)}>Acepto el uso de mi imagen. Más información aquí.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text_oli">
            <p>* Campos obligatorios</p>
          </div>
        </div>
        <div className="button">
          <button onSubmit={handdleSubmit}>Enviar</button>
        </div>
      </form>
    </>
  );
};
