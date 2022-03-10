import { Button, Modal } from 'react-bootstrap';
import React, { useEffect, useState } from 'react'

function UserSamples() {
  const [samples, setsamples] = useState([])

  let i = 1
  const [haemotology, sethaemotology] = useState();

  const [searchValue, setsearchValue] = useState("")

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);


  const handleShow = async (haemotologyData) => {
    console.log(haemotologyData)
    await sethaemotology(haemotologyData);
    setShow(true)

  }

  useEffect(() => {
    samplesData()
  }, [])


  const samplesData = async () => {
    try {
      const url = 'http://localhost:3002/users/samples';
      const resp = await fetch(url);
      const sampleData = await resp.json();
      const datad = sampleData.data
      setsamples(datad);
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <div className="input-group rounded" style={{ width: '30%', marginTop: "40px", position: 'relative', left: '30%' }}>
        <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" onChange={(e) => { setsearchValue(e.target.value) }} />
        <span className="input-group-text border-0" id="search-addon">
          <i className="fas fa-search"></i>
        </span>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Sample Date</th>
                  <th scope="col">Patient Name</th>
                  <th scope="col">Email ID</th>
                  <th scope="col">Sample ID</th>
                  <th scope="col">Haematology</th>
                  <th scope="col">Glucometry</th>
                  <th scope="col">Thyroid Profile</th>


                </tr>
              </thead>
              <tbody>

                {samples.length > 0 ? samples.filter((item, index) => item.patientname.includes(searchValue.toLowerCase())).map((val,ind) => {
                  return <tr key={ind}>
                    <td>{val.sampleDate}</td>
                    <td>{val.patientname}</td>
                    <td>{val.mail}</td>
                    <td>{val.sampleId}</td>


                    <td> <button type="button" className="btn btn-primary" onClick={val.haematologyStatus === "view" ? () => { handleShow(val.haematology) } :  () => { handleClose() }}
                      disabled={!val.haematologyStatus === "view"}
                    >
                      {val.haematologyStatus === "view" ? "view details" : val.haematologyStatus === "pending" ? "Add Report" : "n/a"} </button>
                    </td>


                    <td> <button type="button" className="btn btn-primary" onClick={val.glucometryStatus === "view" ? () => { handleShow(val.glucometry) } : () => { handleClose() }}
                      disabled={!val.glucometryStatus === "view"}
                    >
                      {val.glucometryStatus === "view" ? "view details" : val.glucometryStatus === "pending" ? "Add Report" : "n/a"} </button>
                    </td>



                    <td> <button type="button" className="btn btn-primary" onClick={val.thyroidStatus === "view" ? () => { handleShow(val.thyroid) } : () => { handleClose() }}
                      disabled={!val.thyroidStatus === "view"}
                    >
                      {val.thyroidStatus === "view" ? "view details" : val.thyroidStatus === "pending" ? "Add Report" : "n/a"} </button>
                    </td>



                  </tr>

                }) : <tr><td>no record</td></tr>}
              </tbody>
            </table>
          </div>
        </div>
      </div>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Report</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table>
            <thead>
              <tr>
                <th>Test Name</th>
                <th></th>
                <th>Results</th>
              </tr>
            </thead>
            <tbody>
              {haemotology ? Object.keys(haemotology).map((key) => {
                return <tr key={i = i + 1}>
                  <td>{key}</td>
                  <td></td>
                  <td>{haemotology[key]}</td>
                </tr>
              }) : <p>no data available</p> }
            </tbody>
          </table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>

    </div>
  );
}
export default UserSamples
