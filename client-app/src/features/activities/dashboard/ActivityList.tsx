import { Button, Item, Label, Segment } from "semantic-ui-react";
import { Activity } from "../../../models/Activity";

interface Props {
  activities: Activity[];
  onSelectActivity: (id: string) => void;
  onDeleteActivity: (id: string) => void;
}

const ActivityList = ({
  activities,
  onSelectActivity,
  onDeleteActivity,
}: Props) => {
  return (
    <Segment>
      <Item.Group divided>
        {activities.map((activity) => (
          <Item key={activity.id}>
            <Item.Content>
              <Item.Header as='a'>{activity.title}</Item.Header>
              <Item.Meta>{activity.date}</Item.Meta>
              <Item.Description>
                <div>{activity.description}</div>
                <div>
                  {activity.city}, {activity.venue}
                </div>
              </Item.Description>
              <Item.Extra>
                <Button
                  floated='right'
                  content='View'
                  color='blue'
                  onClick={() => onSelectActivity(activity.id)}
                />
                <Button
                  floated='right'
                  content='Delete'
                  color='red'
                  onClick={() => onDeleteActivity(activity.id)}
                />
                <Label
                  basic
                  content={activity.category}
                />
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
};

export default ActivityList;