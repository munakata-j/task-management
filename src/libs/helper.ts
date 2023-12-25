let NextID: number = 0
export function generateUniqueID(){
    const uniqueID = NextID + 1;
    NextID++
    console.log("Next ID -> ",NextID, ":","Unique ID ->", uniqueID)
    return uniqueID
}

export function getPriorityColor(priority: string){
    switch (priority){
        case "High":
            return "red";
        case "Middle":
            return "blue";
        case "Low":
            return "green"
        default:
            return "grey"
    }
}