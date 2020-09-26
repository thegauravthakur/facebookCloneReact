import React, { useState } from 'react'
import CloseIcon from '@material-ui/icons/Close'
import './SignUp.scss'

function SignUp() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className='signUp'>
      <div className='signUp__header'>
        <h3>Sign Up</h3>
        <p>It's quick and easy</p>
      </div>

      <div className='signUp__form'>
        <div className='signUp__form__name'>
          <input
            type='text'
            placeholder='First Name'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input type='text' placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>

        <input type='text' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />

        <input type='text' placeholder='New Password' value={password} onChange={(e) => setPassword(e.target.value)} />

        <div className='signUp__form__birthday'>
          <select name='month'>
            <option value='January'>January</option>
            <option value='February'>February</option>
            <option value='March'>March</option>
            <option value='April'>April</option>
            <option value='May'>May</option>
            <option value='June'>June</option>
            <option value='July'>July</option>
            <option value='August'>August</option>
            <option value='September' defaultChecked>
              September
            </option>
            <option value='October'>October</option>
            <option value='November'>November</option>
            <option value='December'>December</option>
          </select>

          <select name='day'>
            <option value='1' defaultChecked>
              1
            </option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
            <option value='7'>7</option>
            <option value='8'>8</option>
            <option value='9'>9</option>
            <option value='10'>10</option>
            <option value='11'>11</option>
            <option value='12'>12</option>
            <option value='13'>13</option>
            <option value='14'>14</option>
            <option value='15'>15</option>
            <option value='16'>16</option>
            <option value='17'>17</option>
            <option value='18'>18</option>
            <option value='19'>19</option>
            <option value='20'>20</option>
            <option value='21'>21</option>
            <option value='22'>22</option>
            <option value='23'>23</option>
            <option value='24'>24</option>
            <option value='25'>25</option>
            <option value='26'>26</option>
            <option value='27'>27</option>
            <option value='28'>28</option>
            <option value='29'>29</option>
            <option value='30'>30</option>
            <option value='31'>31</option>
          </select>

          <select name='year'>
            <option value='2020'>2020</option>
            <option value='2019'>2019</option>
            <option value='2018'>2018</option>
            <option value='2017'>2017</option>
            <option value='2016'>2016</option>
            <option value='2015'>2015</option>
            <option value='2014'>2014</option>
            <option value='2013'>2013</option>
            <option value='2012'>2012</option>
            <option value='2011'>2011</option>
            <option value='2010'>2010</option>
            <option value='2009'>2009</option>
            <option value='2008'>2008</option>
            <option value='2007'>2007</option>
            <option value='2006'>2006</option>
            <option value='2005'>2005</option>
            <option value='2004'>2004</option>
            <option value='2003'>2003</option>
            <option value='2002'>2002</option>
            <option value='2001'>2001</option>
            <option value='2000'>2000</option>
            <option value='1999'>1999</option>
            <option value='1998'>1998</option>
            <option value='1997'>1997</option>
            <option value='1996'>1996</option>
            <option value='1995'>1995</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default SignUp
