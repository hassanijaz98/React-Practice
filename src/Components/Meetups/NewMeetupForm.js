import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";
import { useRef } from "react";

function NewMeetupForm(props) {

  const titleinputref = useRef();
  const imageinputref = useRef();
  const addressinputref = useRef();
  const descriptioninputref = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredtitle = titleinputref.current.value;
    const enteredimage = imageinputref.current.value;
    const enteredaddress = addressinputref.current.value;
    const entereddescription = descriptioninputref.current.value;

    const meetupdata = {
      title: enteredtitle,
      address: enteredaddress,
      image: enteredimage,
      description: entereddescription,
    };
    props.onaddmeetup(meetupdata);

  }
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleinputref}></input>
        </div>

        <div className={classes.control}>
          <label htmlFor="image">Meetup image</label>
          <input type="url" required id="image" ref={imageinputref}></input>
        </div>

        <div className={classes.control}>
          <label htmlFor="address">Meetup address</label>
          <input
            type="text"
            required
            id="address"
            ref={addressinputref}
          ></input>
        </div>

        <div className={classes.control}>
          <label htmlFor="description">Meetup descrption</label>
          <textarea
            type="description"
            required
            id="description"
            ref={descriptioninputref}
          ></textarea>
        </div>

        <div className={classes.actions}>
          <button>Add Meetup </button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
