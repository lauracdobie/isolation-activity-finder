function Activity({randomActivity}) {
    if (!randomActivity) return null;
    let activityName = randomActivity.activity.toLowerCase();
    return (
        <>
            <p>Why not {activityName}? </p>
        </>
    );
}

export default Activity;