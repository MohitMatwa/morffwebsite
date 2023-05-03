import logo from "./logo.svg";
import "./App.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Chip } from "@mui/material";

function App() {
  const [value, setValue] = React.useState("1");
  const [datE, setDatE] = useState();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    let currentTimestamp = Date.now()
    console.log(currentTimestamp); // get current timestamp
    let date = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(currentTimestamp)
    setDatE(date);
  }, [])



  return (
    <div className="App">
      <div className="top">
        <h3>Mohit</h3>
        <p>Nunc nulla adipiscing volutpat tortor sed dui maecenas sed purus.</p>
      </div>
      <div className="tab_motion">
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Status" value="1" />
              <Tab label="Payments" value="2" />
              <Tab label="Overview" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">Status</TabPanel>
          <TabPanel value="2">
            <div className="tab_motion_C">
              <h2 style={{ textAlign: "left", marginLeft: "1rem" }}>
                Payment and Disbursement Notes
              </h2>
              <div className="tab_motion_C1">
                <Grid container spacing={2}>
                  <Grid item xs={2} id="gridItem">
                    <p className="griditemP">
                      <div
                        style={{ textAlign: "left", alignItems: "left" }}
                        className="griditemDiv"
                      >
                        <span
                          style={{
                            fontSize: "1rem",
                            textAlign: "left",
                            alignItems: "left",
                          }}
                        >
                          Payment Date
                        </span>
                        <span>{datE}</span>
                      </div>
                    </p>
                  </Grid>
                  <Grid item xs={2} id="gridItem">
                    <p className="griditemP">
                      <div
                        style={{ textAlign: "left", alignItems: "left" }}
                        className="griditemDiv"
                      >
                        <span
                          style={{
                            fontSize: "1rem",
                            textAlign: "left",
                            alignItems: "left",
                          }}
                        >
                          Amount
                        </span>
                        <span>INR 12,345</span>
                      </div>
                    </p>
                  </Grid>
                  <Grid item xs={5} id="gridItem">
                    <p className="griditemP">
                      <div
                        style={{ textAlign: "left", alignItems: "left" }}
                        className="griditemDiv"
                      >
                        <span
                          style={{
                            fontSize: "1rem",
                            textAlign: "left",
                            alignItems: "left",
                          }}
                        >
                          Items
                        </span>
                        <span>Moodboard design, month 1 retainer costs</span>
                      </div>
                    </p>
                  </Grid>
                  <Grid item xs={3} id="gridItem">
                    <p className="griditemP">
                      <div
                        style={{ textAlign: "left", alignItems: "left" }}
                        className="griditemDiv"
                      >
                        <span
                          style={{
                            fontSize: "1rem",
                            textAlign: "left",
                            alignItems: "left",
                          }}
                        >
                          Disbursement report (click to see)
                        </span>
                        <span>
                          <a href="#">MFDN-12345678</a>
                        </span>
                      </div>
                    </p>
                  </Grid>
                </Grid>
              </div>
              <h3 style={{ textAlign: "left", marginLeft: "1rem" }}>
                Invoices
              </h3>
              <p
                style={{ textAlign: "left", marginLeft: "1rem" }}
                id="Invoices_D"
              >
                Proforma invoice and Invoice are sent to the client on your
                behalf automatically
              </p>
              <div className="next" id="next">
                <div
                  className="next_T"
                  style={{
                    borderBottom: "solid #E2E2E2 1px",
                    paddingBottom: "25px",
                  }}
                >
                  <Grid container columnSpacing={7}>
                    <Grid item xs={2} id="gridItem">
                      <p className="griditemP">
                        <div
                          style={{ textAlign: "left", alignItems: "left" }}
                          className="griditemDiv"
                        >
                          <span
                            style={{
                              fontSize: "1rem",
                              textAlign: "left",
                              alignItems: "left",
                            }}
                          >
                            Item
                          </span>
                          <span
                            style={{ fontSize: "1rem", lineHeight: "1.2rem" }}
                          >
                            Moodboard design, month 1 retainer costs
                          </span>
                        </div>
                      </p>
                    </Grid>
                    <Grid item xs={2} id="gridItem">
                      <p className="griditemP">
                        <div
                          style={{ textAlign: "left", alignItems: "left" }}
                          className="griditemDiv"
                        >
                          <span
                            style={{
                              fontSize: "1rem",
                              textAlign: "left",
                              alignItems: "left",
                            }}
                          >
                            Proforma invoice
                          </span>
                          <span style={{ fontSize: "1.1rem" }}>
                            <a href="#">MFPI-12345678</a>
                          </span>
                        </div>
                      </p>
                    </Grid>
                    <Grid item xs={2} id="gridItem">
                      <p className="griditemP">
                        <div
                          style={{ textAlign: "left", alignItems: "left" }}
                          className="griditemDiv"
                        >
                          <span
                            style={{
                              fontSize: "1rem",
                              textAlign: "left",
                              alignItems: "left",
                            }}
                          >
                            Proforma invoice Date
                          </span>
                          <span style={{ fontSize: "1.4rem" }}>
                            12 April 2023
                          </span>
                        </div>
                      </p>
                    </Grid>
                    <Grid item xs={2} id="gridItem">
                      <p className="griditemP">
                        <div
                          style={{ textAlign: "left", alignItems: "left" }}
                          className="griditemDiv"
                        >
                          <span
                            style={{
                              fontSize: "1rem",
                              textAlign: "left",
                              alignItems: "left",
                            }}
                          >
                            Status
                          </span>
                          <span>
                            <Chip
                              label="Payment Pending"
                              style={{ width: "10rem" }}
                            >
                              Payment Pending
                            </Chip>
                          </span>
                        </div>
                      </p>
                    </Grid>
                    <Grid item xs={2} id="gridItem">
                      <p className="griditemP">
                        <div
                          style={{ textAlign: "left", alignItems: "left" }}
                          className="griditemDiv"
                        >
                          <span
                            style={{
                              fontSize: "1rem",
                              textAlign: "left",
                              alignItems: "left",
                            }}
                          >
                            Invoice
                          </span>
                          <span>-</span>
                        </div>
                      </p>
                    </Grid>
                    <Grid item xs={2} id="gridItem">
                      <p className="griditemP">
                        <div
                          style={{ textAlign: "left", alignItems: "left" }}
                          className="griditemDiv"
                        >
                          <span
                            style={{
                              fontSize: "1rem",
                              textAlign: "left",
                              alignItems: "left",
                            }}
                          >
                            Invoice Date
                          </span>
                          <span>-</span>
                        </div>
                      </p>
                    </Grid>
                  </Grid>
                </div>
                <div
                  className="next_M"
                  style={{
                    borderBottom: "solid #E2E2E2 1px",
                    paddingBottom: "25px",
                  }}
                >
                  <div className="next_T">
                    <Grid container columnSpacing={7}>
                      <Grid item xs={2} id="gridItem">
                        <p className="griditemP">
                          <div
                            style={{ textAlign: "left", alignItems: "left" }}
                            className="griditemDiv"
                          >
                            {/* <span
                              style={{
                                fontSize: "1rem",
                                textAlign: "left",
                                alignItems: "left",
                              }}
                            >
                              Item
                            </span> */}
                            <span
                              style={{
                                fontSize: "1rem",
                                lineHeight: "1.2rem",
                              }}
                            >
                              Moodboard design, month 1 retainer costs
                            </span>
                          </div>
                        </p>
                      </Grid>
                      <Grid item xs={2} id="gridItem">
                        <p className="griditemP">
                          <div
                            style={{ textAlign: "left", alignItems: "left" }}
                            className="griditemDiv"
                          >
                            {/* <span
                              style={{
                                fontSize: "1rem",
                                textAlign: "left",
                                alignItems: "left",
                              }}
                            >
                              Proforma invoice
                            </span> */}
                            <span style={{ fontSize: "1.2rem" }}>
                              <a href="#">MFPI-12345678</a>
                            </span>
                          </div>
                        </p>
                      </Grid>
                      <Grid item xs={2} id="gridItem">
                        <p className="griditemP">
                          <div
                            style={{ textAlign: "left", alignItems: "left" }}
                            className="griditemDiv"
                          >
                            {/* <span
                              style={{
                                fontSize: "1rem",
                                textAlign: "left",
                                alignItems: "left",
                              }}
                            >
                              Proforma invoice Date
                            </span> */}
                            <span>12 April 2023</span>
                          </div>
                        </p>
                      </Grid>
                      <Grid item xs={2} id="gridItem">
                        <p className="griditemP">
                          <div
                            style={{ textAlign: "left", alignItems: "left" }}
                            className="griditemDiv"
                          >
                            {/* <span
                              style={{
                                fontSize: "1rem",
                                textAlign: "left",
                                alignItems: "left",
                              }}
                            >
                              Status
                            </span> */}
                            <span>
                              <Chip
                                color="success"
                                label="Payment Pending"
                                style={{ width: "10rem" }}
                              >
                                Payment Pending
                              </Chip>
                            </span>
                          </div>
                        </p>
                      </Grid>
                      <Grid item xs={2} id="gridItem">
                        <p className="griditemP">
                          <div
                            style={{ textAlign: "left", alignItems: "left" }}
                            className="griditemDiv"
                          >
                            {/* <span
                              style={{
                                fontSize: "1rem",
                                textAlign: "left",
                                alignItems: "left",
                              }}
                            >
                              Disbursement report (click to see)
                            </span> */}
                            <span style={{ fontSize: "1.2rem" }}>
                              <a href="#">MFIN-12345678</a>
                            </span>
                          </div>
                        </p>
                      </Grid>
                      <Grid item xs={2} id="gridItem">
                        <p className="griditemP">
                          <div
                            style={{ textAlign: "left", alignItems: "left" }}
                            className="griditemDiv"
                          >
                            {/* <span
                              style={{
                                fontSize: "1rem",
                                textAlign: "left",
                                alignItems: "left",
                              }}
                            >
                              Disbursement report (click to see)
                            </span> */}
                            <span>27 Mar 2023</span>
                          </div>
                        </p>
                      </Grid>
                    </Grid>
                  </div>
                </div>
                <div className="next_B">
                  Understand the meaning of statuses and how the payments work.
                  Click here
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
        </TabContext>
      </div>
    </div>
  );
}

export default App;
