import {useState, useEffect} from "react";
import Activity from '../components/Activity';
import ActivitySelector from '../components/ActivitySelector';

function ActivityContainer() {
    const [randomActivity, setRandomActivity] = useState('');
    // const [selectedActivityType, setSelectedActivityType] = useState('');

    // const getSelectedActivityType = activity => {
    //     setSelectedActivityType(activity)
    // }

    // const getActivityUrl = selectedActivityType => {
    //     let activityUrl = null;
    //     (selectedActivityType === "free") ? activityUrl = "http://www.boredapi.com/api/activity?price=0.0": activityUrl = `http://www.boredapi.com/api/activity?type=${selectedActivityType}`
    //     return activityUrl;
    // }

    const handleActivityTypeSelection = activity => {
        // setSelectedActivityType(activity);

        let activityUrl = null;
        (activity === "free") ? activityUrl = "http://www.boredapi.com/api/activity?price=0.0": activityUrl = `http://www.boredapi.com/api/activity?type=${activity}`

        console.log(activityUrl);
        getRandomActivity(activityUrl);

    }

    const getRandomActivity = (url) => {
        let promise = fetch(url)
        console.log(url)
        promise.then(res=>res.json())
        .then(data=>{
            console.log(data);
            setRandomActivity(data)
        });
    }

    useEffect(()=>{
        getRandomActivity("http://www.boredapi.com/api/activity?participants=1")
    }, []);

    // useEffect(() => {
    //     handleActivityTypeSelection(selectedActivityType);
    // }, [selectedActivityType])

    return (
      <>
        <h1>Self isolating? Need something hermit-friendly to fill the hours?</h1>
        <Activity randomActivity={randomActivity} />
        <h2>Not your thing? Get another suggestion!</h2>
        <ActivitySelector handleActivityTypeSelection={handleActivityTypeSelection}/>
      </>
    );
  }
  
  export default ActivityContainer;