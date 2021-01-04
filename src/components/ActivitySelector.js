function ActivitySelector({handleActivityTypeSelection}) {
    let selectedCategory = null;
    const handleChange = event => {
        selectedCategory = event.target.value;
        handleActivityTypeSelection(selectedCategory);
    }

    return (
        <div className="activity-selector">
            <h2>Need something</h2>
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
            <h2>to fill the hours?</h2>
        </div>
    );
}

export default ActivitySelector;