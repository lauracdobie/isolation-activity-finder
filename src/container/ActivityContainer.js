import {useState, useEffect} from "react";
import Activity from '../components/Activity';
import ActivitySelector from '../components/ActivitySelector';

function ActivityContainer() {
    const [randomActivity, setRandomActivity] = useState('');

    const handleActivityTypeSelection = activity => {

        let activityUrl = null;
        (activity === "free") ? activityUrl = "http://www.boredapi.com/api/activity?price=0.0&participants=1": activityUrl = `http://www.boredapi.com/api/activity?type=${activity}&participants=1`

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