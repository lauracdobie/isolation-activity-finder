function ActivitySelector({handleActivityTypeSelection}) {
    const handleChange = event => {
        handleActivityTypeSelection(event.target.value);
    }

    return (
        <>
            <p>Find me something that's...</p> 
            <select defaultValue="" onChange={handleChange}>
                <option value="" disabled>Activity type</option>
                <option value="social">sociable</option>
                <option value="relaxation">relaxing</option>
                <option value="education">educational</option>                
                <option value="charity">charitable</option>                
                <option value="cooking">edible</option>                
                <option value="music">musical</option>                
                <option value="busywork">industrious</option>                
                <option value="free">free!</option>                

            </select>
        </>
    );
}

export default ActivitySelector;