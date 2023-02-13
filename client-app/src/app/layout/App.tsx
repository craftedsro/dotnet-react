import axios from "axios";
import { useEffect, useId, useState } from "react";
import { Container } from "semantic-ui-react";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import { Activity } from "../../models/Activity";
import NavBar from "./NavBar";
import { v4 as uuid } from "uuid";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<
    Activity | undefined
  >(undefined);
  const [editMode, setEditMode] = useState<boolean>(false);

  useEffect(() => {
    axios
      .get<Activity[]>("http://localhost:5000/api/activities")
      .then((res) => {
        setActivities(res.data);
      });
  }, []);

  const handleSelectActivity = (id: string) => {
    setSelectedActivity(activities.find((activity) => activity.id === id));
  };

  const handleCancelSelectActivity = () => {
    setSelectedActivity(undefined);
  };

  const handleDeleteActivity = (id: string) => {
    setActivities((prevState) => [
      ...prevState.filter((activity) => activity.id !== id),
    ]);
  };

  const handleSubmitForm = (activity: Activity) => {
    activity.id
      ? setActivities((prevState) => {
          return [...prevState.filter((x) => x.id !== activity.id), activity];
        })
      : setActivities((prevState) => [
          ...prevState,
          { ...activity, id: uuid() },
        ]);
    setEditMode(false);
    setSelectedActivity(activity);
  };

  const handleOpenForm = (id?: string) => {
    id ? handleSelectActivity(id) : handleCancelSelectActivity();
    setEditMode(true);
  };

  const handleFormClose = () => {
    setEditMode(false);
  };

  return (
    <>
      <NavBar onOpenForm={handleOpenForm} />
      <Container style={{ marginTop: "7em" }}>
        <ActivityDashboard
          activities={activities}
          selectedActivity={selectedActivity}
          editMode={editMode}
          onSelecteActivity={handleSelectActivity}
          onCancleSelectActivity={handleCancelSelectActivity}
          onSubmitForm={handleSubmitForm}
          onDeleteActivity={handleDeleteActivity}
          onOpenForm={handleOpenForm}
          onCloseForm={handleFormClose}
        />
      </Container>
    </>
  );
}

export default App;
