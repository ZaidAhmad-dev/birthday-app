import {useState} from 'react';
import {data} from './birthday-data';

function App() {

  const [birthdays, setBirthdays] = useState(data);

  const removeBirthday = (id) => {
    let newBirthday = birthdays.filter((birthday) => birthday.id !== id)
    setBirthdays(newBirthday)
  }
  
  return (
    <>
    <h3 className='birthday-header'>{birthdays.length} birthdays today</h3>
    {birthdays.map((birthday) => {
      const {id, name, image} = birthday;
      return (
        <div key={id} className="container">

          <div className="avatar" key={id}>
              <div>
                <img src={image} alt={name}/>
              </div>
          
              <div>
                <h3 className='name'>{name}</h3>
              </div>
         
              <div className="button">
                  <button className="btn" onClick={() => removeBirthday(id)}>
                      Dismiss
                  </button>
              </div>
          </div>


        </div>
      );
    })}
    </>
  )
}



export default App;
