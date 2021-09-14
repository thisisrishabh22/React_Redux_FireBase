export const createProject = (project) => {
    return (dispatch, getState, { getFirestore }) => {
        // make async call to db
        const firestore = getFirestore();
        firestore
            .collection("projects")
            .add({
                ...project,
                authorFirstName: "Rishabh",
                authorLastName: "Singh",
                authorId: 12345,
                createdAt: new Date(),
            })
            .then(() => {
                dispatch({ type: "CREATE_PROJECT_SUCCESS" });
            })
            .catch((err) => {
                dispatch({ type: "CREATE_PROJECT_ERROR" }, err);
            });
    };
};
