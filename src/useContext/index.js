/**
 * Created by ever on 2020/9/2.
 */
import React, {Fragment, useContext, useState} from 'react'

const ProfileContext = React.createContext()
const ProfileProvider = (props)=>{
  const userInformation = {
    company: 'Progress',
    companyImage: 'https://svgshare.com/i/9ir.svg',
    url: 'https://www.telerik.com/kendo-react-ui/',
    userImage: 'https://i.imgur.com/Y1XRKLf.png',
    userName: 'Kendoken',
    fullName: 'Kendoken No Michi',
    team: 'KendoReact',
    toggleTeam: (property, value) => {
      setUserInfo(
        {...userInfo,[property]: value}
      );
    }
  }
  const [userInfo, setUserInfo] = useState(userInformation)
  return (
    <ProfileContext.Provider value={userInfo}>
      {props.children}
    </ProfileContext.Provider>
  )
}
const Profile = ()=>{
  const context = useContext(ProfileContext)
  return(
    <div className={'profile'}>
      <img src={context.companyImage} alt=""/>
      <User/>
    </div>
  )
}
const User = ()=>{
  const context = useContext(ProfileContext)
  return(
    <div className={'user'}>
      <a href={context.url}>
        <img src={context.userImage} width={'138px'} alt=""/>
      </a>
      <h1 className={'profile-userName'}>{context.userName}</h1>
      <p className={'profile-fullName'}>{context.fullName}</p>
      <Team/>
      <ChangeTeam/>
    </div>
  )
}
const Team = ()=>{
  const context = useContext(ProfileContext)
  return(
    <div className={'team'}>
      <p className={'profile-team'}>{context.team}</p>
    </div>
  )
}
const ChangeTeam = ()=>{
  const context = useContext(ProfileContext)
  return(
    <>
     <button className={'profile-button'} onClick={()=>context.toggleTeam('team','Kendo for Anglar')}>Angular</button>
     <button className={'profile-button'} onClick={()=>context.toggleTeam('team','Kendo for kendoVue')}>Vue</button>
     <button className={'profile-button'} onClick={()=>context.toggleTeam('team','Kendo for KendoReact')}>React</button>
    </>
  )
}
export default function App() {
    return (
      <ProfileProvider>
        <Profile/>
      </ProfileProvider>
    )
}
