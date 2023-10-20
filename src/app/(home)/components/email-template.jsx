export const EmailTemplate = ({ nombre, email, mensaje }) => (
  <main>
    <table className="es-wrapper">
      <tr>
        <td valign="top">
          <table className="es-content">
            <tr>
              <td align="center">
                <table className="es-content-body" bgcolor="#ffffff">
                  <tr>
                    <td
                      className="es-m-p0t es-m-p0r es-m-p0l"
                      align="left"
                      bgcolor="#999999"
                    >
                      <table width="100%">
                        <tr>
                          <td
                            align="center"
                            valign="top"
                            style={{ width: "560px" }}
                          >
                            <table width="100%">
                              <tr>
                                <td align="center">
                                  <img
                                    className="adapt-img"
                                    src="https://fcihvdc.stripocdn.email/content/guids/CABINET_c585903c84e43ba2277520a9fc485b78b8a81232c14837c62a4d3cbb81d75ed5/images/logofab_a6t.png"
                                    alt=""
                                    width="170"
                                  />
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td align="left">
                      <p>Estimada Administración Fábrica 4.0 y FAB:</p>
                      <p>{mensaje}</p>
                      <p>Les saluda atentamente,</p>
                      <p>
                        <strong>{nombre}</strong>
                        <br />
                        <strong>{email}</strong>
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
          <table className="es-footer">
            <tr>
              <td align="center">
                <table className="es-footer-body" bgcolor="#ffffff">
                  <tr>
                    <td align="left">
                      <table width="100%">
                        <tr>
                          <td
                            align="center"
                            valign="top"
                            style={{ width: "560px" }}
                          >
                            <table width="100%">
                              <tr>
                                <td align="center">
                                  <img
                                    className="adapt-img"
                                    src="https://fcihvdc.stripocdn.email/content/guids/CABINET_c585903c84e43ba2277520a9fc485b78b8a81232c14837c62a4d3cbb81d75ed5/images/footer_pvl.jpeg"
                                    alt=""
                                    width="560"
                                  />
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td align="left">
                      <table width="100%">
                        <tr>
                          <td
                            align="center"
                            valign="top"
                            style={{ width: "560px" }}
                          >
                            <table width="100%">
                              <tr>
                                <td align="center">
                                  <img
                                    className="adapt-img"
                                    src="https://fcihvdc.stripocdn.email/content/guids/CABINET_c585903c84e43ba2277520a9fc485b78b8a81232c14837c62a4d3cbb81d75ed5/images/linea_roja.png"
                                    alt=""
                                    width="560"
                                  />
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </main>
);
