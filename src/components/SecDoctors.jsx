import React from 'react'

export const SecDoctors = () => {

    const doctorOne = 'Dr. Oscar Rosero'
    const doctorTwo = 'Dr. Carlos Andrés Zapata';

  return (
    <div className='row'>
        <div className="col-md-12">
            <div className="doctor_one_container">
               <div className="content_one_dc">
               <div className="row">
                    <div className="col-md-8">
                        <div className="doctor_one_title">
                            <h1> { doctorOne } </h1>
                            <p>Soy médico endocrinólogo graduado de la Universidad
                            Militar de Colombia. <br /> Miembro de la Asociación
                            Colombiana de Endocrinología. Experto en estilos <br /> de
                            vida y fitness. Autor de numerosas publicaciones en <br />
                            temas de metabolismo. Cansado de la distancia entre
                            la ciencia y las personas reales. Mi labor es enseñar a 
                            comer de forma real e inteligente teniendo en cuenta el
                            lenguaje de nuestras hormonas.</p> <br /><br />
                            <p>Creador de El Método Balance de perdida de peso y de <br />
                                la Academia Digital Comida Real</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="doctor_one_image">

                        </div>
                    </div>
                </div>
               </div>
            </div>
        </div>
        <div className="col-md-12">
        <div className="doctor_two_container">
               <div className="content_two_dc">
               <div className="row">
                    <div className="col-md-4">
                    <div className="doctor_two_image"></div>
                    </div>
                    <div className="col-md-8">
                    <div className="doctor_one_title">
                            <h1> { doctorTwo } </h1>
                            <p>Médico especialista en medicina interna de la Universidad
                                de la Sabana de Bogotá con estudios de profundización
                                y preparación en hábitos saludables, como maestrías en
                                nutrición humana preventiva y en patologías crónicas.
                                El Dr. Zapata es certificado y reconocido por la Sociedad
                                de Cardiología Colombiana como experto en hipertensión
                                arterial; además, la Universidad del Bosque lo certifica
                                como un experto en lípidos y enfermedades
                                asociadas a esta tipología.</p>
                        </div>
                    </div>
                </div>
               </div>
            </div>
        </div>
    </div>
  )
}
