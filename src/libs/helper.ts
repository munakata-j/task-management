let NextID: number = 0
export function generateUniqueID(){
    const uniqueID = NextID + 1;
    NextID++
    console.log("Next ID -> ",NextID, ":","Unique ID ->", uniqueID)
    return uniqueID
}