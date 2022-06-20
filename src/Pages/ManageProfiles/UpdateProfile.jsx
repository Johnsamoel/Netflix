import React ,{useState,useEffect} from 'react'
import {useHistory} from "react-router-dom"
import { Badge, Button, Card, Col, Form, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
//import Header from '../../Components/Navbar/Navbar';
import Nav from '../../Components/NavBar'
import './UpdateProfile.css'
import userImg from './images/girl.jpg'

const UpdateProfile = (props) => {
  //const history =useHistory();
  // const id=props.match.params.id
  //   console.warn(props.match.params.id)
  // const token=localStorage.getItem("token")
  // const [users, setUser] = useState([])
  // const [bio, setBio] = useState("");
  // const [image, setImage] = useState("pietra-schwarzler-FqdfVIdgR98-unsplash.jpg");
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");
  // const [address, setAddress] = useState("");
  // const [name, setUsername] = useState("");
  // const [specialist, setSpecialist] = useState("");
  // const [url, setUrl] = useState("");

  // const [userId,setUserId]=useState(null)
  //   useEffect(() => {
  //       getUsers();
  //     }, [])
  //     function getUsers() {
  //       fetch("https://boiling-shelf-43809.herokuapp.com/user/"+id+"/profile"
  //       , {
  //         headers:{
  //           "authorization":`${token}`
  //         }
  //       }
  //       ).then((result) => {
  //         result.json().then((resp) => {
  //           console.warn(resp.profile)
  //           setUser(resp.profile)
  //           setBio(resp.profile.bio)
  //           setPhone(resp.profile.phone)
  //           setEmail(resp.profile.email)
  //           // setAddress(resp.address)
  //           setUsername(resp.profile.name)
  //           setUrl(resp.profile.url)

  //           // setSpecialist(resp.specialist)
  //           // setUserId(resp.id)
  //         })
  //       })
  //     }

  return (
    <>
{/*     
      <div className="container updateprofile" style={{marginTop:"20px" ,backgroundColor:"#fff"}}>
        <h1 className="text-center" style={{marginBottom:"20px"}}>Update Profile</h1>
        <Form>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
<Form.Label column sm="2">
  Name
</Form.Label>
<Col sm="10">
  <Form.Control type="text"  placeholder="Name" />
</Col>
</Form.Group>

<Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
<Form.Label column sm="2">
  Description
</Form.Label>

</Form.Group>
<Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
<Form.Label column sm="2">
  Phone
</Form.Label>
<Col sm="10">
  <Form.Control type="text"  placeholder="Phone" />
</Col>
</Form.Group>
<Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
<Form.Label column sm="2">
  Email
</Form.Label>
<Col sm="10">
  <Form.Control type="text"  placeholder="Email" />
</Col>
</Form.Group>
<Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
<Col sm="10">
  <Form.Control type="text" placeholder="Address" />
</Col>
</Form.Group>
<Form.Group as={Row} style={{justifyContent:"center"}} className="mb-3" controlId="formPlaintextPassword">
<Button  style={{fontSize:"1.2rem"}}>Update</Button>
</Form.Group>
</Form>
    </div> */}
    <div className="container border rounded bg-white mt-5 mb-5">
  <div className="row">
    <div className="col-md-3 border-right">
      <div className="d-flex flex-column align-items-center text-center p-3 py-5">
        <img
          className="rounded-circle mt-5"
          src={userImg}
          width={90}
        />
        <span className="font-weight-bold">John Doe</span>
        <span className="text-black-50">john_doe12@bbb.com</span>
        <span>United States</span>
      </div>
    </div>
    <div className="col-md-5 border-right">
      <div className="p-3 py-5">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h6 className="text-right">Edit your profile</h6>
        </div>
        <div className="row mt-2">
          <div className="col-md-6">
            <label className="labels">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="first name"
              defaultValue="John"
            />
          </div>
          <div className="col-md-6">
            <label className="labels">Surname</label>
            <input
              type="text"
              className="form-control"
              defaultValue="Doe"
              placeholder="Doe"
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12">
            <label className="labels">Headline</label>
            <input
              type="text"
              className="form-control"
              placeholder="headline"
              defaultValue="UI/UX Developer"
            />
          </div>
          <div className="col-md-12">
            <label className="labels">Current position</label>
            <input
              type="text"
              className="form-control"
              placeholder="headline"
              defaultValue="UI/UX Developer at Boston"
            />
          </div>
          <div className="col-md-12">
            <label className="labels">Education</label>
            <input
              type="text"
              className="form-control"
              placeholder="education"
              defaultValue="Boston University"
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-6">
            <label className="labels">Country</label>
            <input
              type="text"
              className="form-control"
              placeholder="country"
              defaultValue="USA"
            />
          </div>
          <div className="col-md-6">
            <label className="labels">State/Region</label>
            <input
              type="text"
              className="form-control"
              defaultValue="Boston"
              placeholder="state"
            />
          </div>
        </div>
        <div className="mt-5 text-center">
          <button className="btn btn-primary profile-button" type="button">
            Save Profile
          </button>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="p-3 py-5">
        <div className="d-flex justify-content-between align-items-center experience">
          <span>Edit Experience</span>
          <span className="border px-3 p-1 add-experience">
            <i className="fa fa-plus" />
            &nbsp;Experience
          </span>
        </div>
        <div className="d-flex flex-row mt-3 exp-container">
          <img src="https://i.imgur.com/azSfBM3.png" width={45} height={45} />
          <div className="work-experience ml-1">
            <span className="font-weight-bold d-block">
              Senior UI/UX Designer
            </span>
            <span className="d-block text-black-50 labels">Twitter Inc.</span>
            <span className="d-block text-black-50 labels">
              March,2017 - May 2020
            </span>
          </div>
        </div>
        <hr />
        <div className="d-flex flex-row mt-3 exp-container">
          <img
            src="https://img.icons8.com/color/100/000000/facebook.png"
            width={45}
            height={45}
          />
          <div className="work-experience ml-1">
            <span className="font-weight-bold d-block">
              Senior UI/UX Designer
            </span>
            <span className="d-block text-black-50 labels">Facebook Inc.</span>
            <span className="d-block text-black-50 labels">
              March,2017 - May 2020
            </span>
          </div>
        </div>
        <hr />
        <div className="d-flex flex-row mt-3 exp-container">
          <img
            src="https://img.icons8.com/color/50/000000/google-logo.png"
            width={45}
            height={45}
          />
          <div className="work-experience ml-1">
            <span className="font-weight-bold d-block">UI/UX Designer</span>
            <span className="d-block text-black-50 labels">Google Inc.</span>
            <span className="d-block text-black-50 labels">
              March,2017 - May 2020
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
)
    
}

export default UpdateProfile;

