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
        <section className="self-isolating">
          <h2 id="question">Self isolating?</h2>
            <ActivitySelector handleActivityTypeSelection={handleActivityTypeSelection}/> 
        </section>
        <Activity randomActivity={randomActivity} />
      </>
    );
  }
  
  export default ActivityContainer;