// eslint-disable-next-line react/prop-types
const ProfileDetails = ({ name, nickName, email }) => {
    return (
        <div className="profile-details">
            <p className="profileName">Name: {name}</p>
            <p className="nickName">Nickname: {nickName}</p>
            <p className="mail">Email: {email}</p>
        </div>
    );
}

export default ProfileDetails;
