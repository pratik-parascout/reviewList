import KeyRoundedIcon from '@mui/icons-material/KeyRounded'
import PortraitRoundedIcon from '@mui/icons-material/PortraitRounded'
import CategorySharpIcon from '@mui/icons-material/CategorySharp'
import AttachMoneySharpIcon from '@mui/icons-material/AttachMoneySharp'
import PercentSharpIcon from '@mui/icons-material/PercentSharp'
import HelpSharpIcon from '@mui/icons-material/HelpSharp'
import { useState } from 'react'
import Profile from './images/profile.jpg'

export const Left = () => {
  const [option, setOption] = useState('Review List')
  const [activeOption, setActiveOption] = useState('Dashboard') // Track the active option

  const handleOptionClick = (newOption) => {
    setOption(newOption)
    setActiveOption(newOption)
  }

  return (
    <div className="left">
      <div className="left__head">
        <h3>{option}</h3>
      </div>

      <div className="list">
        <ul>
          <li className="options">
            <a
              className={`options ${
                activeOption === 'Review List' ? 'toggle' : ''
              }`}
              href="#"
              onClick={() => handleOptionClick('Review List')}
            >
              <KeyRoundedIcon className="icon" />
              Review List
            </a>
          </li>

          <li className="options">
            <a
              className={`options ${
                activeOption === 'Product' ? 'toggle' : ''
              }`}
              href="#"
              onClick={() => handleOptionClick('Product')}
            >
              <CategorySharpIcon className="icon" />
              Product
            </a>
          </li>

          <li className="options">
            <a
              className={`options ${
                activeOption === 'Customer' ? 'toggle' : ''
              }`}
              href="#"
              onClick={() => handleOptionClick('Customer')}
            >
              <PortraitRoundedIcon className="icon" />
              Customer
            </a>
          </li>

          <li className="options">
            <a
              className={`options ${activeOption === 'Income' ? 'toggle' : ''}`}
              href="#"
              onClick={() => handleOptionClick('Income')}
            >
              <AttachMoneySharpIcon className="icon" />
              Income
            </a>
          </li>

          <li className="options">
            <a
              className={`options ${
                activeOption === 'Promote' ? 'toggle' : ''
              }`}
              href="#"
              onClick={() => handleOptionClick('Promote')}
            >
              <PercentSharpIcon className="icon" />
              Promote
            </a>
          </li>

          <li className="options">
            <a
              className={`options ${activeOption === 'Help' ? 'toggle' : ''}`}
              href="#"
              onClick={() => handleOptionClick('Help')}
            >
              <HelpSharpIcon className="icon" />
              Help
            </a>
          </li>
        </ul>
      </div>

      <div className="profile__sec">
        <a href="#" className="profile__sec">
          <img src={Profile} alt="Profile" className="left__profile" />
          <div>
            <h6>ChickPea</h6>
            <p>Project Manager</p>
          </div>
        </a>
      </div>
    </div>
  )
}
