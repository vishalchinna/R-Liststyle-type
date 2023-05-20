import UserProfile from './Components/UserProfile/index'
import './App.css'

const userDetails = [
  {
    url: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'vishal',
    role: 'Manager',
  },
  {
    url: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'kumar',
    role: 'Manager',
  },
  {
    url: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'rajesh',
    role: 'Manager',
  },
  {
    url: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'sathish',
    role: 'Manager',
  },
]
const App = () => (
  <div className="list-container">
    <h1 className="title">User List</h1>
    <input type="search" />
    <ul>
      {userDetails.map(each => (
        <UserProfile userDetails={each} />
      ))}
    </ul>
  </div>
)

export default App
