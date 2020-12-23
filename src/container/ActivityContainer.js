import {useState, useEffect} from "react";
import Activity from '../components/Activity';

function ActivityContainer() {
    const [randomActivity, setRandomActivity] = useState('');

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
        <h1>Stuck at home? Need something to distract you from the impending apocalypse?</h1>
        <Activity randomActivity={randomActivity} />
      </>
    );
  }
  
  export default ActivityContainer;