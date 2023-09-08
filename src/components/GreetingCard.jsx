import UserProfile from "./UserProfile"

const GreetingCard = (event) => {
    console.log("event", event)
    alert(`Witam ${UserProfile.profileName}`)
}
export default GreetingCard