import { Grid } from "semantic-ui-react";
import { Activity } from "../../../models/Activity";
import ActivityDetials from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";
import ActivityList from "./ActivityList";

interface Props {
  activities: Activity[];
  selectedActivity?: Activity;
  editMode: boolean;
  onSelecteActivity: (id: string) => void;
  onCancleSelectActivity: () => void;
  onSubmitForm: (activity: Activity) => void;
  onDeleteActivity: (id: string) => void;
  onOpenForm: (id: string) => void;
  onCloseForm: () => void;
}

const ActivityDashboard = ({
  activities,
  selectedActivity,
  editMode,
  onSelecteActivity,
  onCancleSelectActivity,
  onSubmitForm,
  onDeleteActivity,
  onOpenForm,
  onCloseForm,
}: Props) => {
  return (
    <Grid>
      <Grid.Column width='10'>
        <ActivityList
          activities={activities}
          onSelectActivity={onSelecteActivity}
          onDeleteActivity={onDeleteActivity}
        />
      </Grid.Column>
      <Grid.Column width='6'>
        {selectedActivity && !editMode && (
          <ActivityDetials
            activity={selectedActivity}
            onCancleSelectActivity={onCancleSelectActivity}
            onOpenForm={onOpenForm}
          />
        )}
        {editMode && <ActivityForm activity={selectedActivity} onSubmitForm={onSubmitForm} onCloseForm={onCloseForm} />}
      </Grid.Column>
    </Grid>
  );
};

export default ActivityDashboard;
