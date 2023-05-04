import React, { useState } from "react";
import "./App.css";
import logo from "./logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Col, Container, Form, Row, Tab, Tabs } from "react-bootstrap";
import { GrFormAdd } from "react-icons/gr";


function App() {
  const [activeTab, setActiveTab] = useState("tab1");
  const [profileImage, setprofileImage] = React.useState([]);
  const [isGender, setIsGender] = useState(false)
  const [gender, setGender] = useState("Male")
  const [isDob, setIsDob] = useState(false)
   const [selectedDate, setSelectedDate] = useState("2023-05-01");
   const [isPhone, setIsPhone] = useState(false)
   const [number, setNumber] = useState("")
   const [name, setName] = useState("Kevin Duran")
   const [form2, setForm2] = useState({
    address1 : "18 Address Place",
    address2 : "St Brelade",
    address3 : "Jersey",
    address4 : "JE3 8JU",
    email : "kevinduran@gmail.com",
   })
   const [form2Edit, setForm2Edit] = useState(false)
   const [form1Edit, setForm1Edit] = useState(false)
   const [form1Full, setForm1Full] = useState(false)
   const [form2Full, setForm2Full] = useState(false)
   const [stu1, setStu1] = useState("Tom Duran")
   const [stu2, setStu2] = useState("Jenny Duran")

  console.log('selectedDate', selectedDate)

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const handleForm2 = (e) => {
    const {name, value} = e.target
    setForm2({...form2, [name] : value});
  }

  const handleimage = (e) => {
    let file = e.target.files[0];
    let fileURL = URL.createObjectURL(file);
    file.fileURL = fileURL;
    setprofileImage([file]);
  };

  console.log("form1", form1Edit, form1Full)

  return (
    <div className="bg-light minheight">
      <div className="py-4 pr-4 logo bg-white">
        <img src={logo} />
      </div>
      <div className="mt-1 bg-white x-scroll">
        <ul className="tabs font-14">
          <li
            className={activeTab === "tab1" ? "active" : null}
            onClick={() => handleTabClick("tab1")}
          >
            Overview
          {activeTab == "tab1" &&<div className="bb-active one">Overvi</div>}
          </li>
          <li
            className={activeTab === "tab2" ? "active" : null}
            onClick={() => handleTabClick("tab2")}
          >
            Student Details
            {activeTab == "tab2" &&<div className="bb-active two">Student Det</div>}
          </li>
          <li
            className={activeTab === "tab3" ? "active" : null}
            onClick={() => handleTabClick("tab3")}
          >
            Payment Details
            {activeTab == "tab3" &&<div className="bb-active three">Payment Deta</div>}
          </li>
          <li
            className={activeTab === "tab4" ? "active" : null}
            onClick={() => handleTabClick("tab4")}
          >
            Consent Preferences
            {activeTab == "tab4" &&<div className="bb-active four">Consent Prefere</div>}
          </li>
        </ul>
      </div>

    {activeTab == "tab1"?  <div className="m5">
        <Row>
          <Col sm={12} md={6}>
            <Card className="border-0 des">
              <Card.Body className="p-22 flx">
                <Row className="d-flex align-items-center tc">
                  <Col sm={12} md={2}  className="mview">
                  <div className="position-relative hw-107">

                    <img className="hw-107 rounded-circle" src={profileImage.length > 0 && profileImage[0].fileURL
                      ? profileImage[0].fileURL : "https://cdn-icons-png.flaticon.com/512/149/149071.png" } />
                  <div className="position-absolute profile-icon">
                  <label htmlFor="images" className="">
                    <div className="bg-danger rounded-circle text-white  pointer profile-icon">
                    
                  <GrFormAdd size={20} className="white " />
                    </div>
                    <input
                      type="file"
                      id="images"
                      name="profile_avatar"
                      accept=".png, .jpg, .jpeg"
                      hidden
                      onChange={(e) => handleimage(e)}
                    />
                  </label>
                </div>
                  </div>
                    {/* <div className=" bg-light rounded-circle position-relative hw-107">
                      
                      <div className="position-absolute  bg-danger rounded-circle text-white profile-icon pointer" for="file">
                        <GrFormAdd size={20} className="white " />
                      </div>
                    </div> */}
                  </Col>
                  <Col sm={12} md={8} className="lgml">
                    <div className="space">
                      <h5 className="font-22 fw-500">Kevin Duran</h5>
                      <p className="color-gray font-14">kevinduran@gmail.com</p>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} className="res-mt">
            <h3 className="font-18 mb-2">Your Students</h3>
            <Row>
              <Col sm={12} md={4}>
                <Card className="border-0">
                  <Card.Body>
                    <h6 className="font-16 fw-500 pink">Tom Duran</h6>
                    <h6 className="font-12 my-2">
                      Next class: <span className="color-gray">24.07.2022</span>
                    </h6>
                    <div className=" py-2 text-center font-12 upcoming">
                      Upcoming Grading
                    </div>
                  </Card.Body>
                </Card>
              </Col>{" "}
              <Col sm={12} md={4} className="res-mt">
                <Card className="border-0 h-100">
                  <Card.Body>
                    <h6 className="font-16 fw-500 pink">Jenny Duran</h6>
                    <h6 className="font-12 my-2">
                      Next class: <span className="color-gray">24.07.2022</span>
                    </h6>
                  </Card.Body>
                </Card>
              </Col>{" "}
              <Col sm={12} md={4} className="res-mt">
                <Card className="border-0 h-100">
                  <Card.Body className="d-flex justify-content-center align-items-center br bg-pink">
                    <div className="text-white">
                      <GrFormAdd size={20} className="plus white fw-500" />
                    </div>
                    <p className="py-0 m-0 font-14 px-1 fw-600 text-white">
                      Add Student
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col sm={12} md={6}>
            <Card className="border-0 ">
              <Card.Body className="">
                <div className="d-flex justify-content-between">
                  <h6 className="font-16">Personal Details</h6>
                  {form1Edit && <p className="text-danger font-bold font-12 pointer" onClick={() => {setForm1Edit(false); setForm1Full(false)}}>Save</p>}
                  {!form1Edit && <p className="text-danger font-bold font-12 pointer" onClick={() => {setForm1Edit(true); setForm1Full(true)}}>Edit</p>}
                </div>
                <p className="color-gray p-0 m-0 font-12">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <hr />
                <table className="mb-4 font-14">
  <tr>
    <th>Name</th>
    <td>{(form1Edit && form1Full ) ? <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} /> : name}</td>
  </tr>
  <tr>
    <th>Students</th>
    <td className="pink">{(form1Edit && form1Full ) ? <Form.Control type="text" value={stu1} onChange={(e) => setStu1(e.target.value)} /> : stu1}</td>
  </tr>
  <tr>
    <td></td>
    <td className="pink">{(form1Edit && form1Full ) ? <Form.Control type="text" value={stu2} onChange={(e) => setStu2(e.target.value)} /> : stu2}</td>

  </tr>
  {isGender && <tr>
    <th>Gender</th>
    <td className="d-flex align-items-center">
    {form1Edit ? <><Form.Check 
        type="radio"
        label="Male"
        name="group1"
        id="option1"
        value="Male"
        checked={gender === "Male"}

        onClick={(e) => setGender(e.target.value)
        }
      />

      <Form.Check 
      className="mx-2"
        type="radio"
        label="Female"
        name="group1"
        id="option2"
        value="Female"
        checked={gender === "Female"}

        onClick={(e) => setGender(e.target.value)}
      /></>: gender}

    </td>
  </tr>}
  {isDob && <tr>
    <th>D.O.B</th>
    <td>
      
{form1Edit ? <Form.Control type="date" value={selectedDate} className="rw-83" onChange={(e) => setSelectedDate(e.target.value)}/> : selectedDate}
    </td>


  </tr>}
 
</table>
               
                {!isGender && <div className="d-flex justify-content-center align-items-center buttonb py-2 h-45" onClick={() =>{ setIsGender(true); setForm1Edit(true)}}>
                  <div>
                    <GrFormAdd color="white" className="plus" />
                  </div>
                  <p className="py-0 m-0 font-14 px-1 fw-600">Add Gender</p>
                </div>}
               {!isDob && <div className="d-flex justify-content-center align-items-center buttonb py-2 mt-3 h-45" onClick={() => {setIsDob(true); setForm1Edit(true)}}>
                  <div>
                    <GrFormAdd color="white" className="plus" />
                  </div>
                  <p className="py-0 m-0 font-14 px-1 fw-600">
                    Add Date of Birth
                  </p>
                </div>}
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} className="res-mt">
            <Card className="border-0">
              <Card.Body>
                <div className="d-flex justify-content-between">
                  <h6 className="font-16">Address & Contact</h6>
                  {form2Edit && <p className="text-danger font-bold font-12 pointer" onClick={() => {setForm2Edit(false); setForm2Full(false)}}>Save</p>}
                  {!form2Edit && <p className="text-danger font-bold font-12 pointer" onClick={() => {setForm2Edit(true); setForm2Full(true)}}>Edit</p>}                </div>
                <p className="color-gray p-0 m-0 font-12">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>{" "}
                <hr />
                <table className="mb-4 font-14">
  <tr>
    <th>Address</th>
    <td>{form2Edit && form2Full ? <Form.Control type="text" name="address1" value={form2?.address1} onChange={(e) => handleForm2(e)} /> : form2?.address1}</td>
  </tr>
  <tr>
    <th></th>
    <td>{form2Edit && form2Full ? <Form.Control type="text" name="address2" value={form2?.address2} onChange={(e) => handleForm2(e)} /> : form2?.address2}</td>
  </tr>
  <tr>
    <td></td>
    <td>{form2Edit && form2Full ? <Form.Control type="text" name="address3" value={form2?.address3} onChange={(e) => handleForm2(e)} /> : form2?.address3}</td>

  </tr>
  <tr>
    <td></td>
    <td>{form2Edit && form2Full ? <Form.Control type="text" name="address4" value={form2?.address4} onChange={(e) => handleForm2(e)} /> : form2?.address4}</td>

  </tr>
  <tr >
    <th>Email</th>
    <td>{form2Edit && form2Full ? <Form.Control type="email" name="email" value={form2?.email} onChange={(e) => handleForm2(e)} /> : form2?.email}</td>

  </tr>
  {isPhone &&<tr >
    <th>Phone</th>
    <td >        {form2Edit  ? <Form.Control type="number" value={number} onChange={(e) => setNumber(e.target.value)} placeholder="9016193206"/> : number ?  number : "9016193206"}
</td>

  </tr>}
 
</table>
                
               {!isPhone&& <div className="d-flex justify-content-center align-items-center buttonb py-2 h-45" onClick={() =>{setIsPhone(true); setForm2Edit(true)}}>
                  <div>
                    <GrFormAdd color="white" className="plus" />
                  </div>
                  <p className="py-0 m-0 font-14 px-1 fw-600">
                    Add Phone Number
                  </p>
                </div>}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div> : 
      <div className="m-5 h-66 d-flex justify-content-center align-items-center">
        <h1 className="font-40">No Data Found!</h1>
      </div>
      }
    </div>
  );
}

export default App;
