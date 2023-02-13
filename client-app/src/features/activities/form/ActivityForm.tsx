import { ChangeEvent, FormEvent, useId, useState } from "react";
import { Form, FormButton, FormGroup, Segment } from "semantic-ui-react";
import { Activity } from "../../../models/Activity";

interface Props {
  activity?: Activity;
  onSubmitForm: (activity: Activity) => void;
  onCloseForm: () => void;
}

const ActivityForm = ({ activity: selectedActivity, onSubmitForm, onCloseForm }: Props) => {
  const initialState = selectedActivity ?? {
    id: "",
    title: "",
    category: "",
    description: "",
    date: "",
    city: "",
    venue: "",
  };

  const [activity, setActivity] = useState<Activity>(initialState);

  const handleSubmitForm = (event: FormEvent) => {
    event.preventDefault();

    onSubmitForm(activity);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    
    setActivity({ ...activity, [name]: value });
  };

  return (
    <Segment>
      <Form
        onSubmit={handleSubmitForm}
        autoComplete='off'
      >
        <Form.Input
          name='title'
          placeholder='Title'
          value={activity.title}
          onChange={handleInputChange}
        />
        <Form.TextArea
          name='description'
          placeholder='Description'
          value={activity.description}
          onChange={handleInputChange}
        />
        <Form.Input
          name='category'
          placeholder='Category'
          value={activity.category}
          onChange={handleInputChange}
        />
        <Form.Input
          name='date'
          placeholder='Date'
          value={activity.date}
          onChange={handleInputChange}
        />
        <Form.Input
          name='city'
          placeholder='City'
          value={activity.city}
          onChange={handleInputChange}
        />
        <Form.Input
          name='venue'
          placeholder='Venue'
          value={activity.venue}
          onChange={handleInputChange}
        />

        <FormGroup widths='equal'>
          <FormButton
            type='submit'
            content='Submit'
            positive
          />
          <FormButton
            type='button'
            content='Cancle'
            floated='right'
            onClick={onCloseForm}
          />
        </FormGroup>
      </Form>
    </Segment>
  );
};

export default ActivityForm;
