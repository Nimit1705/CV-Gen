import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Socials from './components/Socials'
import Bio from './components/Bio'
import Skills from './components/Skills'
import Education from './components/Education'



function App() {
  const [fullName, setFullname] = useState('')
  const [isSaved, setIsSaved] = useState(false)
  const [positionName, setPositionName] = useState('')
  const saveHeader = () => {
    setFullname(prevName => prevName = fullName)
    setPositionName(prevPos => prevPos = positionName)
    setIsSaved(true)
  }
  const editHeader = () => {
    setIsSaved(false);
  }


  
  const [link, setLink] = useState('')
  const [ph, setPh] = useState('')
  const [email, setEmail] = useState('')
  const [isSavedCont, setIsSavedCont] = useState(false);

  const saveContacts = () => {
    setLink(prevLink => prevLink = link)
    setPh(prevPh => prevPh = ph)
    setEmail(prevEmail => prevEmail = prevEmail)
    setIsSavedCont(true)
  }

  const editContacts = () => {
    setIsSavedCont(false)
  }

  const [bioText, setBioText] = useState('');
  const [isSavedBio, setIsSavedbio] = useState(false)

  const saveBio = () => {
    setBioText(prevBio => prevBio = bioText);
    setIsSavedbio(true);
  }

  const editBio = () => {
    setIsSavedbio(false);
  }



  const [skills, setSkills] = useState([]);
  const [inputValues, setInputValues] = useState([""]);
  const [removeIndex, setRemoveIndex] = useState(-1);
  const [isSavedSkill, setisSavedSkill] = useState(false);

  const addSkill = (index) => {
    setSkills(oldSkills => [...oldSkills, inputValues[index]]);
    setInputValues([...inputValues, ""]);
    setRemoveIndex(index);
  }

  const handleInputChange = (event, index) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = event.target.value;
    setInputValues(newInputValues);
  }

  const handleRemoveSkill = (index) => {
    setSkills(oldSkills => oldSkills.filter((_, i) => i !== index));
    setInputValues(inputValues.filter((_, i) => i !== index));
    setRemoveIndex(-1);
  }

  const saveSkill = () => {
    setisSavedSkill(true)
  }

  const editSkill = () => {
    setisSavedSkill(false)
  }

  const [institute, setInstitute] = useState('')
  const [education, setEducation] = useState('')
  const [grade, setGrade] = useState('')
  const [session, setSession] = useState('')

  const courseChangeHandler = (e) => {
    setEducation(e.target.value)
  }

  const instChangeHandler = (e) => {
    setInstitute(e.target.value);
  }

  const handleSelectChange = (event) => {
    const selectedOption = event.target.value;
    setGrade(`${selectedOption}: ${grade.split(': ')[1] || ''}`);
  };

  const handleGradeChange = (event) => {
    const inputValue = event.target.value;
    setGrade(`${grade.split(': ')[0] || ''}: ${inputValue}`);
  };

  const handleSessionChange = () => {
    const firstInputValue = document.getElementById('firstInput').value;
    const secondInputValue = document.getElementById('secondInput').value;
    setSession(`${firstInputValue} - ${secondInputValue}`);
  };

  return (
    <>
      <div className='container'>
        <div className='components'>
          <div className='cv-form'>

            <h2>Header</h2>
            <div className="header-elm">
              <label htmlFor='FName'>Full Name</label>
              <input placeholder='Full Name' className={`FName ${isSaved ? 'saved' : ''}`} name='FName' type='text' onBlur={(e) => setFullname(e.target.value)} readOnly={isSaved}></input>
              <label htmlFor='position-form'>Applying For</label>
              <input placeholder='eg: Software Developer Engineer' className={`position-form ${isSaved ? 'saved' : ''}`} name='position-form' type='text' onBlur={(e) => setPositionName(e.target.value)} readOnly={isSaved}></input>
              <div className="buttons">
                <button onClick={saveHeader}>Save</button>
                <button onClick={editHeader}>Edit</button>
              </div>
            </div>


            <h2 className='contact'>Contacts</h2>
            <div className='contact-form'>
              <label htmlFor='linkedin-input'>LinkedIn</label>
              <input className={`linkedin-input ${isSavedCont ? 'saved' : ''}`} name='linkedin-input' onBlur={(e) => setLink(e.target.value)} readOnly={isSavedCont} placeholder='Linked Username'></input>

              <label htmlFor='phone-no'>Phone Number</label>
              <input className={`phone-no ${isSavedCont ? 'saved' : ''}`} name='phone-no' onBlur={(e) => setPh(e.target.value)} maxLength={13} type='tel' readOnly={isSavedCont} placeholder='eg: +911234567890'></input>

              <label htmlFor='email-input'>Email</label>
              <input className={`email-input ${isSavedCont ? 'saved' : ''}`} name='email-input' onBlur={(e) => setEmail(e.target.value)} type='email' readOnly={isSavedCont} placeholder='eg: johndoe@email.com'></input>

              <div className="buttons">
                <button onClick={saveContacts} >Save</button>
                <button onClick={editContacts}>Edit</button>
              </div>
            </div>


            <h2 className='bio-text'>Bio</h2>
            <div className='bio-textarea'>
              <textarea className={` ${isSavedBio ? 'saved' : ''}`} rows={7} maxLength={300} placeholder='Enter your bio (word limit: 300 words)' onBlur={e => { setBioText(e.target.value) }} readOnly={isSavedBio}></textarea>
              <div className="buttons">
                <button onClick={saveBio}>Save</button>
                <button onClick={editBio}>Edit</button>
              </div>
            </div>

            <h2 className='tech-skills'>Technical Skills</h2>
            <div className='skill-list'>
              <label htmlFor='skill-list-item'>Skill</label>
              {inputValues.map((value, index) => (
                <div key={index} className='skill-input'>
                  <input
                  placeholder='Enter Your Skills'
                    type='text'
                    className={`skill-list-item ${isSavedSkill ? 'saved' : ''}`}
                    name="skill-list-item"
                    value={value}
                    onChange={(event) => handleInputChange(event, index)}
                    readOnly={isSavedSkill}>
                  </input>
                  {index === inputValues.length - 1 ? (
                    <button className='add-skill' onClick={() => addSkill(index)}>
                      {removeIndex === index ? "-" : "+"}
                    </button>
                  ) : (
                    <button className='remove-skill' onClick={() => handleRemoveSkill(index)}>
                      -
                    </button>
                  )}
                </div>
              ))}
              <div className="buttons">
                <button onClick={saveSkill}>Save</button>
                <button onClick={editSkill}>Edit</button>
              </div>
            </div>

            <h2 className='education-head'>Education</h2>
            <div className='education-list'>
              <label htmlFor='edu-course-input'>Course</label>
              <input onBlur={courseChangeHandler} className='edu-course-input' name='edu-course-input' type='text'></input>
              <label htmlFor='institute-input'>Institute</label>
              <input onBlur={instChangeHandler} className='institute-input' name='institute-input' type='text'></input>
              <div className='grade-session-input'>
                <div className='grd'>
                  <label htmlFor="grading">Grading</label>
                  <div className='grade-input'>
                    <select className='grading' name='grading' onBlur={handleSelectChange}>
                      <option value={"CGPA"}>CGPA</option>
                      <option value={"Percentage"}>Percentage</option>
                      <option value={"Percentile"}>Percentile</option>
                    </select>
                    <input type='tel' maxLength={6} onBlur={handleGradeChange}></input>
                  </div>
                </div>
                <div className='ssn'>
                  <label htmlFor="session">Session</label>
                  <div className='session-input'>
                    <input maxLength={4} id="firstInput" onBlur={handleSessionChange}></input>
                    <b>-</b>
                    <input maxLength={7} id="secondInput" onBlur={handleSessionChange}></input>
                  </div>
                </div>
              </div>
              <button className='add-education'>Add</button>
              <div className="buttons">
                <button onClick={saveSkill}>Save</button>
                <button onClick={editSkill}>Edit</button>
              </div>
            </div>


          </div>
        </div>
        <div className='cv'>
          <Header fullName={fullName} posiName={positionName} ></Header>
          <Socials linked={link} email={email} ph={ph}></Socials>
          <Bio bio={bioText}></Bio>
          <Skills skills={skills}></Skills>
          <Education education={education} institute={institute} grade={grade} session={session}></Education>
        </div>
      </div>
    </>
  )
}

export default App;