import { Button, Card, Image } from "semantic-ui-react";
import { Activity } from "../../../models/Activity";

interface Props {
  activity: Activity;
  onCancleSelectActivity: () => void;
  onOpenForm: (id: string) => void;
}

const ActivityDetials = ({ activity, onCancleSelectActivity, onOpenForm }: Props) => {
  return (
    <Card fluid>
      <Image
        src={`/assets/categoryImages/${activity.category}.jpg`}
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>{activity.title}</Card.Header>
        <Card.Meta>
          <span className='date'>{activity.date}</span>
        </Card.Meta>
        <Card.Description>{activity.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths='2'>
          <Button
            basic
            color='blue'
            content='Edit'
            onClick={() => onOpenForm(activity.id)}
          />
          <Button
            basic
            color='grey'
            content='Cancle'
            onClick={onCancleSelectActivity}
          />
        </Button.Group>
      </Card.Content>
    </Card>
  );
};

export default ActivityDetials;
