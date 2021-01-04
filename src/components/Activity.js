function Activity({randomActivity}) {
    if (!randomActivity) return null;
    let activityName = randomActivity.activity.toLowerCase();
    return (
        <div className="activity-suggestion">
            <p>Why not:</p>
            <h1>{activityName}?</h1>
        </div>
    );
}

export default Activity;