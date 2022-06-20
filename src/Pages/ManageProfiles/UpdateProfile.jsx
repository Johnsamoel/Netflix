import React ,{useState,useEffect} from 'react'
import {useHistory} from "react-router-dom"
import { Badge, Button, Card, Col, Form, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
//import Header from '../../Components/Navbar/Navbar';
import Nav from '../../Components/NavBar'
import './UpdateProfile.css'
import userImg from './images/girl.jpg'
import delImg from './images/delete.png'
import {useSelector} from 'react-redux'

const UpdateProfile = (props) => {
 // const classes = useStyles();
  const user=useSelector((state)=>{
    return state
   })
   console.log(user);

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
    <div className="col-md-2 border-right">
      <div className="d-flex flex-column align-items-center text-center p-3 py-5">
        <img
          className="rounded-circle mt-5 mx-5"
          src={userImg}
          width={90}
        />
        <span className="font-weight-bold">
        {user.FirstName}Aya
        </span>
        <span className="text-black-50">{user.Email}</span>
      </div>
    </div>
    <div className="col-md-5 border-right">
      <div className="p-3 py-5">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h6 className="text-right">Edit your profile</h6>
        </div>
        <div className="row mt-2 ">
          <div className="col-md-6">
            <label className="labels">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="first name"
              defaultValue="Aya"
            />
          </div>
          <div className="col-md-6">
            <label className="labels">Surname</label>
            <input
              type="text"
              className="form-control"
              defaultValue="Fdawy"
              placeholder="Surname"
            />
          </div>
        </div>
        <div className="row mt-3">
          <label>Language</label>
        <div className="col-md-12">
        <select className="selectpicker" data-width="fit">
  <option data-content='<span class="flag-icon flag-icon-us"></span> English'>
    English
  </option>
  <option data-content='<span class="flag-icon flag-icon-eg"></span> Arabic'>
    Arabic
  </option>
</select>

        </div>
        </div>
       <div className="row mt-3">
          <div className="col-md-12">
            <label className="labels">Autoplay Controls</label>
            <>
  <div className="form-check">
    <input
      className="form-check-input"
      type="checkbox"
      defaultValue=""
      id="flexCheckDefault"
    />
    <label className="form-check-label" htmlFor="flexCheckDefault">
    Autoplay next episode in a series on all devices
    </label>
  </div>
  <div className="form-check">
    <input
      className="form-check-input"
      type="checkbox"
      defaultValue=""
      id="flexCheckChecked"
      defaultChecked=""
    />
    <label className="form-check-label" htmlFor="flexCheckChecked">
    Autoplay previews while browsing on all devices
    </label>
  </div>
</>

          </div>
          
        </div>
        
        <div className="mt-5 text-center">
          <button className="btn btn-primary profile-button" type="button">
            Save Profile
          </button>
          <button className="btn btn-primary profile-button-cancel" type="button">
            Cancel
          </button>
        </div>
      </div>
    </div>
    <div className="col-md-5">
      <div className="p-3 py-5 mb-2">
        <div className="d-flex justify-content-between align-items-center experience">
          <span>Edit History</span>
          <span className="border px-3 p-1 add-experience">
            <i className="fa fa-search" />
            &nbsp;search by date
          </span>
        </div>
        <div className="d-flex flex-row mt-4 exp-container">
        
        <div className=" d-flex justify-content-between align-items-center experience ">
            
        <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckChecked" defaultChecked=""/>

        <span className="font-weight-bold p-1">  Video 1 seen  </span>
        <span className="d-flex px-3 p-1 text-black-50 labels">  March,2017 - May 2020 </span>

        <span className="px-3 p-1 "> <img style={{width:"30px"}} src={delImg}/> </span>
          </div>
        </div>
        <hr />
        <div className="d-flex flex-row mt-3 exp-container">
        
        <div className=" d-flex justify-content-between align-items-center experience ">
            
        <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckChecked" defaultChecked=""/>

        <span className="font-weight-bold p-1">  Video 1 seen  </span>
        <span className="d-flex px-3 p-1 text-black-50 labels">  March,2017 - May 2020 </span>

        <span className="px-3 p-1 "> <img style={{width:"30px"}} src={delImg}/> </span>
          </div>
        </div>
        <hr />
        <div className="d-flex flex-row mt-3 exp-container">
        
        <div className=" d-flex justify-content-between align-items-center experience ">
            
        <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckChecked" defaultChecked=""/>

        <span className="font-weight-bold p-1">  Video 1 seen  </span>
        <span className="d-flex px-3 p-1 text-black-50 labels">  March,2017 - May 2020 </span>

        <span className="px-3 p-1 "> <img style={{width:"30px"}} src={delImg}/> </span>
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

