import { createContext, useState, useEffect} from "react";
import { Youtube_Videos_Url } from './Constants'



 export const InfoContext= createContext()

 export const InfoProvider = ({children}) => {
    const [videoInfo, setvideoInfo] = useState([]);

    useEffect(() => {
        getVideos();
    }, []);

    const getVideos = async () => {
        try { 
            const data = await fetch(Youtube_Videos_Url);
            if (!data.ok) {
                throw new Error(`HTTP error! status: ${data.status}`);
            }
            const json = await data.json();
            setvideoInfo(json?.items);
        } catch (error) {
            console.error("fetching data error:", error);
        }
    };

    return (
        <InfoContext.Provider value={videoInfo}>
           {children}
        </InfoContext.Provider>
    );
};
