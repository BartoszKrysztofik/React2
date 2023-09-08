import ProfileDetails from './ProfileDetails';
import ProfileFoto from './ProfileFoto';


const UserProfile = () => {
    //na potrzeby poukladania calosci, wstawiam dane ziomka z FakeProfile
    const fakeProfile = {
        name: "Zygryd",
        nickName: "Zigi",
        email: 'zigi@wp.pl'
    };
    const profileData = {
        name: `${fakeProfile.name}`,
        nickName: `${fakeProfile.nickName}`,
        email: `${fakeProfile.email}`
    };
    return (
        <div className="user-profile">
            <div className='detais'>
                <ProfileDetails name={profileData.name} nickName={profileData.nickName} email={profileData.email} />
            </div>
            <div className='picture'>
                <ProfileFoto src={profileData.imageSrc} />
            </div>
        </div>
    );
}

export default UserProfile

