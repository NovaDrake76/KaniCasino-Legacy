const Profile = ({ user }) => {
  return (
    <div className="profile">
      <div className="profile__avatar">
        <img src={user.avatar} alt="avatar" />
      </div>
      <div className="profile__info">
        <div className="profile__info__name">{user.name}</div>
        <div className="profile__info__email">{user.email}</div>
      </div>
    </div>
  )
}

export default Profile
