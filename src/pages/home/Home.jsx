import React from "react";

import { FaChurch, FaPhone, FaLocationArrow } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { BsPersonFill } from "react-icons/bs";

import {
  Container,
  Software,
  InfoIglesia,
  InfoGeneral,
  InfoMain,
  Panel,
} from "./Home.elements";

function Home() {
  return (
    <Container>
      <Software>
        <div>
          <FaChurch />
        </div>
        <h1>"Descripcion del software"</h1>
      </Software>
      <InfoMain>

        <InfoIglesia>
          <p>{"img_url"}</p>
          <p>Nombre_Iglesia</p>
          <p>
            <BsPersonFill />
            Pastor
          </p>
          <p>
            <FaPhone />
            Telefono
          </p>
          <p>
            <FiMail />
            email
          </p>
          <p>
            <FaLocationArrow />
            Ubicacion
          </p>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2322.164669337856!2d-58.38107186893116!3d-34.60323171431623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1sen!2sar!4v1657770078092!5m2!1sen!2sar"
              width="300"
              height="250"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </InfoIglesia>

        <Panel>
          <p>Personal: {10}</p>
          <p>Ministerios: {2}</p>
          <p>Familias: {2}</p>
        </Panel>
        
      </InfoMain>
      <InfoGeneral>info general</InfoGeneral>
    </Container>
  );
}

export default Home;
