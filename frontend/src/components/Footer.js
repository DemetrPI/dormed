import React from "react";
import "../../static/css/custom.css";
import { Row, Col } from "reactstrap";
import { Instagram, Twitter, Facebook } from "react-bootstrap-icons";
import { Trans, useTranslation } from "react-i18next";
import dormedLogo from "../../static/images/dormed-logo.png";


function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="py-2">
      <hr className="border border-warning border-1" />
      <Row lg="5" sm="2" xs="1">
        <Col className="text-center">
          <h5>
            <Trans i18nKey="address">Adres</Trans>
          </h5>
          <ul className="list-unstyled text-small">
            <li className="pulse">
              <Trans i18nKey="street">ul. Newstreet 5</Trans>
            </li>
            <li className="pulse">
              <Trans i18nKey="city">28-100 My city</Trans>
            </li>
            <li>
              <a className="pulse" href="mailto:email@gmail.com">
                email@gmail.com
              </a>
            </li>
          </ul>
        </Col>
        <Col className="text-center">
          <h5>{t("Recepcja")}</h5>
          <ul className="list-unstyled text-small">
            <li></li>
            <li>
              <a className="pulse" href="tel:+111 11 11 11">
              111 11 11 11
              </a>
            </li>
            <li>
              <a className="pulse" href="tel:+111 11 11 11">
              111 11 11 11
              </a>
            </li>
            <li>
              <a className="pulse" href="tel:+111 11 11 11">
              111 11 11 11
              </a>
            </li>
          </ul>
        </Col>
        <Col className="text-center">
          <h5>{t("Klinika")}</h5>
          <ul className="list-unstyled text-small">
            <li>
              <a className="pulse" href="tel:+111 11 11 11">
              111 11 11 11
              </a>
            </li>
            <li>
              <a className="pulse" href="tel:+111 11 11 11">
              111 11 11 11
              </a>
            </li>
            <li>
              <a className="pulse" href="tel:+111 11 11 11">
              111 11 11 11
              </a>
            </li>
          </ul>
        </Col>
        <Col className="text-center">
          <h5>{t("Dane")}</h5>
          <ul className="list-unstyled text-small">
            <li className="pulse">NIP: 111 11 11 11</li>
            <li className="pulse">Regon: 292668013</li>
            <li className="pulse">mBank</li>
            <li className="pulse">1111 1111 1111 1111 1111 111 111</li>
          </ul>
        </Col>
        <Col className="text-center col-sm-12">
          <h5>{t("Socials")}</h5>
          <ul className="list-unstyled socials">
            <li className="pulse">
              <a href="#">
                <Instagram size={24} />
              </a>
            </li>
            <li className="pulse">
              <a href="#">
                <Twitter size={24} />
              </a>
            </li>
            <li className="pulse">
              <a href="#">
                <Facebook size={24} />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
      <hr className="border border-warning border-1" />
      <Row lg="2" sm="2" xs="1">
      <Col>
          <img src={dormedLogo} className="footerLogo rotate" height={48} />
        </Col>
        <Col>
         <p>© 2023 Dormed</p>
        </Col>
      </Row>
    </footer>
  );
}

export default Footer;
