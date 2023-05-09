import React, { useState } from "react";
import "./form.css";
import { submitRecord } from "../../store/interactions";
import { useDispatch, useSelector } from "react-redux";
const Form = () => {
  const provider = useSelector((state) => state.provider.connection);
  const medical = useSelector((state) => state.medical.contract);
  const account=useSelector((state)=>state.provider.account);
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    submitRecord(
      name,
      age,
      gender,
      bloodType,
      allergies,
      diagnosis,
      treatment,
      provider,
      medical,
      dispatch
    );
    setName(0);
    setAge(0);
    setGender(0);
    setBloodType(0);
    setAllergies(0);
    setDiagnosis(0);
    setTreatment(0);
  };
  const [name, setName] = useState(0);
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState(0);
  const [bloodType, setBloodType] = useState(0);
  const [allergies, setAllergies] = useState(0);
  const [diagnosis, setDiagnosis] = useState(0);
  const [treatment, setTreatment] = useState(0);

  return (
    <div className="login-container">
      <h1></h1>
    {account?( <form onSubmit={submitHandler}>
        <h1>Patient Details</h1>

        <label htmlFor="name">Patient Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name === 0 ? "" : name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Aman Dhattarwal"
        />

        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          required
          placeholder="29"
          value={age === 0 ? "" : age}
          onChange={(e) => setAge(e.target.value)}
        />

        <label htmlFor="gender">Gender:</label>
        <select
          id="gender"
          name="gender"
          required
          onChange={(e) => setGender(e.target.value)}
          value={gender === 0 ? "" : gender}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <label htmlFor="address">Blood type:</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="B positive"
          value={bloodType === 0 ? "" : bloodType}
          onChange={(e) => setBloodType(e.target.value)}
        />
        <label htmlFor="address">Allergies:</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Pollen allergy"
          value={allergies === 0 ? "" : allergies}
          onChange={(e) => setAllergies(e.target.value)}
        />
        <label htmlFor="address">Diagnosis:</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Osteoporosis"
          value={diagnosis === 0 ? "" : diagnosis}
          onChange={(e) => setDiagnosis(e.target.value)}
        />
        <label htmlFor="address">Treatment:</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Surgery"
          value={treatment === 0 ? "" : treatment}
          onChange={(e) => setTreatment(e.target.value)}
        />

        <input type="submit" value="Submit" />
      </form>):(
        <h1>Connect the account</h1>
      )}
     
    </div>
  );
};

export default Form;
