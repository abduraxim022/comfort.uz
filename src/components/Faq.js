import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTranslation } from "react-i18next";

export default function Faq() {
  const { t } = useTranslation();

  return (
    <div id="faq" className="faq-section">
      <div className="container">
        <p className="line"></p>
        <div className="faq-div">
          <div className="faq">
            <h1>{t("FAQ")}</h1>
          </div>
          <div className="faq-accordion">
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <h3>{t("washingDuration")}</h3>
              </AccordionSummary>
              <AccordionDetails>
                <p>{t("washingDurationAnswer")}</p>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <h3>{t("pricing")}</h3>
              </AccordionSummary>
              <AccordionDetails>
                <p>{t("pricingAnswer")}</p>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
              >
                <h3>{t("damageGuarantee")}</h3>
              </AccordionSummary>
              <AccordionDetails>
                <p>{t("damageGuaranteeAnswer")}</p>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4a-content"
                id="panel4a-header"
              >
                <h3>{t("cleaningProducts")}</h3>
              </AccordionSummary>
              <AccordionDetails>
                <p>{t("cleaningProductsAnswer")}</p>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel5a-content"
                id="panel5a-header"
              >
                <h3>{t("pickupDelivery")}</h3>
              </AccordionSummary>
              <AccordionDetails>
                <p>{t("pickupDeliveryAnswer")}</p>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel6a-content"
                id="panel6a-header"
              >
                <h3>{t("washAnyCarpet")}</h3>
              </AccordionSummary>
              <AccordionDetails>
                <p>{t("washAnyCarpetAnswer")}</p>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
