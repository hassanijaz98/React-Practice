import NewMeetupForm from "../Components/Meetups/NewMeetupForm";
import {useHistory} from 'react-router-dom'

function NewMeetUpPage()
{
    const history =useHistory();

    function addmeetuphandler(meetupdata)
    {
        fetch('https://react-getting-started-237d8-default-rtdb.firebaseio.com/meetups.json',
        {
            method: 'POST' , 
            body: JSON.stringify(meetupdata),
            headers:
            {
                'Content-Type':'application/json'
            }
        }
        ).then(()=> {
            history.replace('/')
        });
    }

    return (
    <section>
        <h1>Add New Meetup</h1>
        <NewMeetupForm onaddmeetup={addmeetuphandler} />
    </section>
    );
}
export default NewMeetUpPage;